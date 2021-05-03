import React from 'react';
import './TaskStyle.css';

const Task = (props) => {
    return (
      <div>
        <div>
          {props.id}, {props.name}, {props.description}, {props.completed ? "true":"false"}
        </div>
        <button className="buttonstyle" onClick={props.onClick}>Change status</button>
      </div>
    )
    }

export default Task