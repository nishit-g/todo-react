import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo, onDelete } = this.props;
    return (
      <div>
        <span style={{ fontSize: "24px" }}>{todo.title}</span>
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
