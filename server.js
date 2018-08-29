const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const html = 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<style>
  body {
      margin: 0;
      padding: 0;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      background-color: #204A87;
      color: #110930;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .container {
      margin: auto;
      width: 80%;
      display: grid;
      grid-template-columns: 30% 1fr;
    }
    .botones {
      display: grid;
      justify-content: center;
    }
    .respuestas {
      display: grid;
    }
    .respuesta {
      align-items: center;
      justify-content: center;
      display: grid;
    }
    .btn {
      width: 100px;
      height: 30px;
      border: none;
      background-color: #4E9A06;
      border-bottom: 3px solid #15620E;
      border-right: 3px solid #15620E;
      cursor: pointer;
      margin: 10px;
      color: whitesmoke;
      font-size: 16px;
    }
    .circle1 {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: red;
      margin:auto;
    }
    .circle2 {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: black;
      margin:20px;
    }
    p {
      text-align: justify;
      padding: 26px;
    }
</style>
<body>
  <div id="app">
    <nav>Mi servidor</nav>

    <div class="container">
      <div class="botones">
        <button class='btn' id="btn1">Request1</button>
        <button class='btn' id="btn2">Request2</button>
        <button class='btn' id="btn2">Request3</button>
        <button class='btn' id="btn2">Request4</button>
      </div>

      <div class="respuestas">
        <div class="respuesta">
          <div class="circle1">
            <div class="circle2"></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>      
  </div>
</body>
</html>
`

app.get('/', function(req, res) {
  res.send(html)
})

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!')
})
