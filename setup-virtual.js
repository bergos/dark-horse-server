'use strict'

const context = require('dark-horse-thing/context')
const Apartment = require('dark-horse-thing/building/Apartment')
const PowerSocket = require('dark-horse-thing/device/PowerSocket')
const HeaterController = require('dark-horse-thing/device/HeaterController')
const Thermometer = require('dark-horse-thing/device/Thermometer')
const MetaWeatherThermometer = require('dark-horse-thing-metaweather/Thermometer')
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

  let officeHeaterController = new HeaterController(office.iri().toString() + 'heater-controller')
  officeHeaterController.label = 'heater controller'
  officeHeaterController.temperature = '20.0'
  officeHeaterController.desiredTemperature = '21.0'
  office.device.push(officeHeaterController)
  things.push(officeHeaterController)

  let officeLamp = new PowerSocket(office.iri().toString() + 'lamp', context.Light)
  officeLamp.label = 'desk lamp'
  office.device.push(officeLamp)
  things.push(officeLamp)

  let basement = new Room(apartment.iri().toString() + 'basement/')
  basement.label = 'basement'
  apartment.room.push(basement)
  things.push(basement)

  let basementTemperatureSensor = new Thermometer(basement.iri().toString() + 'temperature-sensor')
  basementTemperatureSensor.label = 'thermometer'
  basementTemperatureSensor.temperature = '21.1'
  basementTemperatureSensor.humidity = '55.0'
  basement.device.push(basementTemperatureSensor)
  things.push(basementTemperatureSensor)

  let outdoor = new Room(apartment.iri().toString() + 'outdoor/')
  outdoor.label = 'outdoor'
  apartment.room.push(outdoor)
  things.push(outdoor)

  let outdoorThermometer = new MetaWeatherThermometer(outdoor.iri().toString() + 'thermometer', [48.136410,11.577530])
  outdoorThermometer.label = 'thermometer'
  outdoor.device.push(outdoorThermometer)
  things.push(outdoorThermometer)

  return things
}

module.exports = init
