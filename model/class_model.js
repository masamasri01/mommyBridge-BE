const mongoose= require('mongoose');
const db = require('../config/db');
const UserModel= require('./user_model');
const ChildModel = require('./child_model');
const ActivitiesModel = require('./activities_model');
const {Schema}= mongoose; // import schema property

const classSchema = new Schema (
    {
        className:{
            type:String,
            lowercase:true,
            required:true,
        },
        startingAgeInMonths:{
            type:Number,
            required:true,
        },
        endingAgeInMonths:{
            type:Number,
            required:true,
        },
         teacherId:{
            type: Schema.Types.ObjectId,
            ref:'teacher'
        },
        childrenIds:[ {
            type:mongoose.Schema.Types.ObjectId,
            ref:'child'
        }]
    },{timestamps:true}
);


const ClassModel = db.model('class',classSchema);
module.exports = {ClassModel};