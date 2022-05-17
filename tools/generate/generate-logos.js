#!/usr/bin/env node

const glob = require('glob');

const { getOptimizedSvg } = require('../helpers/svg-generation');
const {
  getPascalFormattedName,
  formatContentWithPrettier,
} = require('../helpers/formatting');
const { generateComponentFromSvg } = require('../helpers/component-from-svg');

const path = require('path');
const fs = require('fs');

function generateLogos() {
  const logosDirPath = path.resolve(__dirname, '../../src/logo');
  const logosExportDirPath = path.resolve(logosDirPath, 'output');
  const logosExportPath = path.join(logosDirPath, 'index.ts');

  // Array of SVG logos filenames
  const svgLogos = glob.sync('*.svg', { cwd: 'src/logo/raw/' });
  // Array of export statements
  const logosExports = [];

  svgLogos.forEach((svgFilename) => {
    const filename = svgFilename.split('.')[0];
    const componentName = getPascalFormattedName(`${filename}-logo`);

    logosExports.push(
      `export { default as ${componentName} } from './output/${filename}';`,
    );

    // Grab the whole content of SVG file
    const svgLogo = fs.readFileSync(
      path.join(logosDirPath, 'raw', svgFilename),
      { encoding: 'utf-8' },
    );

    // Generate, format and write to file new logo React components
    fs.writeFileSync(
      path.join(logosExportDirPath, `${filename}.tsx`),
      formatContentWithPrettier(
        generateComponentFromSvg(
          componentName,
          getOptimizedSvg(filename, svgLogo),
          'Logo',
        ),
      ),
    );
  });

  // Write export statements for all logo components to index.ts file
  fs.writeFileSync(logosExportPath, `${logosExports.join('\n')}\n`);
}

generateLogos();