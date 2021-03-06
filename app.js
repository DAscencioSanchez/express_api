// Usando objeto express 
const express = require('express')

//app express
const app = express()
app.use(express.json()) // indicamos que usaremos JSON

//Puerto en que podremos ver nuestra app: localhost:3000
const port = 3000

//Esto es un ENDPOINT
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

app.get('/v1/explorers/:id', (req,res) => {
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Explorer1"}
    //HTTP code status: 200
    res.status(200).json(explorer1)
})

app.post('/v1/explorers', (req,res) => {
    console.log(`POST Explorers VI API ${new Date()}`)
    // Agregar la logica para persistir
    console.log(req.body) // parametros del request
    res.status(201).json({message: "Creado exitosamente"})
})

app.put('/v1/explorers/:id', (req,res) => {
    console.log(`PUT Explorers VI API ${new Date()}`)
    console.log(req.body) // parametros para actualizar
    console.log(req.params.id) //query params
    // Agregar la logica para persistir
    res.status(200).json({message: "Actualizado exitosamente"})
})

app.delete('/v1/explorers/:id', (req,res) => {
    console.log(`DELETE Explorers VI API ${new Date()}`)
    
    // Agregar la logica para eliminar el registro enviado
    res.status(200).json({message: "Eliminado exitosamente"})
})