import React from "react";
import MyTodoList from './MyToDoList/MyToDoList';
import classnames from 'classnames/bind';
import { DEFAULT_THEME, Context } from './Context';
import styles from './App.module.scss';

const cx = classnames.bind(styles)


class App extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }

  handleThemeChange = event => {
    this.setState({theme: event.target.value}
      )
  }

  render () {
    return (
      <div className={cx('container')}>
        <button className={cx("changethemeButton")} onClick={this.handleThemeChange} value='light'>Light theme</button>
        <button className={cx("changethemeButton")} onClick={this.handleThemeChange} value='dark'>Dark theme</button>
        <Context.Provider value={this.state.theme}>
         <MyTodoList />
        </Context.Provider>
      </div>
    )
  }
}

export default App;