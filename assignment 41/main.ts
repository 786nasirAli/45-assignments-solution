import chalk from "chalk"

function show_magician(magicians:string[]){
    magicians.forEach(name=>console.log(chalk.blueBright(name)));
}
    let names=["Ali","Hummad","Ubait"]

    show_magician(names)