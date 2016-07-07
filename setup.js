'use strict'

const context = require('dark-horse-thing/context')
const Apartment = require('dark-horse-thing/building/Apartment')
const ElroPowerSocket = require('dark-horse-thing-mediola/ElroPowerSocket')
const HomeMaticHeaterController = require('dark-horse-thing-mediola/HomeMaticHeaterController')
const HomeMaticTemperatureSensor = require('dark-horse-thing-mediola/HomeMaticTemperatureSensor')
const Room = require('dark-horse-thing/building/Room')

function init (baseIRI) {
  let things = []

  let apartment = new Apartment(baseIRI + '/')
  apartment.label = 'apartment'
  things.push(apartment)

  let office = new Room(apartment.iri().toString() + 'office/')
  office.label = 'office'
  apartment.room.push(office)
  things.push(office)

  let officeHeaterController = new HomeMaticHeaterController(office.iri().toString() + 'heater-controller', null, 'http://192.168.1.24/home-matic/36EF7301')
  officeHeaterController.label = 'heater controller'
  office.device.push(officeHeaterController)
  things.push(officeHeaterController)

  let officeLamp = new ElroPowerSocket(office.iri().toString() + 'lamp', context.Light, 'http://192.168.1.24/elro-power-socket/27')
  officeLamp.label = 'desk lamp'
  office.device.push(officeLamp)
  things.push(officeLamp)

  let basement = new Room(apartment.iri().toString() + 'basement/')
  basement.label = 'basement'
  apartment.room.push(basement)
  things.push(basement)

  let basementTemperatureSensor = new HomeMaticTemperatureSensor(basement.iri().toString() + 'temperature-sensor', null, 'http://192.168.1.24/home-matic/30E0A401')
  basementTemperatureSensor.label = 'thermometer'
  basement.device.push(basementTemperatureSensor)
  things.push(basementTemperatureSensor)

  return things
}

module.exports = init
