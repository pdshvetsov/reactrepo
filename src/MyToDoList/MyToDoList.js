import React from 'react';
import Task from './../Task/Task';
import AddTask from './../AddTask/AddTask';

class MyToDoList extends React.Component {
    state = {
        tasks: [
            {
            id: 1,
            name: 'First task',
            description: 'To do the 1st task',
            completed: true
            },
            {
              id: 2,
              name: 'Second task',
              description: 'To do the 2nd task',
              completed: false
            },
            {
              id: 3,
              name: 'Third task',
              description: 'To do the 3rd task',
              completed: true
            },
            {
              id: 4,
              name: 'Fourth task',
              description: 'To do the 4th task',
              completed: false
            },
            {
              id: 5,
              name: 'Fifth task',
              description: 'To do the 5th task',
              completed: false
            }
        ]
    }
  
    addTask = (name, description) => {
      this.setState(currentState => {
        const newTask = {
          id: currentState.tasks.length + 1,
          name: name,
          description: description,
          completed: false
        }
        const newObj = [...currentState.tasks, newTask]
        return {
          tasks: newObj
        }
      })
  }
  
      
  
      handleClick = (id, completed) => {
        this.setState(currentState => {
          let index = [...currentState.tasks].findIndex(ind => ind.id === id)
          currentState.tasks[index] = {...currentState.tasks[index], completed: !completed}
          return {
            tasks: currentState.tasks
          }
        })
      }
  
      render() {
            return (
                <div>
                <div>
                {this.state.tasks.map(task => <Task id = {task.id} name={task.name} description={task.description} completed={task.completed}
                onClick={() => this.handleClick(task.id, task.completed)}/>)}
                </div>
                <AddTask addTask={this.addTask}/>
                </div>
                  )
        }
        
      }

export default MyToDoList;