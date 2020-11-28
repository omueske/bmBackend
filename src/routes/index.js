// Import controllers
const configurationController = require('../controllers/configurationController')
const locationController = require('../controllers/locationController')
const beeHiveController = require('../controllers/beeHiveController')
const queenController = require('../controllers/queenController')
// const documentation = require('../models/Location')
// console.log(documentation.Model)

const routes = [
  /*
  =================================================================
    Configuration Routes
  =================================================================
  */
  {
    method: 'GET',
    schema: {
      tags: ['configurations']
    },
    url: '/api/configurations',
    handler: configurationController.getConfigurations
  },
  {
    method: 'GET',
    schema: {
      tags: ['configurations']
    },
    url: '/api/configurations/:id',
    handler: configurationController.getSingleConfiguration
  },
  /*
  =================================================================
    Location Routes
  =================================================================
  */
  {
    method: 'GET',
    schema: {
      tags: ['locations']
    },
    url: '/api/locations',
    handler: locationController.getLocations
  },
  {
    method: 'GET',
    schema: {
      tags: ['locations']
    },
    url: '/api/locations/:id',
    handler: locationController.getSingleLocation
  },
  {
    method: 'POST',
    url: '/api/locations',
    schema: {
      tags: ['locations']
    },
    handler: locationController.addLocation
  },
  {
    method: 'PUT',
    url: '/api/locations/:id',
    schema: {
      tags: ['locations']
    },
    handler: locationController.updateLocation
  },
  {
    method: 'PUT',
    url: '/api/locations/:id/link/:beeHiveID',
    schema: {
      tags: ['locations']
    },
    handler: locationController.linkBeeHiveToLocation
  },
  {
    method: 'PUT',
    url: '/api/locations/:id/unlink/:beeHiveID',
    schema: {
      tags: ['locations']
    },
    handler: locationController.unlinkBeeHiveFromLocation
  },
  {
    method: 'DELETE',
    url: '/api/locations/:id',
    schema: {
      tags: ['locations']
    },
    handler: locationController.deleteLocation
  },

  /*
  =================================================================
    BeeHive Routes
  =================================================================
  */
  {
    method: 'GET',
    url: '/api/beeHives',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.getBeeHives
  },
  {
    method: 'GET',
    url: '/api/beeHives/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.getSingleBeeHive
  },
  {
    method: 'POST',
    url: '/api/beeHives',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.addBeeHive
  },
  {
    method: 'PUT',
    url: '/api/beeHives/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.updateBeeHive
  },
  {
    method: 'DELETE',
    url: '/api/beeHives/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.deleteBeeHive
  },
  {
    method: 'GET',
    url: '/api/beeHives/logs',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.getAllBeeHiveLogs
  },
  {
    method: 'GET',
    url: '/api/beeHives/:id/logs',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.getBeeHiveLogs
  },
  {
    method: 'GET',
    url: '/api/beeHives/logs/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.getSingleBeeHiveLog
  },
  {
    method: 'POST',
    url: '/api/beeHives/:id/logs',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.addBeeHiveLog
  },
  {
    method: 'DELETE',
    url: '/api/beeHives/logs/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.deleteBeeHiveLog
  },
  {
    method: 'PUT',
    url: '/api/beeHives/logs/:id',
    schema: {
      tags: ['beeHives']
    },
    handler: beeHiveController.updateBeeHiveLog
  },
  // =================================================================
  //   Queens Routes
  // =================================================================
  {
    method: 'GET',
    url: '/api/queens',
    schema: {
      tags: ['queens']
    },
    handler: queenController.getQueens
  },
  {
    method: 'GET',
    url: '/api/queens/:id',
    schema: {
      tags: ['queens']
    },
    handler: queenController.getSingleQueen
  },
  {
    method: 'POST',
    url: '/api/queens',
    schema: {
      tags: ['queens']
    },
    handler: queenController.addQueen
  },
  {
    method: 'PUT',
    url: '/api/queens/:id',
    schema: {
      tags: ['queens']
    },
    handler: queenController.updateQueen
  },
  {
    method: 'DELETE',
    url: '/api/queens/:id',
    schema: {
      tags: ['queens']
    },
    handler: queenController.deleteQueen
  }
]

module.exports = routes
