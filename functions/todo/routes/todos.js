const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
} = require("../controllers/todos");

router
  .route("/")
  .get(getTodos)
  .post(addTodo)

router.route("/:id")
.delete(deleteTodo)
.put(updateTodo)

module.exports = router;
