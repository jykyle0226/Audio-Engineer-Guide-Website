import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    date: "",
    name: "",
    role: "",
    feedback: "",
    solution: "",
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createFeedback(newForm);

  };

  const loaded = () => {
    return props.feedback.map((data) => (
      <li key={data._id} className="feedback-data">
        <Link to={`/Feedback/${data._id}`}>
          <h1>{data.date}</h1>
          <h3>{data.feedback}</h3>
        </Link>
      </li>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="date"
          value={newForm.date}
          onChange={handleChange}
          placeholder="date"
          type="text"
        />
        <input
          name="name"
          value={newForm.name}
          onChange={handleChange}
          placeholder="name"
          type="text"
        />
        <input
          name="role"
          value={newForm.role}
          onChange={handleChange}
          placeholder="role"
          type="text"
        />
        <input
          name="feedback"
          value={newForm.feedback}
          onChange={handleChange}
          placeholder="feedback"
          type="text"
        />
        <input
          name="solution"
          value={newForm.solution}
          onChange={handleChange}
          placeholder="solution"
          type="text"
        />
        <input type="submit" value="Create Feedback" />
      </form>
      {props.feedback ? <ol>{loaded()}</ol> : loading()}
    </section>
  );
};

export default Index;
