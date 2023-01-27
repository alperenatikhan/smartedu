const express = require('express')

const port = 3000
const app = express()


app.get('/', (req,res) => {res.status(200).json( [{'message' : 'wow it opened'}] )})





app.listen(port, ()=> console.log(`App started at ${port}`))
