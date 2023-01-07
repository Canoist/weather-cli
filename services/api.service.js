import axios from "axios";
import chalk from "chalk";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

export const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    if (!token) {
        throw new Error(
            "Не задан ключ API, задайте его с помощью -t [API_KEY]"
        );
    }
    if (!city) {
        throw new Error("Не задан город, задайте его с помощью -s [CITY]");
    }
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    return data;
};

export const getIcon = async (icon) => {
    switch (icon.slice(0, -1)) {
        case "01":
            return chalk.yellow("☀");

        case "02":
            return "⛅";

        case "03":
            return chalk.white("☁");

        case "04":
            return chalk.white(chalk.black("☁") + "☁");

        case "09":
            return chalk.white("🌧");

        case "10":
            return "☔";

        case "11":
            return chalk.white("⛈");

        case "13":
            return chalk.white("❄");

        case "50":
            return chalk.bgGray.white(" F O G ");
    }
};
