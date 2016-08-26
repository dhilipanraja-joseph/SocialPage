const JWT_SECRET = 'g38f46t87gvfrvf747t287642gwgvshjdwytf';
const bcrypt = require('bcrypt-node');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username : { type: String,required: true,unique : true},
  password : { type: String,required: true},
  email : {type: String},
  imgurl : {type: String}
});

userSchema.statics.register = function(userObj,cb){
  bcrypt.genSalt(11,(err,salt)=>{
    if (err) return cb(err);
    bcrypt.hash(userObj.password,salt,null,(err,hash)=>{
      if(err) return cb(err);
      userObj.password=hash;
      this.create(userObj,(err)=>{
        cb(err);
      });
    });
  });
};

userSchema.statics.authenticate = function(userObj,cb){

  let { username , password } = userObj;
      this.findOne({ username },(err,user)=>{
        if(err || !user) {
          return cb(err || {error:"Bad Login credentials"});
        }
        bcrypt.compare(password,user.password,(err,isGood)=>{
          if(err) return cb(err);
          if(!isGood) return cb({error:"Bad Login credentials"});
          let payload={
            _id : user._id
          }
          jwt.sign(payload,JWT_SECRET,{},cb);
        });

      });
};

userSchema.statics.authMiddleware = function(req,res,next){
  let token = req.cookies.authToken;
  jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err) return res.status(401).send(err);

      User
      .findById(payload._id)
      .select('-password')
      .exec((err,user)=>{
        if(err) return res.status(400).send(err);
        if(!user) return res.status(401).send({error : 'User not found.'});
        req.user = user;
        next();
      });
  });
}

const User = mongoose.model('User',userSchema);

module.exports = User;
