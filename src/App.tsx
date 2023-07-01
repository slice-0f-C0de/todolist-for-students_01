import React from 'react';
import './App.css';
import {Todolist, TodolistTasksType} from "./Todolist";

function App() {

    let task1: Array<TodolistTasksType> = [
        {id:1, title: "HTML", isDone: true},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JavaScript", isDone: false}
    ]

    let task2: Array<TodolistTasksType> = [
        {id:1, title: "Pulp Fiction", isDone: true},
        {id:2, title: "Kill Bill vol. 1/2", isDone: true},
        {id:3, title: "Once Upon a Time... in Hollywood", isDone: true}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="Movies" tasks={task2}/>
        </div>
    );
}

export default App;
