#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Set city
    }
    if (args.t) {
        // Set token
    }
};

initCLI();
