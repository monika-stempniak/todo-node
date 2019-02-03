const http = require('./http');
const { readFileSync, writeFile } = require('fs');
const { URL } = require('./constants');

async function createTask(task) {
  const data = await readFileSync('./todo.json', 'utf8');

  let todolist;
  if (data !== '') {
    todolist = [...JSON.parse(data)];
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
  const data = JSON.parse(dataJson);

  const updatedData = data.map(todo => {
    if (todo.id === task.id) {
      todo.done = task.done;
    }
    return todo;
  });

  const todo = JSON.stringify(updatedData);

  writeFile('todo.json', todo, function (err) {
    if (err) throw err;
  });

  return todo;
}

async function deleteTask(taskId) {
  const dataJson = await getFileData();
  const data = JSON.parse(dataJson);

  const updatedData = data.filter(todo => todo.id !== taskId);

  const todo = JSON.stringify(updatedData);

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
