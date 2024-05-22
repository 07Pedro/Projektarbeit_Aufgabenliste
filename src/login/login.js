const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const secretPassword = 'm295'

// login von https://www.geeksforgeeks.org/how-to-manage-sessions-and-cookies-in-express-js/

app.post('/login', express.json(), (request, response) => {
  const { password } = request.body
  if (password === secretPassword) {
    response.cookie('sessionId', request.sessionID)
    response.setHeader('Content-Type', 'application/json')
    response.send('Login success')
  } else {
    response.send(401).send()
  }
})

app.get('/verify', function (request, response) {
  const session = request.sessionID
  if (session) {
    response.setHeader('Content-Type', 'application/json')
    response.send('Token verified!')
  } else {
    response.status(401).send()
  }
})

app.delete('/logout', function (request, response) {
  if (request.sessionID) {
    request.sessionID = null
    response.setHeader('Content-Type', 'application/json')
    response.status(204).send()
  }
  response.status(401).send()
})

app.listen(3001)
