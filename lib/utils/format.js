const chalk = require('chalk');
const formatDictReslut = data => {
  let resultMessge = '';
  data.map((item, index) => {
    const result = item.explain.split('; ');
    let explainString = '';
    result.map((item, indey) => {
      explainString += chalk.yellow(item) + (indey + 1 < result.length ? chalk.green(' | ') : '');
    });
    resultMessge += `${chalk.blue(item.entry)}: ${explainString}` + (index + 1 < data.length ? '\n' : '');
  });
  return resultMessge;
};

const formatSentenceResult = data => {
  let resultMessage = '';
  let index = 1;

  data.forEach(item => {
    resultMessage += chalk.blue(item.src) + ': ' + chalk.yellow(item.dst) + (index < data.length ? '\n' : '');
    index++;
  });
  return resultMessage;
};
module.exports = {
  formatDictReslut,
  formatSentenceResult
};
