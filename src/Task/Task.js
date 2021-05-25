import React from 'react';
import styles from './TaskStyle.module.scss';
import classnames from 'classnames/bind';
import { Context } from '../Context';

const cx = classnames.bind(styles)

const Task = (props) => {
    return (
      <div>
        <Context.Consumer>
          {theme => ( 
        <div>
        <div>
          {props.id}, {props.name}, {props.description}, {props.completed ? "true":"false"}
        </div>
        <button className={cx('buttonstyle', `buttonstyle-theme-${theme}`)} onClick={props.onClick}>Change status</button>
        </div>)}
        </Context.Consumer>
      </div>
    )
    }

export default Task