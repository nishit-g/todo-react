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

    if (!todoTitle || /^\s*$/.test(todoTitle)) {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a Todo"
            size="sm"
            value={this.state.todoTitle}
            onChange={this.handleChange}
          />

          <button className="btn btn-primary btn-sm">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
