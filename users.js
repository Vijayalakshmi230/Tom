const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (request, response) => {
    response.send(`This is the list of users`)
})

const listofUsers = [
    {
        'id': 1,
        'name': 'vijaya',
    },
    {
        'id': 2,
        'name': 'sravya',
    },
    {
        'id': 3,
        'name': 'likitha',
    },
    {
        'id': 4,
        'name': 'sujatha',
    }
]
userRouter.get('/:id([0-9]{1})', (request, response) => {
    const pageId = Number(request.params.id)
    const userId = listofUsers.find((user)=>user.id === pageId)
    
    if(!userId)
    {
        response.send(`Page not found`)
    }
    else{
        response.json(userId.name)
    }
    response.send(`This is lis of users ${request.params.id}`)
})

module.exports = userRouter