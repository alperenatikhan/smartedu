const express = require('express')
const session = require('express-session')
const mongoose= require('mongoose')
require('dotenv').config()

const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')


const port = 3000
const app = express()

//Connect to DB

mongoose.set('strictQuery', true)

mongoose.connect(process.env.CONNECTION_STRING,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
   
    
   
   
}).then(()=> console.log('DB connected'));


//Template Engine 
app.set('view engine', 'ejs')


global.userIN = null

//Middlewares




app.use(express.json())
app.use(express.static("public"))

app.use(
    session({
      secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use('*', (req,res,next) => {

    userIN = req.session.userID

    next();
    
    })


//Routes
app.use('/',pageRoute)

app.use('/register', pageRoute)

app.get('/login', pageRoute)

app.get('/about', pageRoute)

app.use('/courses', courseRoute)

app.use('/courselist',courseRoute)

app.use('/dashboard', pageRoute)

app.use('/course-single', pageRoute)

app.use('/add-category', categoryRoute)

app.use('/user',userRoute)




app.listen(port, ()=> console.log(`App started at ${port}`))
