import minimist from 'minimist'
import {coinFlips} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));

argv["number"];
const amt = argv.number || 1;

console.log(coinFlips(amt));
