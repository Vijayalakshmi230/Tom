const express = require('express')

const app = express()
const home = require('./home.js')
const about = require('./about.js')
const service = require('./service.js')
const contact = require('./contact.js')
const users = require('./users.js')

app.get('/',(request,response)=>{
    
    response.send("Get Router to Home Page")

})
app.use('/home',home)
app.use('/about',about)
app.use('/service',service)
app.use('/contact',contact)
app.use('/users',users)


app.listen(4700)