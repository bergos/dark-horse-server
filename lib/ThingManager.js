'use strict'

const context = require('dark-horse-thing/context')
const hydraObject = require('hydra-middleware/object')
const url = require('url')

class ThingManager {
  static addRoutes (things, app) {
    things.forEach((thing) => {
      let pathname = url.parse(thing.iri().toString()).pathname

      app.use(pathname, hydraObject(thing, context))
    })
  }
}

module.exports = ThingManager
