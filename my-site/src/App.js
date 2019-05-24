import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

import CalendarTemplate from './components/CalendarTemplate';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';
import DayList from './components/DayList';
import dateFns from 'date-fns';


class App extends Component {
  state = {
    curMonth: Date()
  }

  nextMonth = () => {
    this.setState({
      curMonth: dateFns.addMonths(this.state.curMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      curMonth: dateFns.subMonths(this.state.curMonth, 1)
    });
  };

  render() {
    const {curMonth} = this.state;

    const {
      nextMonth, prevMonth} = this;

    return (
      <CalendarTemplate month={(<Month nextPress={nextMonth} 
        prevPress ={prevMonth}/>)} 
        week={(<Week/>)} day={(<DayList curMonth={curMonth}/>)}></CalendarTemplate>
    );
  };
 
/*
  id = 3

  state = {
    input: '',
    todos: [
      { id:0, text: ' 리액트 소개', checked: false},
      { id:1, text: ' 리액트 소개', checked: true},
      { id:2, text: ' 리액트 소개', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos} = this.state;
    this.setState({
      input: '',

      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번재 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열 복사

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
        <TodoListTemplate form={(
          <Form
            value = {input}
            onKeyPress = {handleKeyPress}
            onChange={handleChange}
            onCreate = {handleCreate}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
    );
  }
  */
}

export default App;