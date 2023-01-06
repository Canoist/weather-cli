import chalk from "chalk";
import dedent from "dedent-js";

const printError = (message) => {
    console.log(chalk.bgRed(" Error ") + " " + message);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(" Success ") + " " + message);
};

const printHelp = () => {
    console.log(dedent`${chalk.bgMagentaBright.bold(" Help ")}
    Без параметров - вывод погоды
    -s [City] - Для установки города
    -h - Для вывода помощи
    -t [API Key]- Для установки токена
    `);
};

export { printError, printHelp, printSuccess };
