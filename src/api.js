const http = require('./http');
const { writeFile } = require('fs');
const { apiURL } = require('./constants');

async function uploadTodolist(todolist) {
  const response = await http.post(apiURL, todolist);
  
  return response.data;
}

async function downloadTodolist() {
  const response = await http.get(apiURL);
  const todo = JSON.stringify(response.data);

  writeFile('todo.json', todo, function (err) {
    if (err) throw err;
  });

  return response.data;
}

module.exports = {
  uploadTodolist,
  downloadTodolist
};
