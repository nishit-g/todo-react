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

  handleDelete = (toDeleteTodo) => {
    const listOfTodos = this.state.listOfTodos.filter(
      (todo) => todo.id !== toDeleteTodo.id
    );

    this.setState({ listOfTodos });
  };

  render() {
    return (
      <div>
        {this.state.listOfTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default TodoMain;
