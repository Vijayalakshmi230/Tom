const express=require('express')
const router=express.Router()

const users=[{
 
    name:'web development'
  },
  {
    
    name:'DataScience'
  },
  {
    
    name:'ML engineer'
  },
  {
   
    name:'Ai engineer'
  }
]

router.get('/',(request,response)=>{
  response.send("User Page")
})
router.get('/new',(request,response)=>{
  response.render('service/new')
})

router.post('/',(request,response)=>{
  
  users.push({name:request.body.FirstName})
  response.redirect(`/service/${users.length}`)
})


router.get('/:id([0-9])',(request,response)=>{
response.send(`${req.user.name} with id ${req.params.id}`)

 
})


router.param('id',(request,response,next,id)=>{
  request.user=users[id]
  next();
})

module.exports=router;