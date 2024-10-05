import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import { pizzaOrders } from './orders/pizzaOrders.js';
import { drinkOrders } from './orders/drinkOrders.js';

console.log(`Start Order`);

const name = await input({message: 'Enter your name'});
console.log(`Hello ${name} `)

console.log(`Choose topping:`);
const pizza = await select(pizzaOrders);
console.log(`${pizza} topping chosen.`);
console.log(chalk.bold.green(`Your ${pizza} pizza order will be ready in 30 minutes.`));

console.log(`Now choose beverage:`)
const drink = await select(drinkOrders);
console.log(`${drink} beverage chosen.`);
console.log(chalk.bold.red(`Your ${drink} beverage is free with your single topping pizza order.`));



