import React, { Component } from "react";
import Todo from "./todo";
// import { getTodos } from "../services/fakeTodoService";
import AddTodo from "./addTodo";

class TodoMain extends Component {
  state = {
    listOfTodos: [],
  };

  // Make a request to backend service and set the state
  async componentDidMount() {
    // Make sure you have json server running at port 8000
    const url = "http://localhost:8000/todos";

    const response = await fetch(url);
    const data = await response.json();

    this.setState({ listOfTodos: data });
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
      <div>
        {/* Application Title */}
        <h1
          className="p-4 d-flex justify-content-center "
          style={{ fontSize: "64px", fontStyle: "bold" }}
        >
          TODO Application
        </h1>

        {/* Add Todo Component */}
        <AddTodo addNewTodo={this.handleAddition}></AddTodo>

        {/* Note for user to Modify todo*/}
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Click on Todo to <strong>Modify it!</strong>
        </div>

        {/* Create TODO components based on the data recieved */}
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
