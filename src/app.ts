import fs from 'fs';
import { yargs } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from './presentation/server-app.js';

const { b: base, l: limit, s: showTable, n: name, d: destination } = yargs;

(async () => {
    await main();
})();

async function main() {

    let outputMessage = '';
    const header = `
=================================
       Tabla del ${base}
=================================
`;

    outputMessage += header;

    for (let i = 1; i <= limit; i++) {
        outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    if (showTable) {
        console.log(outputMessage);
    }

    fs.mkdirSync(destination, { recursive: true });
    fs.writeFileSync(`${destination}/${name}`, outputMessage);
    console.log(`File created at ${destination}/${name}`);

    ServerApp.run({ base, limit, showTable });

}

