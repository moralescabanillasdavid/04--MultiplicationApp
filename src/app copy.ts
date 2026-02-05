import fs from 'fs';
import { yargs } from './config/plugins/yargs.plugin.js';

const base = 5;
let outputMessage = '';
const header = `
=================================
       Tabla del ${base}
=================================
`;

outputMessage += header;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

console.log(outputMessage);

fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);
console.log('File created!');