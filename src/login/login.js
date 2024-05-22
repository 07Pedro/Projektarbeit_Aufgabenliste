const session = require('express-session')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// login von https://www.geeksforgeeks.org/how-to-manage-sessions-and-cookies-in-express-js/

app.post('/login', express.json(), (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  if (password === 'm295') {
    req.session.user = username
    res.cookie('sessionId', req.sessionID)
    res.send(req.sessionID)
  } else {
    res.send('Invalid credentials. Please try again.')
  }
})

app.listen(3000)
