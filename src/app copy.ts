import fs from 'fs';

const base = 9;
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