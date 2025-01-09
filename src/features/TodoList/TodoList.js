import React from 'react'
import { Link } from 'react-router';

const TodoList = () => {
  return (
    <h1>
      TodoList In-Progress
      <Link to="/about-us">About Us</Link>
      <Link to="/history">History</Link>
    </h1>
  )
}

export default TodoList;
