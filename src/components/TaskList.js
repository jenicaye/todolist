import React from "react";

function TaskList({id, name, status, addToPendingTaskGroup, addToOngoingTaskGroup, addToDoneTaskGroup, removeTask}) {
	function pendingBtnClicked(){
		addToPendingTaskGroup({id: id, name: name, status: status}); // event bubbling = passing values from parent to child
	}

	function ongoingBtnClicked(){
		addToOngoingTaskGroup({id: id, name: name, status: status}); // event bubbling = passing values from parent to child
	}

	function doneBtnClicked(){
		addToDoneTaskGroup({id: id, name: name, status: status}); // event bubbling = passing values from parent to child
	}

	function removeBtnClicked(){
		removeTask({id: id, name: name, status: status});
	}

	return(
		<tr>
	  		<td>{name}</td>
	  		<td>{status}</td>
	  		<td>
	  			<button onClick={pendingBtnClicked} className="btn btn-danger">Add to Pending Task Group</button>
	  			<button onClick={ongoingBtnClicked} className="btn btn-primary">Add to Ongoing Task Group</button>
	  			<button onClick={doneBtnClicked} className="btn btn-success">Add to Done Task Group</button>
	  			<button onClick={removeBtnClicked} className="btn btn-warning">Delete</button>
	  		</td>
	  	</tr>
	 );
}

export default TaskList;