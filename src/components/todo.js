import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        {todo.title}
        <Button variant="success">Mark as Complete</Button>
      </div>
    );
  }
}

export default Todo;
