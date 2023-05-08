const express = require('express')
const serviceRouter = express.Router()

serviceRouter.get('/', (request, response) => {
    response.send("Service")
})

const listofService = [
    {
        'id': 1,
        'name': 'WebDevelopment',
    },
    {
        'id': 2,
        'name': 'Mobile APP Development'
    },
    {
        'id': 3,
        'name': 'Game Programming'
    },
    {
        'id': 4,
        'name': 'Data Analysis'
    }
]
serviceRouter.get('/', (request, response) => {
    response.send(`This is the list of users`)
})

serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.name)
})

serviceRouter.param('id',(request,response,next,id)=>{
    request.user = listofService[id]
    next()
})
module.exports = serviceRouter