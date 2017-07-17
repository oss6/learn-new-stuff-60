import React from 'react';
import shortid from 'shortid';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      formTitle: ''
    };
    localStorage.setItem('todos', JSON.stringify(this.state.todos));

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({formTitle: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState(function (prevState, props) {
        var formTitle = this.state.formTitle;
        localStorage.setItem('todos', JSON.stringify(
          this.state.todos.concat([{
            id: shortid.generate(),
            title: formTitle,
            done: false
          }])
        ));

        return {
          todos: JSON.parse(localStorage.getItem('todos')),
          formTitle: ''
        }
      });
    }
  }

  renderForm() {
    return (
      <input
        type="text"
        placeholder="Todo..."
        value={this.state.formTitle}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress} />
    );
  }

  render() {
    var todoItems = this.state.todos.map(todo =>
      <li key={todo.id}>
        {todo.title} <span className="delete-todo">Delete</span>
      </li>
    );
    var view;

    if (todoItems.length) {
      view = (
        <ul className="todo-items">{todoItems}</ul>
      );
    } else {
      view = (
        <p>No todos</p>
      );
    }

    return (
      <div id="todos-container">
        {this.renderForm()}
        {view}
      </div>
    );
  }
}

export default TodoList;
