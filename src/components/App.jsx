import React, { Component } from 'react';
import Modal from './Modal/Modal';
import TodoList from './TodoList/TodoList';
import { Global } from '@emotion/react';
import { emotionReset } from './Global/Global.styled';
import uniqid from 'uniqid';
import Button from './Button/Button';
class App extends Component {
  state = {
    todo: [],

    modalActive: false,

    firterValue: '',
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todo');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todo: parsedTodos });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  // console.log('App componentDidUpdate');
  // const nextTodos = this.state.todo;
  // const prevTodos = prevState.todo;
  // if (nextTodos !== prevTodos) {
  //   console.log('Обновилось поле todos, записываю todos в хранилище');
  //   localStorage.setItem('todos', JSON.stringify(nextTodos));
  // }
  // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //   this.toggleAPPModal();
  // метод закриття модалки після оновлення стейту порівняти довжину попередньго масиву і нинішнього
  // }
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.todo !== this.state.todo);
    // prevState.todo !== this.state.todo
    //   ? localStorage.setItem('todo', JSON.stringify(this.state.todo))
    //   : localStorage.setItem('todo', JSON.stringify(prevState.todo));

    const nextTodos = this.state.todo;
    const prevTodos = prevState.todo;
    if (nextTodos !== prevTodos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todo', JSON.stringify(nextTodos));
    }
  }
  toggleAPPModal = () => {
    this.setState(prevState => ({
      modalActive: !prevState.modalActive,
    }));
  };
  addTodo = text => {
    const newTodo = {
      id: uniqid(),
      name: text,
      completed: false,
    };

    this.setState(prevState => ({
      todo: [newTodo, ...prevState.todo],
    }));
  };

  deleteToDo = toDoId => {
    this.setState(prevState => ({
      todo: prevState.todo.filter(toDoItem => toDoItem.id !== toDoId),
    }));
  };
  handelFilterChange = event => {
    this.setState({
      firterValue: event.currentTarget.value,
    });
  };
  toggleComplete = todoID => {
    this.setState(({ todo }) => ({
      todo: todo.map(todoItem =>
        todoItem.id === todoID
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      ),
    }));
  };
  render() {
    const normalizeFilterValue = this.state.firterValue.toLowerCase();
    const filteredTodo = this.state.todo.filter(item =>
      item.name.toLowerCase().includes(normalizeFilterValue)
    );
    return (
      <div
        style={{
          width: '80vw',
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <Global styles={emotionReset} />
        <Button type="button" onClick={this.toggleAPPModal}>
          Open Test Modal
        </Button>
        {this.state.modalActive && (
          <Modal toggleModal={this.toggleAPPModal}>
            <h1
              style={{
                fontSize: 48,
              }}
            >
              {' '}
              Hello
            </h1>
          </Modal>
        )}
        <TodoList
          value={this.state.firterValue}
          handelFilterChange={this.handelFilterChange}
          deleteToDo={this.deleteToDo}
          addTodo={this.addTodo}
          todoData={filteredTodo}
          toggleModal={this.toggleModal}
          toggleComplete={this.toggleComplete}
          completed={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
