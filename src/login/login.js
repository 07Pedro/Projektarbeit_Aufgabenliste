const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// login von https://www.geeksforgeeks.org/how-to-manage-sessions-and-cookies-in-express-js/

app.post('/login', express.json(), (request, response) => {
  const { password } = request.body
  console.log(request.body)
  if (password === 'm295') {
    response.cookie('sessionId', request.sessionID)
    response.send('Login success')
  } else {
    response.send('Invalid credentials. Please try again.')
  }
})

app.get('/verify', function (request, response) {
  const session = request.sessionID
  if (session) {
    response.send('Token verified!')
  } else {
    response.status(401)
  }
})

app.listen(3000)
