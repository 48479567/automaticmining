const express = require('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, '/static/frontend')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname))
})
app.get('/*', (req, res) => {
  res.redirect('/')
})

app.listen(app.get('port'), () => {
  console.log(`App Listen in ${app.get('port')}`)
})