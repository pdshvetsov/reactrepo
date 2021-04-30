import './App.css';
import React from "react";

class MyTodoList extends React.Component {
  state = {
      tasks: [
          {
          id: 1,
          name: 'First task',
          description: 'To do the 1st task',
          completed: true
          },
          {
            id: 12,
            name: 'Second task',
            description: 'To do the 2nd task',
            completed: false
          },
          {
            id: 123,
            name: 'Third task',
            description: 'To do the 3rd task',
            completed: true
          },
          {
            id: 1234,
            name: 'Fourth task',
            description: 'To do the 4th task',
            completed: false
          },
          {
            id: 12345,
            name: 'Fifth task',
            description: 'To do the 5th task',
            completed: false
          }
      ]
  }
    render() {
          return (
                  <div>
                    {this.state.tasks.map(task => <Task id = {task.id} name={task.name} description={task.description} completed={task.completed} />)}
                  </div>
                )
      }
      
    }

    const Task = ({id, name, description, completed}) => (
    [
    <div>{name}  {description} {completed ? "true" : "false"}</div>,
    <button className="buttonstyle" onClick={console.log(`Task ${id} completed status is ${completed}`)}>CLICK</button>
    ]
  )

  const App = () => {
    return <MyTodoList  />
  }
  
export default App;


