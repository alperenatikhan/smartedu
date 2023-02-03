const bcrypt = require('bcrypt')
const User = require('../models/User')
const session = require('express-session')





exports.registerNewUser = async(req,res) => {

  const userInfo = req.body

  await User.create(userInfo).then( (user) => res.status(200).send(user)).catch(err => res.status(403).send(err))
   
}

exports.authenticateUser = async(req,res)=> {

const {email,password} = req.body

const user = await User.findOne({"email" : email})

if(!user){
  res.status(401).send('WRONG PASSWORD');

}

  if (user) {
    bcrypt.compare(password, user.password, (err, same) => {
      if (same) {
        // USER SESSION

      req.session.userID = user._id
       
        res.status(200).json({"msg" :"YOU ARE LOGGED IN", "username" : user.name,"email" : user.email,"user": req.session });
      }else{
        res.status(401).send('WRONG PASSWORD');
}
    })
  }
}
