const http = require('./http');
const { readFileSync, writeFile } = require('fs');
const { URL } = require('./constants');

async function createTask(task) {
  const dataJson = await readFileSync('./todo.json', 'utf8');

  let todolist;
  if (dataJson !== '') {
    todolist = [...JSON.parse(dataJson)];
  } else {
    todolist = [];
  }

  todolist.push(task);
  const todo = JSON.stringify(todolist);

  writeFile('todo.json', todo, function (err) {
    if (err) throw err;
  });

  return todo;
}

async function getTodolist() {
  const response = await readFileSync('./todo.json', 'utf8');
  
  return response;
}

async function updateTask(taskId, task) {
  const dataJson = await readFileSync('./todo.json', 'utf8');
  const todolist = JSON.parse(dataJson);

  const updatedTodolist = todolist.map(todo => {
    if (todo.id === task.id) {
      todo.done = task.done;
    }

    return todo;
  });

  const todo = JSON.stringify(updatedTodolist);

  writeFile('todo.json', todo, function (err) {
    if (err) throw err;
  });

  return todo;
}

async function deleteTask(taskId) {
  const dataJson = await readFileSync('./todo.json', 'utf8');
  const todolist = JSON.parse(dataJson);

  const updatedTodolist = todolist.filter(todo => todo.id !== taskId);

  const todo = JSON.stringify(updatedTodolist);

  writeFile('todo.json', todo, function (err) {
    if (err) throw err;
  });

  return todo;
}

module.exports = {
  createTask,
  getTodolist,
  updateTask,
  deleteTask
};
