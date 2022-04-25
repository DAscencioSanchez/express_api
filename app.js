// Usando objeto express 
const express = require('express')
//app express
const app = express()
app.use(express.json()) // indicamos que usaremos JSON
//Puerto en que podremos ver nuestra app: localhost:3000
const port = 3000

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})