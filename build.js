const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const OUT_DIR = 'types-antv-g6/lib';
const CWD = path.resolve('..');

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
  if (fs.existsSync(dir_path)) {
      fs.readdirSync(dir_path).forEach(function(entry) {
          var entry_path = path.join(dir_path, entry);
          if (fs.lstatSync(entry_path).isDirectory()) {
              rimraf(entry_path);
          } else {
              fs.unlinkSync(entry_path);
          }
      });
      fs.rmdirSync(dir_path);
  }
}

console.log('Clearing lib folder...');
rimraf('./lib');

const cmd = `npx tsc --outDir ${OUT_DIR}`;

console.log('Compiling definition files...');
console.log(`>>> ${cmd}`);
exec(cmd, { cwd: CWD }, function callback() {
  console.log('Done building.')
});
