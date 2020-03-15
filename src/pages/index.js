import React from "react";
import "../styles/App.css";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { GlobalProvider } from "../context/GlobalState";

function IndexPage() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default IndexPage;
