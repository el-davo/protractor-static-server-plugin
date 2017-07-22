exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    plugins: [{
        path: './index.js',
        server: {
            rootPath: '.',
            host: '127.0.0.1',
            port: 9000
        }
    }],
    directConnect: true,
    baseUrl: 'http://localhost:9000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare() {
        let StaticServer = require('static-server');
        new StaticServer({rootPath: './', port: 4200}).start();
    }
};
