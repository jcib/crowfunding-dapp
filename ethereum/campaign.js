import web3 from './web3';
import Campaign from './build/Campaign.json';

// Creamos una función porque no queremos poner la dirección hardcoded

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    );
};