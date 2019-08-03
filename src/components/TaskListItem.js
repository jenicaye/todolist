import React from "react";

function TaskListItem(props){
	return (
		<div key={props.id} className={props.listGroupColor}>
			<h5>{props.name}</h5>
			<small onClick={function() {props.b({id: props.id , name: props.name, status: props.status})}}>Remove</small>
		</div>
	);
}

export default TaskListItem;