const express = require('express')
const swaggerAutogen = require('swagger-autogen')()
const swaggerUi = require('swagger-ui-express')
const app = express()

const doc = {
  info: {
    version: '',
    title: '',
    description: ''
  },
  servers: [
    {
      url: '',
      description: ''
    }
  ],
  tags: [
    {
      name: '',
      description: ''
    }
  ],
  components: {}
}

const outputFile = './swaggerTasks.json'
const routes = ['tasks.js']
swaggerAutogen(outputFile, routes, doc).then(() => {
  const swaggerDocument = require(outputFile)
  app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
})

app.listen(3002)
