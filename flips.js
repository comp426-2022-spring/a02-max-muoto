import minimist from 'minimist'
import {coinFlips, countFlips} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));

argv["number"];
const amt = argv.number || 1;

let cFlips = (coinFlips(amt));

console.log(cFlips);
console.log(countFlips(cFlips));