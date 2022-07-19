import { useState } from "react";
import React from "react";

const Show = (props) => {
  const id = props.match.params.id;
  const data = props.feedback.find((d) => d._id === id);
  const [editForm, setEditFrom] = useState(data);
  const handleChange = (event) => {
    setEditFrom({
      ...editForm,
      [event.target.date]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { date, name, role, feedback, solution, _id } = editForm;
    props.updateFeedback({ date, name, role, feedback, solution }, _id);
  };
  const handleRemove = (id) => {
    props.deleteFeedback(id);
    props.history.push("/");
  };
  return (
    <div className="data">
      <h1>{data.date}</h1>
      <h2>{data.name}</h2>
      {data.role ? <h2>{data.role}</h2> : <h2>trainee</h2>}
      <h2>{data.feedback}</h2>
      <h2>{data.solution}</h2>
      <button onClick={() => handleRemove(data._id)}>Delete this Feedback</button>
      <form onSubmit={handleSubmit()}>
        <input
          type="text"
          name="date"
          value={editForm.date}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="name"
          value={editForm.name}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="role"
          value={editForm.role}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="feedback"
          value={editForm.feedback}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="solution"
          value={editForm.solution}
          onChange={handleChange()}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Show;
