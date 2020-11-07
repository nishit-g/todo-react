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

  handleCompleteToggle = (todo, isComplete) => {
    const listOfTodos = [...this.state.listOfTodos];
    const at = listOfTodos.indexOf(todo);
    listOfTodos[at] = { ...this.state.listOfTodos[at] };
    listOfTodos[at].completed = !listOfTodos[at].completed;
  };

  handleAddition = (todoTitle) => {
    alert("Added TODO -> " + todoTitle);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todoTitle,
    };
    const listOfTodos = [newTodo, ...this.state.listOfTodos];
    this.setState({ listOfTodos });
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
          />
        ))}
      </div>
    );
  }
}

export default TodoMain;
