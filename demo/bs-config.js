const { resolve } = require('path')
const { HOST, PORT, LOG_LEVEL } = process.env

module.exports = {
    server: resolve('dist'),
    host: HOST || 'localhost',
    port: PORT ? Number(PORT) : 3000,
    logLevel: LOG_LEVEL || 'info',
    logConnections: true,
    logFileChanges: true,
    logSnippet: false,
    open: false
};
