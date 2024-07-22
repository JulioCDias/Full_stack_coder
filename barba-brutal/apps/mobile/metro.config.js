const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname
const monoRepoRoot = path.resolve(projectRoot, '../..');
const config = getDefaultConfig(projectRoot);

config.watchFolders = [monoRepoRoot];
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monoRepoRoot, 'node_modules'),
]

config.resolver.disableHierarchicalLookup = true;
module.exports = config