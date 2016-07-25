'use strict'

const context = require('dark-horse-thing/context')
const Apartment = require('dark-horse-thing/building/Apartment')
const ElroPowerSocket = require('dark-horse-thing-mediola/ElroPowerSocket')
const HomeMaticHeaterController = require('dark-horse-thing-mediola/HomeMaticHeaterController')
const HomeMaticTemperatureSensor = require('dark-horse-thing-mediola/HomeMaticTemperatureSensor')
const Pingable = require('dark-horse-thing-pingable')
const Room = require('dark-horse-thing/building/Room')

function init (baseIRI) {
  let things = []

  let apartment = new Apartment(baseIRI + '/')
  apartment.label = 'apartment'
  things.push(apartment)

  let basement = new Room(apartment.iri() + 'basement/')
  basement.label = 'basement'
  apartment.room.push(basement)
  things.push(basement)

  let basementThermometer = new HomeMaticTemperatureSensor(basement.iri() + 'temperature-sensor', {endpoint: 'http://192.168.1.24/home-matic/30E0A401'})
  basementThermometer.label = 'thermometer'
  basement.device.push(basementThermometer)
  things.push(basementThermometer)

  let bedroom = new Room(apartment.iri() + 'bedroom/')
  bedroom.label = 'bedroom'
  apartment.room.push(bedroom)
  things.push(bedroom)

  let bedroomHeaterController = new HomeMaticHeaterController(bedroom.iri() + 'heater-controller', {endpoint: 'http://192.168.1.24/home-matic/38984101'})
  bedroomHeaterController.label = 'heater controller'
  bedroom.device.push(bedroomHeaterController)
  things.push(bedroomHeaterController)

  let bedroomLamp = new ElroPowerSocket(bedroom.iri() + 'lamp', {type: context.Light, endpoint: 'http://192.168.1.24/elro-power-socket/23'})
  bedroomLamp.label = 'bedroom lamp'
  bedroom.device.push(bedroomLamp)
  things.push(bedroomLamp)

  let kitchen = new Room(apartment.iri() + 'kitchen/')
  kitchen.label = 'kitchen'
  apartment.room.push(kitchen)
  things.push(kitchen)

  let kitchenHeaterController = new HomeMaticHeaterController(kitchen.iri() + 'heater-controller', {endpoint: 'http://192.168.1.24/home-matic/36D8E201'})
  kitchenHeaterController.label = 'heater controller'
  kitchen.device.push(kitchenHeaterController)
  things.push(kitchenHeaterController)

  let livingRoom = new Room(apartment.iri() + 'living-room/')
  livingRoom.label = 'living room'
  apartment.room.push(livingRoom)
  things.push(livingRoom)

  let livingRoomHeaterController = new HomeMaticHeaterController(livingRoom.iri() + 'heater-controller', {endpoint: 'http://192.168.1.24/home-matic/38968001'})
  livingRoomHeaterController.label = 'heater controller'
  livingRoom.device.push(livingRoomHeaterController)
  things.push(livingRoomHeaterController)

  let livingRoomLamp = new ElroPowerSocket(livingRoom.iri() + 'lamp', {type: context.Light, endpoint: 'http://192.168.1.24/elro-power-socket/15'})
  livingRoomLamp.label = 'sofa lamp'
  livingRoom.device.push(livingRoomLamp)
  things.push(livingRoomLamp)

  let office = new Room(apartment.iri() + 'office/')
  office.label = 'office'
  apartment.room.push(office)
  things.push(office)

  let officeHeaterController = new HomeMaticHeaterController(office.iri() + 'heater-controller', {endpoint: 'http://192.168.1.24/home-matic/36EF7301'})
  officeHeaterController.label = 'heater controller'
  office.device.push(officeHeaterController)
  things.push(officeHeaterController)

  let officeLamp = new ElroPowerSocket(office.iri() + 'lamp', {type: context.Light, endpoint: 'http://192.168.1.24/elro-power-socket/27'})
  officeLamp.label = 'desk lamp'
  office.device.push(officeLamp)
  things.push(officeLamp)

  let computer = new Pingable(office.iri() + 'computer', {endpoint: '5ht2a'})
  computer.label = 'desktop computer'
  office.device.push(computer)
  things.push(computer)

  let laptop = new Pingable(office.iri() + 'laptop', {endpoint: '5ht1a'})
  laptop.label = 'laptop'
  office.device.push(laptop)
  things.push(laptop)

  let outdoors = new Room(apartment.iri() + 'outdoors/')
  outdoors.label = 'outdoors'
  apartment.room.push(outdoors)
  things.push(outdoors)

  let outdoorsThermometer = new HomeMaticTemperatureSensor(outdoors.iri() + 'temperature-sensor', {endpoint: 'http://192.168.1.24/home-matic/25FB6501'})
  outdoorsThermometer.label = 'thermometer'
  outdoors.device.push(outdoorsThermometer)
  things.push(outdoorsThermometer)

  let pantry = new Room(apartment.iri() + 'pantry/')
  pantry.label = 'pantry'
  apartment.room.push(pantry)
  things.push(pantry)

  let pantryThermometer = new HomeMaticTemperatureSensor(pantry.iri() + 'temperature-sensor', {endpoint: 'http://192.168.1.24/home-matic/30E32601'})
  pantryThermometer.label = 'thermometer'
  pantry.device.push(pantryThermometer)
  things.push(pantryThermometer)

  return things
}

module.exports = init
