import { Link, Route } from "react-router-dom";
import "../Style/Index.css";

const Index = (props) => {
  const loaded = () => {
    return props.feedback.map((fedback) => (
      <div className="Index-div">
        <Link className="Index-Link" to={`/Feedback/${fedback._id}`}>
          <div key={fedback._id} className="Feedback-data">
            <table className="table">
              <tr>
                <th className="th">{fedback.date}</th>
                <th className="th">{fedback.name}</th>
              </tr>
            </table>
          </div>
        </Link>
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{props.feedback ? <ol>{loaded()}</ol> : loading()}</section>;
};

export default Index;
