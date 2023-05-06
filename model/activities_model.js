const mongoose= require('mongoose');
const db = require('../config/db');
const ChildModel= require('./child_model')
const UserModel= require('./user_model')
const {Schema}= mongoose; // import schema property

const mealSchema = new Schema (
    {
        mealName:{
            type:String,
            
        },
        mealTime:{
            type:String,
        },
        mealType:{
            type:String,
        },
        amount:{
            type:Number,
        },
        childId:{
            type:Schema.Types.ObjectId,
            ref: 'child'
        }
    },{timestamps:true}
);
const napSchema = new Schema (
    {
        startTime:{
            type:String,
            
        },
        endTime:{
            type:String,
        },
        childId:{
            type:Schema.Types.ObjectId,
            ref: 'child'
        }
    },{timestamps:true}
);

const attendanceSchema = new Schema (
    {
        attend:{
            type:Boolean,
            
        },
        
        childId:{
            type:Schema.Types.ObjectId,
             ref: 'child'
        }
    },{timestamps:true}
);
const announceSchema = new Schema (
    {
        announce:{
            type:String,
            
        },
        
       teacherId:{
            type:Schema.Types.ObjectId,
            ref: 'teacher'
        }
    },{timestamps:true}
);
const accidentSchema = new Schema (
    {
        accidentType:{
            type:String,
        },
        description:{
            type:String
        },
       
       childrenIds:[ {
            type:Schema.Types.ObjectId,
            ref: 'child'
        }]
    },{timestamps:true}
);
 const MealModel = db.model('meal',mealSchema);
 const NapModel = db.model('nap',napSchema);

const AttendanceModel=db.model('attend',attendanceSchema)
const AnnouncementModel=db.model('announce',announceSchema)
const AccidentModel=db.model('accident',accidentSchema)

module.exports = {MealModel,NapModel,AttendanceModel,AnnouncementModel,AccidentModel};
