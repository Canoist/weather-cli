#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError(error.message);
        return;
    }
    try {
        saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess("Токен сохранён");
    } catch (error) {
        printError(error.message);
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Set city
    }
    if (args.t) {
        return saveToken(args.t);
        // Set token
    }
    getWeather("moscow");
};

initCLI();
