'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'classname-cx-css',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
