import minimist from 'minimist'
import {flipACoin} from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));

argv["call"];

const cll = argv.call;

if (cll === undefined) {
    console.log("Error: there was no input")
} else {
    console.log(flipACoin(cll));
}