const express=require('express')
const router=express.Router()

const users=[{
 
    name:'web'
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

router.get('/',(req,res)=>{
  res.send("User Page")
})
router.get('/new',(req,res)=>{
  res.render('service/new')
})

router.post('/',(req,res)=>{
  //console.log(request.body.FirstName)
  users.push({name:request.body.FirstName})
  res.redirect(`/service/${users.length}`)
})


router.get('/:id([0-9])',(req,res)=>{
res.send(`${req.user.name} with id ${req.params.id}`)

 
})


router.param('id',(req,res,next,id)=>{
  req.user=users[id]
  next();
})
// const UsersArrayLength=users.length;
module.exports=router;