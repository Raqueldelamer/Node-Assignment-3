import { checkbox } from '@inquirer/prompts';
import { input } from '@inquirer/prompts';
import chalk from 'chalk';
import { say } from 'cowsay';

console.log(chalk.blue('Hello') + ' Chalk' + chalk.bold.red(' World!'));

const name = await input({ message: 'What is your name?'});
console.log(say({text: `Hello ${name}`, e: "o-"}));
console.log(`Hello again ${name}`);

const countries = await checkbox({
    message: 'What country would you like to visit?',
    choices: [
    { name: 'France', value: 'France' },
    { name: 'Morocco', value: 'Morocco' },
    { name: 'Spain', value: 'Spain' },
    { name: 'Holland', value: 'Holland' },
    { name: 'Greece', value: 'Greece' },
    { name: 'Japan', value: 'Japan' },
    { name: 'Thailand', value: 'Thailand' },
    { name: 'Indonesia', value: 'Indonesia' }
    ],
});

console.log(chalk.bold.yellow(`If you've always wanted to travel to ${countries}, you owe it to yourself to travel there.`))