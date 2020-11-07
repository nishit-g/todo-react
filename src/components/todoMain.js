import React, { Component } from "react";
import Todo from "./todo";
import { getTodos } from "../services/fakeTodoService";
import AddTodo from "./addTodo";

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

  handleCompleteToggle = (todo, modifiedTodo) => {
    const at = this.state.listOfTodos.indexOf(todo);
    this.state.listOfTodos[at] = modifiedTodo;
  };

  handleAddition = (todoTitle) => {
    const newTodo = {
      completed: false,
      id: Math.floor(Math.random() * 1000),
      title: todoTitle,
    };

    const listOfTodos = [newTodo, ...this.state.listOfTodos];
    this.setState({ listOfTodos });
  };

  handleModification = (toModifyTodo, modifiedTodo) => {
    const at = this.state.listOfTodos.indexOf(toModifyTodo);
    this.state.listOfTodos[at] = modifiedTodo;
  };

  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <AddTodo addNewTodo={this.handleAddition}></AddTodo>
        {this.state.listOfTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCompleteToggle={this.handleCompleteToggle}
            onDelete={this.handleDelete}
            onEdit={this.handleModification}
          />
        ))}
      </div>
    );
  }
}

export default TodoMain;
