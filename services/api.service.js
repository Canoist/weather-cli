import axios from "axios";
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
    const { data } = await axios.get(
        "https://openweathermap.org/img/wn/" + icon + ".png"
    );
    return data;
};
