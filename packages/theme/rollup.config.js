const buildRollupConfig = require('@selene/tools/rollup')
const pkg = require('./package.json')

const config = buildRollupConfig({
  name: 'theme',
  input: 'src/index.js',
  pkg,
})

export default config
