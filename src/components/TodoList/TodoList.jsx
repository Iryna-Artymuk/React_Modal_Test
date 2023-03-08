import React from 'react';

import './TodoList.css';
import TodoEditor from '../TodoEditor/TodoEditor';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import { Component } from 'react';
import Todo from './Todo/Todo';
// import IconButton from '../IconButton/IconButton';
import Button from '../Button/Button';
class TodoList extends Component {
  state = {
    modalActive: false,
  };
  toggleTodoModal = () => {
    this.setState(prevState => ({
      modalActive: !prevState.modalActive,
    }));
  };
  render() {
    const {
      todoData,
      deleteToDo,

      toggleComplete,
      addTodo,
      value,
      handelFilterChange,
    } = this.props;

    return (
      <div className="todoList ">
        {this.state.modalActive && (
          <Modal toggleModal={this.toggleTodoModal}>
            <TodoEditor addTodo={addTodo} toggleModal={this.toggleTodoModal} />
          </Modal>
        )}
        <Button type="button" onClick={this.toggleTodoModal}>
          Add todo
        </Button>
        {/* <IconButton onClick={this.toggleTodoModal}> Add todo</IconButton> */}
        <h3> To do list </h3>
        <Filter value={value} handelFilterChange={handelFilterChange} />
        {/* <TodoEditor addTodo={addTodo} /> */}
        <ul>
          {todoData.map(item => {
            return (
              <li key={item.id} className="item">
                <Todo
                  completed={item.completed}
                  toggleComplete={() => toggleComplete(item.id)}
                  name={item.name}
                  deleteToDo={() => deleteToDo(item.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
