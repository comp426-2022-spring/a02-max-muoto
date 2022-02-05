import minimist from 'minimist'

const argv = (minimist)(process.argv.slice(2));

argv["call"];

const cll = argv.call;

if (cll === undefined) {
    console.log("Error: there was no input")
} else {
    
}