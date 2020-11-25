// Import controllers
const configurationController = require('../controllers/configurationController')
const locationController = require('../controllers/locationController')
const beeHiveController = require('../controllers/beeHiveController')
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
    url: '/api/configurations',
    handler: configurationController.getConfigurations
  },
  {
    method: 'GET',
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
    url: '/api/locations',
    handler: locationController.getLocations
  },
  {
    method: 'GET',
    url: '/api/locations/:id',
    handler: locationController.getSingleLocation
  },
  {
    method: 'POST',
    url: '/api/locations',
    handler: locationController.addLocation,
    schema: { name: String }
  },
  {
    method: 'PUT',
    url: '/api/locations/:id',
    handler: locationController.updateLocation
  },
  {
    method: 'PUT',
    url: '/api/locations/:id/link/:beeHiveID',
    handler: locationController.linkBeeHiveToLocation
  },
  {
    method: 'PUT',
    url: '/api/locations/:id/unlink/:beeHiveID',
    handler: locationController.unlinkBeeHiveFromLocation
  },
  {
    method: 'DELETE',
    url: '/api/locations/:id',
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
    handler: beeHiveController.getBeeHives
  },
  {
    method: 'GET',
    url: '/api/beeHives/:id',
    handler: beeHiveController.getSingleBeeHive
  },
  {
    method: 'POST',
    url: '/api/beeHives',
    handler: beeHiveController.addBeeHive,
    schema: { name: String }
  },
  {
    method: 'PUT',
    url: '/api/beeHives/:id',
    handler: beeHiveController.updateBeeHive
  },
  {
    method: 'DELETE',
    url: '/api/beeHives/:id',
    handler: beeHiveController.deleteBeeHive
  },
  {
    method: 'GET',
    url: '/api/beeHives/logs',
    handler: beeHiveController.getAllBeeHiveLogs
  },
  {
    method: 'GET',
    url: '/api/beeHives/:id/logs',
    handler: beeHiveController.getBeeHiveLogs
  },
  {
    method: 'GET',
    url: '/api/beeHives/logs/:id',
    handler: beeHiveController.getSingleBeeHiveLog
  },
  {
    method: 'POST',
    url: '/api/beeHives/:id/logs',
    handler: beeHiveController.addBeeHiveLog
  },
  {
    method: 'DELETE',
    url: '/api/beeHives/logs/:id',
    handler: beeHiveController.deleteBeeHiveLog
  },
  {
    method: 'PUT',
    url: '/api/beeHives/logs/:id',
    handler: beeHiveController.updateBeeHiveLog
  }
]

module.exports = routes
