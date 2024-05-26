import chalk from "chalk"

function making_sandwich(...items:string[]){
    console.log(chalk.blueBright("\nmake a sandwich"));
    items.forEach(names=>console.log(chalk.yellow(names)));
    console.log(chalk.blueBright("Now eat sandwich"));
}

making_sandwich("Bread","Butter",);

making_sandwich("Tomatoes","Cheese","Chicken");

making_sandwich("Egg","Mayo","Salt","onion")