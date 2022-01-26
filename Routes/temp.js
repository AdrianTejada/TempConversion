const express = require('express');
const router = express.Router();
const { c_to_f, f_to_c, c_to_k, k_to_c} = require('../Operations/index.js')

// router.get('/todos', getTodos)

// router.post('/new/todo', createTodo)

// router.get('/todo/:id', getTodoById)

module.exports = router;