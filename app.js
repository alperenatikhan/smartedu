const express = require('express')
const pageRoute = require('./routes/pageRoute')

const port = 3000
const app = express()


//Template Engine 
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static("public"))



//Routes
app.use('/',pageRoute)

app.use('/register', pageRoute)

app.get('/login', pageRoute)

app.get('/about', pageRoute)

app.get('/courses', pageRoute)

app.get('/dashboard', pageRoute)

app.get('/course-single', pageRoute)





app.listen(port, ()=> console.log(`App started at ${port}`))
