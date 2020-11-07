import React, { Component } from "react";

class Todo extends Component {
  state = {
    isComplete: this.props.todo.completed,
  };

  handleCompleteToggle = () => {
    this.setState({ isComplete: !this.state.isComplete });
    this.props.onCompleteToggle(this.props.todo, this.state.isComplete);
  };

  render() {
    const { todo, onDelete } = this.props;
    return (
      <div>
        <span
          style={
            this.state.isComplete
              ? { fontSize: "24px", textDecorationLine: "line-through" }
              : { fontSize: "24px" }
          }
        >
          {todo.title}
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
