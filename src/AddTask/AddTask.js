import React from 'react';
import './AddTaskStyle.css';

class AddTask extends React.Component {
    state = {
      id: 0,
      name: '',
      description: '',
      completed: false
    }
    handleChange = (event) => {
      const {value, name} = event.currentTarget
      this.setState ({ [name]: value})
    }
    taskAdd = (props) => {
      this.props.addTask(this.state.name, this.state.description)
    }
    render() {
      return(
        <div>
            <p>Enter name</p>
            <input className="inputstyle" value={this.state.name} onChange={this.handleChange} name="name"/>
            <p>Enter description</p>
            <input className="inputstyle" value={this.state.description} onChange={this.handleChange} name="description"/>
            <button className="buttonnewtaskstyle" onClick={this.taskAdd}>ADD TASK</button>
            </div>
      )
    }
  }

export default AddTask