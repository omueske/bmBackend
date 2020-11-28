exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'BeeBackend API',
      description: 'BeeBackend API Services',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'configurations',
        description: 'Frontend related Configuration end-points'
      },
      { name: 'beeHives', description: 'BeeHives related end-points' },
      { name: 'locations', description: 'Locations related end-points' }
    ]
  }
}
