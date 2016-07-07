'use strict'

const express = require('express')
const formats = require('rdf-formats-common')()
const hydraApiHeader = require('hydra-middleware/api-header')
const morgan = require('morgan')
const rdfServe = require('rdf-serve-static')
const url = require('url')
const ThingManager = require('./lib/ThingManager')

let baseIRI = 'http://localhost:8080'

let app = express()

app.use(morgan('combined'))

app.use(hydraApiHeader('/vocab'))
app.use(rdfServe('public', formats))

ThingManager.addRoutes(require('./setup-virtual')(baseIRI), app)
//ThingManager.addRoutes(require('./setup')(baseIRI), app)

app.use('/ui', express.static('.build'))

let server = app.listen(url.parse(baseIRI).port, function () {
  console.log('dark horse server listening on: ' + server.address().port)
})
