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

  handleCompleteToggle = (todo, isComplete) => {
    const listOfTodos = [...this.state.listOfTodos];
    const at = listOfTodos.indexOf(todo);
    listOfTodos[at] = { ...this.state.listOfTodos[at] };
    listOfTodos[at].completed = !listOfTodos[at].completed;
    this.setState({ listOfTodos });
  };

  render() {
    return (
      <div>
        {this.state.listOfTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCompleteToggle={this.handleCompleteToggle}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default TodoMain;
