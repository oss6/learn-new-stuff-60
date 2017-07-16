import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    var todoItems = this.state.todos.map(todo =>
      <li>{todo.title}</li>
    );

    if (todoItems.length) {
      return (
        <ul>{todoItems}</ul>
      )
    } else {
      return (
        <p>No todos</p>
      )
    }
  }
}

export default TodoList;
