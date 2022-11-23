require('dotenv').config()
const express = require('express')
const session = require('express-session')
const { engine } = require('express-handlebars')

const { SESSION_SECRET, SERVER_PORT } = process.env
const isProduction = process.env.NODE_ENV === 'production'

const sessionConfig = {
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: isProduction, 
  }
}

const app = express()
  .engine('.hbs', engine({ extname: '.hbs' }))
  .set('view engine', '.hbs')
  .set('views', './views')
  .use(session(sessionConfig))
  
  app.get('/', (req, res) => res.render('signin', { showSignInButton: true }))
  
  app.get('/signin', (req, res) => res.send('We haven\'t configured authentication!'))
  
  app.get('/signout', (req, res) => {
    // TODO 
  })

  app.get('/redirect', (req, res) => {
    // TODO 
  })

  app.listen(SERVER_PORT, () => {
    console.log(`App listening at https://localhost:${SERVER_PORT}`)
  })