import React, { useState } from "react";
import uuid from "uuid/v4";

function NewTaskForm(props) {
	let [name, setName] = useState("");
	let [status, setStatus] = useState("");
	let [nameError, setNameError] = useState(""); 

	let [addBtnDisabled, setAddBtnDisabled] = useState(true);

	function nameChangeHandler(event) {
		setName(event.target.value);

		if(event.target.value.trim() === ""){
			setNameError("This field is required");
		} else {
			setNameError("");		
		}
	}

	

	checkForm();

	function checkForm() {
		if(name.trim() !== "") {
			if(addBtnDisabled !== false) {
				setAddBtnDisabled(false);
			}	
		} else {
			if(addBtnDisabled !== true) {
				setAddBtnDisabled(true);
			}	
		}
	}

	function addClickHandler() {
		let newTask = {
			id: uuid(),
			name: name,
			status: status
		}
		props.addToTask(newTask);
		
		setName("");
		setStatus("");		
	}

	return(
		<form className="container">
			<div className="form-group mt-5">
				<label htmlFor="name">Name</label>
				<input
					onChange={nameChangeHandler}
					onBlur={nameChangeHandler}
					className="form-control text-center" 
					type="text" 
					id="name"
					autoComplete="off"
					value={name} // two-way binding
				/>
				<small className="text-danger">{nameError}</small>
			</div>
			
			<button 
				onClick={addClickHandler} 
				type="button" 
				className="btn btn-success mb-5"
				> Add Task
			</button>
			<button
				onClick={props.addBtnClick} 
				type="button" 
				className="btn btn-danger float-right mb-5"
				> Cancel
			</button>
		</form>
		);
}

export default NewTaskForm ;