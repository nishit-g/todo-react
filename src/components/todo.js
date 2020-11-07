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
    this.props.onCompleteToggle(this.props.todo, this.state.isComplete);
  };

  handleEdit = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  handleDone = () => {
    this.setState({
      isComplete: this.state.isComplete,
      isInEditMode: !this.state.isInEditMode,
      title: this.state.newTitle,
      newTitle: this.state.newTitle,
    });
    const modifiedTodo = {
      id: this.props.todo.id,
      title: this.state.newTitle,
      completed: this.state.isComplete,
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
      <div>
        <input
          size="sm"
          onChange={this.handleChange}
          value={this.state.newTitle}
        />{" "}
        <button className="btn btn-success btn-sm" onClick={this.handleDone}>
          Done
        </button>
        <button className="btn btn-danger btn-sm" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    ) : (
      <div>
        <span
          onClick={this.handleEdit}
          style={
            this.state.isComplete
              ? { fontSize: "24px", textDecorationLine: "line-through" }
              : { fontSize: "24px" }
          }
        >
          {this.state.title}
        </span>
        <button
          className="btn btn-success btn-sm"
          onClick={this.handleCompleteToggle}
        >
          {this.state.isComplete ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
