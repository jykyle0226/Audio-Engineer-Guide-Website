import { useState, useEffect } from "react";
import Create from "../components/Create";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Show from "../pages/Show";
import Index from "../pages/Index";

const Feedback = (props) => {
  const [feedback, setFeedback] = useState(null);

  const URL = "http://localhost:4000/Feedback";

  const getFeedback = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFeedback(data);
  };

  const createFeedback = async (data) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const updateFeedback = async (updatedData, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(updatedData),
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
    <div>
      <Route path="/Feedback/create">
        <Create />
      </Route>
      <Link to={"/Feedback/create"}>
        <button>Create</button>
      </Link>
      <Route exact path={"/Feedback/"}>
        <Index feedback={feedback} createFeedback={createFeedback} />
      </Route>
      <Route
        path="/Feedback/:id"
        render={(rp) => (
          <Show feedback={feedback} {...rp} updateFeedback={updateFeedback} />
        )}
      />
    </div>
  );
};

export default Feedback;
