const express = require('express')

const app = express()

const service = require('./service.js')

const users = require('./users.js')



app.use(express.static('public'))

app.set('view engine','ejs')


app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
    
    //response.send("Get Router to Home Page")
    response.render('index')

})

app.use('/service',service)

app.use('/users',users)


app.listen(4700)