import chalk from "chalk";

function shirt(size: string = "Large", print: string = "I love typescript") {
    console.log(chalk.blueBright(`creating a ${chalk.greenBright(size)} shirt with ${chalk.greenBright(print)} print on shirt`))
}

shirt();
shirt("Medium");
shirt("Small", "I love javascript");
