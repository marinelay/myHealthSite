import React, { Component } from 'react';

import CalendarTemplate from './components/calendar/CalendarTemplate';
import Month from './components/calendar/Month';
import Week from './components/calendar/Week';
import DayList from './components/calendar/DayList';

import ExerciseTemplate from './components/exercise/ExerciseTemplate';

import dateFns from 'date-fns';


class App extends Component {
  state = {
    curMonth: Date(),
    success: 0,
    fail: 0
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

  dayPress = () => {
    const { success } = this.state;

    this.setState({
      success: success+1
    })
  }

  render() {
    const {curMonth, success, fail} = this.state;

    const {
      nextMonth, prevMonth, dayPress} = this;

    return (
      <div className = 'test'>
        <div className ='calexe'>
        <CalendarTemplate month={(<Month nextPress={nextMonth} 
        prevPress ={prevMonth} curMonth={curMonth}/>)} 
        week={(<Week/>)} day={(<DayList curMonth={curMonth} dayPress={dayPress}/>)}>
        </CalendarTemplate>

        <ExerciseTemplate success = {success}></ExerciseTemplate>
        </div>
        <div>
        
        </div>
      </div>
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