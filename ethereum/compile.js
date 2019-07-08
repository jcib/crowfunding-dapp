// El flujo que queremos:
// Borrar 'build'
// Leer Campaign.sol 
// Compilar ambos contratos
// Escribir output en 'build'

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // improved version

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // extra function to remove a folder

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; // retrieve two objects (Campaign and Factory)

fs.ensureDirSync(buildPath); // if not exists, the function create it for us

for (let contract in output) {
    fs.outputJsonSync( // write both contracts in Build directory
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}