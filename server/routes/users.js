const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register',(req,res)=>{
  User.register(req.body,(err)=>{
    res.status(err ? 400 : 200).send(err);
  });
})

router.post('/login',(req,res)=>{
  User.authenticate(req.body,(err,token)=>{
    if(err){

      res.status(400).send(err);
    }else{

      res.cookie('authToken',token).send();
    }
  });
})

router.put('/update/:id',(req,res)=>{
  User.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true},(err,user)=>{
    if(err){
      res.status(400).send(err);
    }else{
      res.status(err ? 400 : 200).send( err || user );
    }
  });
})


router.get('/profile',User.authMiddleware,(req,res)=>{
  res.send(req.user);
})

router.post('/logout',(req,res)=>{
  res.clearCookie('authToken').send();
})

module.exports = router;
