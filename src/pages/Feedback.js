import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Show from "../pages/Show";
import Index from "../pages/Index";
import Create from "../components/Create";
import "../Style/Index.css";
const Feedback = (props) => {
  const [feedback, setFeedback] = useState(null);

  const URL = "https://gcck-auido-engieenr-website.herokuapp.com/Feedback";

  const getFeedback = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFeedback(data);
  };

  const createFeedback = async (fedback) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(fedback),
    });
    getFeedback();
  };


  const updateFeedback = async (fedback, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(fedback),
    });
    getFeedback();
  };

  const deleteFeedback = async (id) => {
    await fetch(URL + id, { method: "DELETE" });
    getFeedback();
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/Feedback/create">
          <Create feedback={feedback} createFeedback={createFeedback} />
        </Route>
        <Route exact path="/Feedback">
          <Index feedback={feedback} createFeedback={createFeedback} />
        </Route>
        <Route
          exact path="/Feedback/:id"
          render={(rp) => (
            <Show
              feedback={feedback}
              URL={URL}
              getFeedback={getFeedback}
              updateFeedback={updateFeedback}
              deleteFeedback={deleteFeedback}
              {...rp}
            />
          )}
        />
      </Switch>
      <div id="add-button">
        <Link to="/Feedback/create">
          <button  className="button-40">
            Add Feedback
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Feedback;
