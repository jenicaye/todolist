import React, { useState } from 'react';
import TaskList from "./components/TaskList";
import TaskListGroup from "./components/TaskListGroup";
import NewTaskForm from "./components/NewTaskForm";
// import uuid from "uuid/v4";

function App() {
  let [pendingTask, setPendingTask] = useState([]);
  let [ongoingTask, setOngoingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);

  let [task, setTask] = useState([]);
  
  let [showForm, setShowForm] = useState(true);
    //{id: uid(), name: "Peter", job: "Plumber"},
    //{id: uuid(), name: "James", job: "Trainer"},
    //{id: uuid(), name: "Lex", job: "Construction Worker"},
    //{id: uuid(), name: "Sasha", job: "Bartender"},
    //{id: uuid(), name: "Maria", job: "Student"},
  let taskDisplay = task.map( function(item){ // to pass value from parent to child we use "props"
      return( 
          <TaskList 
            key = {item.id} 
            id = {item.id} 
            name = {item.name} 
            status = {item.status}
            addToPendingTaskGroup = {addToPendingTaskGroup}
            addToOngoingTaskGroup = {addToOngoingTaskGroup}
            addToDoneTaskGroup = {addToDoneTaskGroup}
            removeTask = {removeTask}
          />
        );
    });

    function cancelBtnClick(){
      setShowForm(false);
    }

    function addBtnClick(){
      setShowForm(true);
    }

    //let choice = showForm.display;

    function addTaskForm() {
      if(showForm === true){
        return(
          <div className="text-center">
            <button 
              onClick={cancelBtnClick} 
              className="btn btn-primary mt-5 mb-5"
              >Add Task
            </button>
          </div>
          )
      } else if (showForm === false) {
        return(
          <NewTaskForm  addToTask={addToTask}
          addBtnClick={addBtnClick}/>
          )
      }
    }

    function addToTask(newTask){
      setTask([...task, newTask]);
    }

    function addToPendingTaskGroup(newAssignedTask){
      setPendingTask([...pendingTask, newAssignedTask]);

      let newTask = task.filter( function(item){
        return (item.id !== newAssignedTask.id);
      });

      setTask(newTask);
    }

    function addToOngoingTaskGroup(newAssignedTask){
      setOngoingTask ([...ongoingTask, newAssignedTask]);
        

      let newTask = task.filter( function(item){
        return (item.id !== newAssignedTask.id);
      });

      setTask(newTask);
    }


    function addToDoneTaskGroup(newAssignedTask){
      setDoneTask ([...doneTask, newAssignedTask]);
        

      let newTask = task.filter( function(item){
        return (item.id !== newAssignedTask.id);
      });

      setTask(newTask);
    }

    function removeTask(assignedTask){
      let returnTask = task.filter( function(item){
        if(item.id !== assignedTask.id){
          return item;
        }
      });
      
      setTask(returnTask);
    }

    function removePendingTask(galingSaPendingTaskNaItem) {
      setTask([...task, galingSaPendingTaskNaItem]);

      let updatedPendingTask = pendingTask.filter( function(assignedTask) {
        return (galingSaPendingTaskNaItem.id !== assignedTask.id);
      });

      setPendingTask(updatedPendingTask);
    }

    function removeOngoingTask(galingSaOngoingTaskNaItem) {
      setTask([...task, galingSaOngoingTaskNaItem]);

      let updatedOngoingTask = ongoingTask.filter( function(assignedTask) {
        return (galingSaOngoingTaskNaItem.id !== assignedTask.id);
      });

      setOngoingTask (updatedOngoingTask);
    }

     function removeDoneTask(galingSaDoneTaskNaItem) {
      setTask([...task, galingSaDoneTaskNaItem]);

      let updatedDoneTask = doneTask.filter( function(assignedTask) {
        return (galingSaDoneTaskNaItem.id !== assignedTask.id);
      });

      setDoneTask (updatedDoneTask);
    }

    function showTable() {
      if(task.length > 0) {
        return(
          <table className ="table table-striped text-center">
              <thead className="bg-primary">
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {taskDisplay}
              </tbody>
          </table>
          );
        } else {
          return (
            <div className="jumbotron">
              <h5>No Task to Display</h5>
              <p>You may add task using the form above.</p>
            </div>
             );
        }
      }

    function showGroups() {
      if(pendingTask.length > 0 || ongoingTask.length > 0 || doneTask.length > 0) {
        return(
          <div className="rows">
            <div className="col-12">
              <h2>Pending Task</h2>
              <TaskListGroup
                group={pendingTask } 
                color="danger"
                a={removePendingTask}
              />
            </div>
            <div className="col-12">
              <h2>Ongoing Task</h2>
              <TaskListGroup
                group={ongoingTask} 
                color="primary"
                a={removeOngoingTask}
              />
            </div>
            <div className="col-12">
              <h2>Done Task</h2>
              <TaskListGroup
                group={doneTask} 
                color="success"
                a={removeDoneTask}
              />
            </div>
          </div>
          );
      } else {
        return (
          <div className="jumbotron container-fluid">
            <h5>No Task Group are assigned</h5>
          </div>
        );
      }
    }

  return (  
    <div className="App container">
        { addTaskForm() }
        { showTable() }
        { showGroups() }
    </div>
   );
}

export default App;