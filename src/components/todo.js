import React, { Component } from "react";
import { getTodos } from "../services/fakeTodoService";

class Todo extends Component {
  state = {
    listOfTodos: [],
  };

  componentDidMount() {
    this.setState({ listOfTodos: getTodos() });
  }

  render() {
    return (
      <div>
        {this.state.listOfTodos.map((todo) => (
          <ul>{todo.title}</ul>
        ))}
      </div>
    );
  }
}

export default Todo;
