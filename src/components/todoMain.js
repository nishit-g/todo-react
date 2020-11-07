import React, { Component } from "react";
import Todo from "./todo";
import { getTodos } from "../services/fakeTodoService";

class TodoMain extends Component {
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
          <Todo todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoMain;
