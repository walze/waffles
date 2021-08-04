#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Tree shaking support
// Put package.json in each component directory created during build step, hinting path to ES module
// If it's not supported consume regular CommonJS module
async function addPackageJsonFiles() {
  const distPath = path.resolve(__dirname, '../dist');
  const esmPath = path.join(distPath, 'esm');

  const directories = [];
  const esmModulesDirectories = fs.readdirSync(esmPath);

  for (const file of esmModulesDirectories) {
    const fileStat = fs.statSync(path.join(esmPath, file));

    if (fileStat.isDirectory()) {
      directories.push(file);
      const content = {
        sideEffects: false,
        module: path.join('../esm', file, 'index.js'),
      };

      fs.writeFileSync(
        path.join(distPath, file, 'package.json'),
        JSON.stringify(content, null, 2),
      );
    }
  }
}

addPackageJsonFiles();
