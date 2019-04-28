const { exec } = require('child_process');
const path = require('path');

const OUT_DIR = 'types-antv-g6/lib';
const CWD = path.resolve('..');

exec(`npx tsc --outDir ${OUT_DIR}`, { cwd: CWD });
