// Import controllers
const locationController = require("../controllers/locationController");
const documentation = require("../models/Location.js");
console.log(documentation.Model);

const routes = [
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
];

module.exports = routes;
