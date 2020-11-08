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
    const tempList = [...this.state.listOfTodos];
    const at = tempList.indexOf(todo);
    tempList[at] = modifiedTodo;

    this.setState({ listOfTodos: tempList });
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
    const tempList = [...this.state.listOfTodos];
    const at = tempList.indexOf(toModifyTodo);
    tempList[at] = modifiedTodo;

    this.setState({ listOfTodos: tempList });
  };

  render() {
    return (
      <div style={{}}>
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
