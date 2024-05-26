import chalk from "chalk";
function magician_show(magicians) {
    magicians.forEach((names) => console.log(chalk.yellow(names)));
}
function magician_add(magicians) {
    return magicians.map((names) => chalk.blueBright(`The great ${chalk.yellow(names)}`));
}
let magician_names = ["Ali", "Hummad", "Ubait"];
let copt_array = magician_names.slice();
let copy_array_add = magician_add(copt_array);
console.log(chalk.magentaBright.bold("\noriginal array\n"));
magician_show(magician_names);
console.log(chalk.magentaBright.bold("\ncopy array\n"));
magician_show(copy_array_add);
