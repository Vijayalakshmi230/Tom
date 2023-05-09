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


userRouter.get('/new',(request,response)=>{
    response.render('users/new')
})
userRouter.post('/',(request,response)=>{
   // console.log(request.body.FirstName)
   listofUsers.push({name:request.body.FirstName})
   response.redirect(`/users/${listofUsers.length}`)
})

userRouter.get('/:id([0-9]{1})',(request,response)=>{
    console.log(request.user);
    response.send(`${request.user.name} with id ${request.params.id}`)
})


userRouter.param('id',(request,response,next,id)=>{
   request.user = listofUsers[id-1]
   next()
})


userRouter.get(',/html',(request,response)=>{
    response.render('contact')
})

module.exports = userRouter