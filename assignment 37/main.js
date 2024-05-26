import chalk from "chalk";
function shirt(size = "Large", print = "I love typescript") {
    console.log(chalk.blueBright(`creating a ${chalk.greenBright(size)} shirt with ${chalk.greenBright(print)} print on shirt`));
}
shirt();
shirt("Medium");
shirt("Small", "I love javascript");
