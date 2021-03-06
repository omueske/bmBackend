// Require the Framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// // Declare a route
// fastify.get("/", async (request, reply) => {
//   return { hello: "world" };
// });

// Run the Server
const start = async () => {
  try {
    await fastify.listen(8080)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose
  .connect('mongodb://localhost/bmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => fastify.log.info('MongoDB connected...'))
  .catch((err) => fastify.log.fatal(err))

const routes = require('./routes')

routes.forEach((route, index) => {
  fastify.route(route)
})
