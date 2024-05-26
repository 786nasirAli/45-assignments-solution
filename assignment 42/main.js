import chalk from "chalk";
function show_magician(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => chalk.blueBright(`The great magician ${chalk.yellow(name)}`));
}
let names = ["Ali", "Hummad", "Ubait"];
let great_magician = make_great(names);
show_magician(great_magician);
