import React, { Component } from "react";

class Todo extends Component {
  state = {
    isComplete: this.props.todo.completed,
    isInEditMode: false,
    title: this.props.todo.title,
    newTitle: this.props.todo.title,
  };

  handleCompleteToggle = () => {
    this.setState({
      isComplete: !this.state.isComplete,
      title: this.state.title,
      newTitle: this.state.newTitle,
    });

    const modifiedTodo = {
      completed: !this.state.isComplete,
      id: this.props.todo.id,
      title: this.state.newTitle,
    };

    this.props.onCompleteToggle(this.props.todo, modifiedTodo);
  };

  handleEdit = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  handleDone = () => {
    if (
      this.state.title === this.state.newTitle ||
      this.state.newTitle === "" ||
      this.state.newTitle === " "
    ) {
      return this.handleEdit();
    }

    this.setState({
      isComplete: this.state.isComplete,
      isInEditMode: !this.state.isInEditMode,
      title: this.state.newTitle,
      newTitle: this.state.newTitle,
    });

    const modifiedTodo = {
      completed: this.state.isComplete,
      id: this.props.todo.id,
      title: this.state.newTitle,
    };

    this.props.onEdit(this.props.todo, modifiedTodo);
  };

  handleChange = (event) => {
    this.setState({ newTitle: event.target.value });
  };

  handleCancel = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
      title: this.state.title,
      newTitle: this.state.title,
    });
  };

  render() {
    const { todo, onDelete } = this.props;
    return this.state.isInEditMode ? (
      <div className="row">
        <input
          className="col-8"
          style={{ fontSize: "20px" }}
          onChange={this.handleChange}
          value={this.state.newTitle}
        />{" "}
        <button
          className="col btn btn-success btn-sm m-2"
          onClick={this.handleDone}
        >
          Done
        </button>
        <button
          className="col btn btn-danger btn-sm m-2"
          onClick={this.handleCancel}
        >
          Cancel
        </button>
      </div>
    ) : (
      <div className="row">
        <span
          className="col-8"
          onClick={this.handleEdit}
          style={
            this.state.isComplete
              ? { fontSize: "20px", textDecorationLine: "line-through" }
              : { fontSize: "20px" }
          }
        >
          {this.state.title}
        </span>
        <button
          className="col btn btn-success btn-sm m-2"
          onClick={this.handleCompleteToggle}
        >
          {this.state.isComplete ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button
          className="col btn btn-danger btn-sm m-2"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
