// Import controllers
const locationController = require("../controllers/locationController");
const beeHiveController = require("../controllers/beeHiveController");
const documentation = require("../models/Location.js");
console.log(documentation.Model);

const routes = [
  /*
  =================================================================
    Location Routes
  =================================================================
  */
  {
    method: "GET",
    url: "/api/locations",
    handler: locationController.getLocations,
  },
  {
    method: "GET",
    url: "/api/locations/:id",
    handler: locationController.getSingleLocation,
  },
  {
    method: "POST",
    url: "/api/locations",
    handler: locationController.addLocation,
    schema: { name: String },
  },
  {
    method: "PUT",
    url: "/api/locations/:id",
    handler: locationController.deleteLocation,
  },

  /*
  =================================================================
    BeeHive Routes
  =================================================================
  */
  {
    method: "GET",
    url: "/api/beeHives",
    handler: beeHiveController.getBeeHives,
  },
  {
    method: "GET",
    url: "/api/beeHives/:id",
    handler: beeHiveController.getSingleBeeHive,
  },
  {
    method: "POST",
    url: "/api/beeHives",
    handler: beeHiveController.addBeeHive,
    schema: { name: String },
  },
  {
    method: "PUT",
    url: "/api/beeHives/:id",
    handler: beeHiveController.deleteBeeHive,
  },
];

module.exports = routes;
