const { program } = require('commander');
const { translationAcion } = require('./action');
const registerCommands = () => {
  program.argument('<message>', '需要翻译的信息').action(translationAcion);
};

module.exports = {
  registerCommands
};
