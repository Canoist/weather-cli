import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (message) => {
    console.log(chalk.bgRed(" Error ") + " " + message);
};

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(" Success ") + " " + message);
};

export const printHelp = () => {
    console.log(dedent`${chalk.bgMagentaBright.bold(" Help ")}
    Без параметров - вывод погоды
    -s [City] - Для установки города
    -h - Для вывода помощи
    -t [API Key]- Для установки токена
    `);
};

export const printWeather = (data, icon) => {
    console.log(dedent`${chalk.bgYellow.bold.black(
        " Weather "
    )} Погода в городе ${data.name}
    ${icon} ${data.weather[0].description}
    Температура: ${data.main.temp}°C (Ощущается как ${data.main.feels_like}°C)
    Влажность: ${data.main.humidity}%
    Ветер: ${data.wind.speed}м/с
    `);
};
