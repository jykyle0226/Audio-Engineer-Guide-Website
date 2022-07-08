import React from "react";
import { useState } from "react";

const Create = (props) => {
  const [ newForm, setNewForm ] = useState({
    date: '',
    name: '',
    role: '',
    feedback: '',
    solution: ''
  });


  const handleChange = (event) => {
    setNewForm({
      ...newForm, [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createDestination(newForm);
  };


  return(
    <div className="createForm">
      <form onSubmit={handleSubmit}>

        <input 
          value={newForm.date}
          onChange={handleChange}
          name="date"
          type="text"
          placeholder="e.g 'July 4th, 2022" 
        />
        <br />
        <input 
          value={newForm.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="" 
        />
        <br />
        <input 
          value={newForm.role}
          onChange={handleChange}
          name="role"
          placeholder="e.g Audio Engineer" 
        />
        <br />
        <input 
          value={newForm.feedback}
          onChange={handleChange}
          name="feedback"
          type="text"
          placeholder="" 
        />
        <input 
          value={newForm.solution}
          onChange={handleChange}
          name="solution"
          type="text"
          placeholder="" 
        />
        
        <br />
        <input type="submit" value="Add to feedback"/>
      </form>
    </div>
  )
}

export default Create;