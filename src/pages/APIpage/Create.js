import { useState, Redirect } from "react";
import "../../Style/create.css";
const Create = (props) => {

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
    return <Redirect to="/Feedback" />

  };
  return (
    <div className="the-div">
          <div className="create-div">
      <form onSubmit={handleSubmit}>
      <h2>Date</h2>
      <input
      className="create-input1"
        name="date"
        value={newForm.date}
        onChange={handleChange}
        placeholder="e.g 01/01/2022"
        type="text"
      />
      <h2>Name</h2>
      <input
      className="create-input1"
        name="name"
        value={newForm.name}
        onChange={handleChange}
        placeholder="name"
        type="text"
      />
      <h2>Role</h2>
      <input
      className="create-input1"
        name="role"
        value={newForm.role}
        onChange={handleChange}
        placeholder="role"
        type="text"
      />
      <h2>Feedback</h2>
      <input
      className="create-input2"
        name="feedback"
        value={newForm.feedback}
        onChange={handleChange}
        placeholder="feedback"
        type="text"
      />
      <h2>Solution</h2>
      <input
      className="create-input2"
        name="solution"
        value={newForm.solution}
        onChange={handleChange}
        placeholder="solution"
        type="text"
      />
      <div className="create-button">
      <input id="create-button" className="button-40" type="submit" value="Create Feedback" />
      </div>

    </form>
    </div>
    </div>

    
  );
};
export default Create