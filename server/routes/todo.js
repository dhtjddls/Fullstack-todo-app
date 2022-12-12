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
  // console.log(req.body); // { title: 'my todo - 수정', done: true }
  // console.log(req.params); // { todoId: '1' }
  try {
    let [isUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );
    // console.log(isUpdated);
    // 수정 성공시; [ 1 ] -> 1
    // 수정 실패시; [ 0 ] -> 0

    // 수정 실패 (!0)
    if (!isUpdated) {
      return res.send(false);
    }

    // 수정 성공
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

// DELETE localhost:PORT/todo/:todoId - remove a specific todo (DELETE)
router.delete("/todo/:todoId", async (req, res) => {
  // console.log(req.params); // { todoId: '8' }

  try {
    let isDeleted = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });
    // console.log(isDeleted); // 1 or 0

    // 삭제 실패 (!0)
    if (!isDeleted) {
      return res.send(false);
    }

    // 삭제 성공
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
