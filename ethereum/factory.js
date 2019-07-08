// Queremos que el contrato sea exportable

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd0b200313C805EFfBc01352B9FB915A40dc62adC'
);

export default instance;