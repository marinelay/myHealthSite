import React, { Component } from 'react';
import './App.css';

import CalendarTemplate from './components/calendar/CalendarTemplate';
import Month from './components/calendar/Month';
import Week from './components/calendar/Week';
import DayList from './components/calendar/DayList';

import ExerciseTemplate from './components/exercise/ExerciseTemplate';

import dateFns, { isSameDay } from 'date-fns';


class App extends Component {
  state = {
    curMonth: Date(),
    dayInfo: [

    ]
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

  dayPress = (day) => {
    const { dayInfo } = this.state;

    
    const index = dayInfo.findIndex(info => isSameDay(info.day, day));

    if(index === -1) { // first time
      this.setState({
        dayInfo: dayInfo.concat({
          day: day,
          flag: 1
        })
      })
    }

    else { // second time
      const selected = dayInfo[index];

      const nextInfo = [...dayInfo];

      nextInfo[index] = {
        ...selected,
        flag: (selected.flag + 1) % 3
      }

      this.setState({
        dayInfo: nextInfo
      })
    }
  }

  render() {
    const {curMonth, dayInfo} = this.state;

    const {
      nextMonth, prevMonth, dayPress} = this;

    return (
      <div className = 'test'>
        <CalendarTemplate month={(<Month nextPress={nextMonth} 
        prevPress ={prevMonth} curMonth={curMonth}/>)} 
        week={(<Week/>)} day={(<DayList curMonth={curMonth} dayInfo={dayInfo} dayPress={dayPress}/>)}>
        </CalendarTemplate>

        <ExerciseTemplate dayInfo = {dayInfo}></ExerciseTemplate>
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