"use strict"
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0-hpdpw.mongodb.net/automaticmining?retryWrites=true&w=majority'

app.set('port', process.env.PORT || 3000)
app.set('connectdb', process.env.DATABASE_URL || MONGO_URI)

app.use((req, res, next) => {
  const whiteList = [
    'http://localhost:3000',
    'http://automaticmining.herokuapp.com',
    'https://mining-management.herokuapp.com/'
  ];
  const { origin } = req.headers;
  if (whiteList.indexOf(origin) > - 1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '/static/frontend')))

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname))
// })
app.get('/', (req, res) => {
  res.send('API Server ready')
})
app.use('/api', require('./routes'))

mongoose.connect(app.get('connectdb'), {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(db => console.log(`Database version: ${db.version}`))
  .catch(error => console.error(error))

app.listen(app.get('port'), () => {
  console.log(`APIServer Ready in port: ${app.get('port')}`)
})