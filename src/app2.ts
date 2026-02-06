import { yargs } from "./config/plugins/yargs.plugin.js"
import { ServerApp } from "./presentation/server-app.js"

(async() => {
    await main();
})();

async function main() {

    const {b:base, l:limit, s:showTable} = yargs;
    ServerApp.run({ base, limit, showTable });
}
