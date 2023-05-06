const mongoose= require('mongoose');
const db = require('../config/db');
const ClassModel = require('./class_model');

const {Schema}= mongoose;
const childSchema = new Schema (
    {
        fullName:{
            type:String,
        },
        classId:{
            type:Schema.Types.ObjectId,
            ref: 'class'
        }
       
    },{timestamps:true}
);
const ChildModel = db.model('child',childSchema);
module.exports={ChildModel}