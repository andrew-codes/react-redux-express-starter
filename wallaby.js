module.exports = function(wallaby) {
    const packageConfig = require('./package.json');
    const specFilePattern = 'src/**/*.spec.js';
    const srcFilePattern = 'src/**/*.js';
    const babelProcessor = wallaby.compilers.babel(packageConfig.babel);

    return {
        testFramework: 'ava',
        env: {
            type: 'node',
            runner: 'node'
        },
        debug: true,
        files: [
            srcFilePattern,
            `!${specFilePattern}`
        ],
        tests: [
            specFilePattern
        ],
        compilers: {
            '**/*.js': babelProcessor
        }
    };
};