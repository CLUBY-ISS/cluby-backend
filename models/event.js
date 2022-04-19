const mongoose= require('mongoose');
const eventSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
   
    image:{
        type:String,
        default:''
    },
   
    club:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Club',
        required:true
    },
    attendees:{
        type:mongoose.Schema.Types.Array,
        ref:'User',
        required:true
    },
 
 
    
  
})



eventSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

eventSchema.set('toJSON', {
    virtuals: true,
});

exports.Event = mongoose.model('Event', eventSchema);
