const path = require('path')
const express = require('express')

const port = process.env.PORT || 8080
const app = express()

app
  .use((req, res, next) => {
    res.set('X-APP-LABEL', process.env.APP_LABEL)
    next()
  })
  .use(express.static(path.resolve(__dirname, 'static')))
  .listen(port)

process.on('SIGTERM', () => {
  app.close()
  console.log('SERVER KILLED!')
})
