const { getTodolist } = require('./todo');
const { uploadTodolist, downloadTodolist } = require('./api');

const uploadCommand = {
  command: 'upload',
  describe: 'Upload todolist',
  handler: async args => {
    try {
      const todo = await getTodolist();
      const result = await uploadTodolist(todo);
      console.log('task', result);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const downloadCommand = {
  command: 'download',
  describe: 'Download todolist',
  handler: async args => {
    try {
      const result = await downloadTodolist();
      console.log('task', result);
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = [uploadCommand, downloadCommand];
