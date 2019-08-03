import React from "react";
import TaskListItem from "./TaskListItem";

function TaskListGroup(props) {
	let listGroupColor = "list-group-item list-group-item-" + props.color;
	let display = props.group.map( function(item){
		return (
			<TaskListItem
				key = {item.id}
				listGroupColor = {listGroupColor}
				id = {item.id}
				name={item.name}
				status={item.status}
				b={props.a}
			/>
		);
	});

	return(
		<div className="list-group">
			{ display }
		</div>
	);
}

export default TaskListGroup;