// Usando objeto express 
const express = require('express')

//app express
const app = express()
app.use(express.json()) // indicamos que usaremos JSON

//Puerto en que podremos ver nuestra app: localhost:3000
const port = 3000

//routes
//Methods HTTP; GET, POST, PUT, DELETE,
app.get('/v1/explorers', (req,res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Explorer1"}
    const explorer2 = {id:2, name: "Explorer2"}
    const explorers = [explorer1,explorer2]
    //HTTP code status: 200
    res.status(200).json(explorers)
})


//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})