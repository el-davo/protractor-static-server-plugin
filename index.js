let StaticServer = require('static-server');

let server;

class ProtractorStaticServerPlugin {

    onPrepare() {
        console.log('Starting server');
        server = new StaticServer(this.config.server);

        return new Promise((resolve, reject) => {
            server.start(err => err ? reject(err): resolve());
        })
    }

    teardown() {
        server.stop();
    }
}

module.exports = new ProtractorStaticServerPlugin();