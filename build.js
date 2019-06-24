const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const outDir = '../types-antv-g6/lib';
const workingDir = path.resolve('../typed-g6');
const command = `npx tsc --outDir ${outDir}`;

console.log('\nClearing lib folder...');
rimraf.sync('./lib');

console.log('\nCompiling definition files...');
console.log(`>>> working dir: ${workingDir}`);
console.log(`>>> ${command}`);

var buffer = new Buffer('');

try {
  buffer = execSync(command, { cwd: workingDir });
} catch (error) {
  console.log(error);
}

if (!fs.existsSync('./lib') || !fs.existsSync('./lib/index.d.ts')) {
  console.log(buffer.toString());
  throw Error('Compiling failed!!!');
}

console.log('\nDone compiling.\n');
