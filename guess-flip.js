import minimist from 'minimist'
import {flipACoin} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));

argv["call"];

const cl = argv.call;

if (cl === undefined || cl != "tails" || cl != "heads") {
    console.log("Error: there was no input.\nUsage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(cl));
}