'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'react-emotion-imports',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
