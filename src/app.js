const yargs = require('yargs');

const todoCommands = require('./todo.commands');
const apiCommands = require('./api.commands');

todoCommands.forEach(command => yargs.command(command));
apiCommands.forEach(command => yargs.command(command));

// init parsing args...
yargs.argv;
