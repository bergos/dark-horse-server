'use strict'

const url = require('url')

let baseIRI = 'http://localhost:8080'

let config = {
  listener: {
    port: url.parse(baseIRI).port,
    hostname: url.parse(baseIRI).hostname,
    behindProxy: false
  },
  things: require('./setup-virtual')(baseIRI)
}

module.exports = config
