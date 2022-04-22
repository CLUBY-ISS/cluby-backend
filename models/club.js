const mongoose= require('mongoose');
const clubSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
   
    logo:{
        type:String,
        default:''
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
   
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    followers:{
        type:mongoose.Schema.Types.Array,
        ref:'User',
        required:true
    },
    events:{
        type:mongoose.Schema.Types.Array,
        ref:'Event',
        required:true
    },
 
 
 
   
  
})



clubSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

clubSchema.set('toJSON', {
    virtuals: true,
});

exports.Club = mongoose.model('Club', clubSchema);
