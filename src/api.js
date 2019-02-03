const http = require('./http');
const { apiURL } = require('./constants');

async function uploadTodolist(todolist) {
  const response = await http.post(apiURL, todolist);
  return response.data;
}

async function downloadTodolist() {
  const response = await http.get(apiURL);
  return response.data;
}

module.exports = {
  uploadTodolist,
  downloadTodolist
};
