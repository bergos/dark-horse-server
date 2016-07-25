'use strict'

const express = require('express')
const formats = require('rdf-formats-common')()
const hydraApiHeader = require('hydra-middleware/api-header')
const morgan = require('morgan')
const rdfServe = require('rdf-serve-static')
const ThingManager = require('./lib/ThingManager')

let config = null

try {
  config = require('./config')
} catch (err) {
  console.log(err.stack || err.message)

  config = require('./config.default')
}

let app = express()

app.set('trust proxy', config.listener.behindProxy)

app.use(morgan('combined'))

app.use(hydraApiHeader('/vocab'))
app.use(rdfServe('public', formats))

ThingManager.addRoutes(config.things, app)

app.use('/ui', express.static('.build'))

let server = app.listen(config.listener.port, config.listener.hostname, function () {
  console.log('dark horse server listening on: ' + server.address().port)
})
