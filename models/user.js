const mongoose= require('mongoose');
const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
  
    avatar:{
        type:String,
        default:''
    },
 
    dateOfBirth:{
        type:Date,
        default:Date.now,
    },
  
})



userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);