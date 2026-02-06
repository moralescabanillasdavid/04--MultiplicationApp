import fs from 'fs';
import { yargs } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from './presentation/server-app.js';

const { b: base, l: limit, s: showTable } = yargs;

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

    const outputPath = `outputs`;
    const fileName = `tabla-${base}.txt`;

    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(`${outputPath}/${fileName}`, outputMessage);
    console.log('File created!');

    ServerApp.run({ base, limit, showTable });

    

}

