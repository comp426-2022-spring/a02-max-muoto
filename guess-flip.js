import minimist from 'minimist'
import {flipACoin} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));

argv["call"];

const cl = argv.call;

if (cl == "heads" || cl == "tails") {
    console.log(flipACoin(cl));
} else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}