
exports.config = {
    port: 9515,
    path: '/',
    specs: [
        'build/test.js'
    ],

    reporters: ['spec'],
    logLevel: 'warn',
    coloredLogs: true,

    waitforTimeout: 20000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 1,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 999999
    },

    services: [
        ['openfin', {
            logFileName: 'wdio-chromedriver.log',
            outputDir: '.',
            args: ['--verbose']
        }]
    ],
    openfin: {
        manifest: 'fins://openfin.github.io/openfin-workspaces-local-helper/app/sales-workspace-studio-next.json',
        debuggerPort: 9090
    }
}