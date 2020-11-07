import React, { Component } from "react";

class Todo extends Component {
  state = {
    isInEditMode: false,
    title: this.props.todo.title,
    newTitle: this.props.todo.title,
  };

  handleEdit = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  handleDone = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
      title: this.state.newTitle,
      newTitle: this.state.newTitle,
    });
    this.props.onEdit(this.props.todo, this.state.newTitle);
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
        <span style={{ fontSize: "24px" }} onClick={this.handleEdit}>
          {this.state.title}
        </span>
        <button className="btn btn-success btn-sm">Mark as Complete</button>
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
