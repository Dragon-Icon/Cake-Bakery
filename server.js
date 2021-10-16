//Variables
const express = require('express')
const app = express()
const bodyparser = require('body-parser');

//Settings
app.use(express.static('Public'))
app.use(bodyparser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


//Routes
const loginRoute = require('./routes/login')
const pagesRoute = require('./routes/pages')

app.use('', loginRoute)
app.use('', pagesRoute)


//PORT
app.listen(6969, ()=>{
    console.log('app listening in port 6969')
})