const mongoose = require('mongoose');
const Course = require('./Course');
const bcrypt = require('bcrypt')


const Schema = mongoose.Schema; 

const UserSchema= new Schema({

name: {
    type : String,
    required:true
    
},

email:{
    type: String,
    required:true,
    unique:true
    
},

password:{
type:String,
required:true

},

courses:{
    type: [mongoose.Schema.Types.ObjectId],
    reference: 'Course'

}

,createdAt:{

    type:Date,
    default:Date.now()
}

});


UserSchema.pre('save', function (next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})

const User = mongoose.model('Users', UserSchema)
module.exports = User;
