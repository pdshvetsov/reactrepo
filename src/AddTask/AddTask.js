import React from 'react';
import './AddTaskStyle.module.scss';
import classnames from 'classnames/bind';
import styles from './AddTaskStyle.module.scss';
import { Context } from '../Context';

const cx = classnames.bind(styles)

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
          <Context.Consumer>
            {theme => (
              <div>
            <p>Enter name</p>
            <input className={cx('inputstyle')} value={this.state.name} onChange={this.handleChange} name="name"/>
            <p>Enter description</p>
            <input className={cx('inputstyle')} value={this.state.description} onChange={this.handleChange} name="description"/>
            <button className={cx('buttonnewtaskstyle', `buttonnewtaskstyle-theme-${theme}`)} onClick={this.taskAdd}>ADD TASK</button>
            </div>
            )}
            </Context.Consumer>
            </div>
      )
    }
  }

export default AddTask