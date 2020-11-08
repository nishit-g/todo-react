import React, { Component } from "react";

class AddTodo extends Component {
  state = { todoTitle: "" };

  handleChange = (event) => {
    this.setState({ todoTitle: event.target.value });
  };

  handleSubmit = (event) => {
    // So that the browser doesn't reload
    event.preventDefault();

    const todoTitle = this.state.todoTitle;

    if (
      !todoTitle ||
      todoTitle === "" ||
      todoTitle === "" ||
      /^\s*$/.test(todoTitle)
    ) {
      // Clear the input field
      this.setState({ todoTitle: "" });
      return;
    }

    // send the todo to todoMain to add it to the task list
    // and set the state
    this.props.addNewTodo(todoTitle);

    // Clear the input field
    this.setState({ todoTitle: "" });
  };

  render() {
    return (
      <div className="row p-2 justify-content-md-center">
        <input
          className="col-md-auto m-2 "
          type="text"
          size="bg"
          placeholder="Add a Todo"
          value={this.state.todoTitle}
          onChange={this.handleChange}
        />

        <button
          onClick={this.handleSubmit}
          className="col-md-auto btn btn-primary btn m-2"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
