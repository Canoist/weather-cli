#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError(error.message);
        return;
    }
    try {
        saveKeyValue("token", token);
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
};

initCLI();
