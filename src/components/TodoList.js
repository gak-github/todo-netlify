import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, getTodos } = useContext(GlobalContext)
  useEffect(() => {
    getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
        {todos.map( todo => (
          <Todo key={todo._id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
