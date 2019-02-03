const shortid = require('shortid');
const {
  createTask,
  getTodolist,
  updateTask,
  deleteTask
} = require('./todo');

const createCommand = {
  command: 'add',
  describe: 'Add new task',
  handler: async args => {
    const task = {
      id: shortid.generate(),
      tag: args.tag,
      title: args.title,
      done: false
    }
    const result = await createTask(task);
    console.log(result);
  }
};

const getCommand = {
  command: 'get',
  describe: 'Get todolist',
  handler: async args => {
    const task = {
      tag: args.tag,
      done: args.done
    }
    try {
      const todoJson = await getTodolist();
      const todo = JSON.parse(todoJson);
      if (args.tag) {
        const filteredTag = todo.filter(task => task.tag === args.tag);
        console.log(filteredTag);
      } else if (args.done) {
        const filteredTag = todo.filter(task => args.done === "true" ? task.done : !task.done);
        console.log(filteredTag);
      } else {
        console.log(todo);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

const updateCommand = {
  command: 'update',
  describe: 'Update task',
  handler: async args => {
    const task = {
      done: Boolean(args.done),
      id: args.id
    }
    try {
      const result = await updateTask(args.id, task);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const deleteCommand = {
  command: 'delete',
  describe: 'Delete task',
  handler: async args => {
    const task = {
      id: args.id
    }
    try {
      const result = await deleteTask(args.id);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = [createCommand, getCommand, updateCommand, deleteCommand];
