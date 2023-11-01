import chalk from 'chalk'
import validator from 'validator'

console.log(chalk.green.underline.inverse('Abdullah!'));

const res=validator.isEmail('abdullahsidd37@gmailcom');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));