const express = require("express");
const router = express.Router();
const { Todo } = require("../models/index");

// 기본주소: localhost:PORT/

// GET: localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    res.send(err);
  }
});

// POST: localhost:PORT/todo - create todo (CREATE)
router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

// PATCH: localhost:PORT/todo/:todoId - update todo (UPDATE)
router.patch("/todo/:todoId", async (req, res) => {
  try {
    let patchTodo = await Todo.update(
      { title: req.body.title, done: req.body.done },
      { where: { id: req.params.todoId } }
    );
    res.send(patchTodo);
  } catch (err) {
    res.send(err);
  }
});

// DELETE: localhost:PORT/todo/:todoId - delete todo (DELETE)
router.delete("/todo/:todoId", async (req, res) => {
  try {
    let deleteTodo = await Todo.destroy({ where: { id: req.params.todoId } });
    res.send({ deleteTodo });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
