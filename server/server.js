var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })


module.exports = server