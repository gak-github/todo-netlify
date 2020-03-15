import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  todos: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get todo details
  async function getTodos() {
    try {
      const res = await axios.get("/.netlify/functions/todo");
      dispatch({
        type: "GET_TODOS",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error.response.data.error
      })
    }
  }
  // delete action reducer
  async function deleteTodo(id) {
    try {
      await axios.delete(`/.netlify/functions/todo/${id}`);
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        error: error.response.data.error
      })
    }
  }

  // addTodo action reducer
  async function addTodo(todo) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/.netlify/functions/todo", todo, config);
      dispatch({
        type: "ADD_TODO",
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        error: error.response.data.error
      })
    }
  }

  // updateTo action reducer
  async function updateTodo(todo) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {

      console.log("=====todo._id", todo._id);
      const res = await axios.put(`/.netlify/functions/todo/${todo._id}`, todo, config);
      dispatch({
        type: "UPDATE_TODO",
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        error: error.response.data.error
      })
    }
  }


  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        deleteTodo,
        addTodo,
        getTodos,
        updateTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
