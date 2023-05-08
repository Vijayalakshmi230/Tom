const express = require('express')
const serviceRouter = express.Router()

serviceRouter.get('/', (request, response) => {
    response.send("Service")
})

const listofService = [
    {
        'id': 1,
        'name': 'apple',
    },
    {
        'id': 2,
        'name': 'mango'
    },
    {
        'id': 3,
        'name': 'orange'
    },
    {
        'id': 4,
        'name': 'grape'
    }
]
serviceRouter.get('/:id([0-9]{1})', (request, response) => {
    const pageId = Number(request.params.id)
    const userId = listofService.find((user) => user.id === pageId)

    if (!userId) {
        response.send(`Page not found`)
    }
    else {
        response.send(userId.name)
    }
    response.send(`This is list of service ${request.params.id}`)
})
module.exports = serviceRouter