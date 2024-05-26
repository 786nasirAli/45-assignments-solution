import chalk from "chalk";
function describe_city(city, country = "Pakistan") {
    console.log(chalk.blueBright(`${chalk.greenBright(city)} is in ${chalk.greenBright(country)}`));
}
describe_city("Karachi");
describe_city("Multan");
describe_city("Chicago", "America");
