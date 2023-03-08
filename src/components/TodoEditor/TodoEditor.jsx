import React, { Component } from 'react';
import './TodoEditor.css';
import Button from '../Button/Button';
class TodoEditor extends Component {
  state = {
    text: ' ',
  };

  handelTextAreaChange = event => {
    this.setState({
      text: event.currentTarget.value,
    });
    this.setState({ text: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.text);
    this.props.toggleModal();
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handelSubmit}>
        <textarea
          value={this.state.text}
          className="TodoEditor__textarea"
          onChange={this.handelTextAreaChange}
        ></textarea>
        <Button
          type="submit"
          onClick={this.handelSubmit}
          className="TodoEditor__button"
        >
          add
        </Button>
      </form>
    );
  }
}

export default TodoEditor;
