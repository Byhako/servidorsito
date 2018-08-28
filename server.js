const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', function(req, res) {
  console.log('request:',req)
  res.send({"saludo":"hola Ruben"})
})

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!')
})
