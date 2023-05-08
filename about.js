const express = require('express')
const router= express.Router()

router.get('/',(request,response)=>{
    response.send("About Us")
})

module.exports=router