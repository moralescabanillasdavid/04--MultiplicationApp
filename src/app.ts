import { yargs } from "./config/plugins/yargs.plugin.js";

const { b: base, l: limit, s: showTable } = yargs;

(async () => {
    await main();
})();

async function main() {
    console.log({ base, limit, showTable });
}

