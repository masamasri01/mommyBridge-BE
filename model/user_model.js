const mongoose= require('mongoose');
const db = require('../config/db');
const ChildModel= require('../model/child_model')
const ClasssModel = require('./class_model')
const {Schema}= mongoose;

// const userSchema = new Schema (
//     {
//         email:{
//             type:String,
//             lowercase:true,
//             required:true,
//             unique:true
//         },
//         password:{
//             type:String,
//             required: true
//         }
//     },{timestamps:true}
// );
// const UserModel = db.model('user',userSchema);

const momSchema = new Schema (
    {   
         email:{
            type:String,
            lowercase:true,
            required:true,
            unique:true
        },
               password:{
            type:String,
            required: true
        },
        childrenIds:[ {
            type:Schema.Types.ObjectId,
            ref: ChildModel.modelName
        }],
        phone:{
            type:String
        },
        job:{
            type:String
        },
        address:{
            type:String
        },
        relationship:{
            type:String
        },

    }
);

const teacherSchema = new Schema (
    {    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
           password:{
        type:String,
        required: true
 },
        classId:{
            type:Schema.Types.ObjectId,
                ref: 'class'
        },
        phone:{
            type:String
        }


    }
);
// userSchema.methods.comparePassword = async function(userPassword){
//     try {
//         const isMatch = await (this.password==userPassword);
//         return isMatch;
//     } catch (error) {
//         throw error
//     }
// }
momSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await (this.password==userPassword);
        return isMatch;
    } catch (error) {
        throw error
    }
 }
// teacherSchema.methods.comparePassword = async function(userPassword){
//     try {
//         const isMatch = await (this.password==userPassword);
//         return isMatch;
//     } catch (error) {
//         throw error
//     }
// }
const TeacherModel = db.model('teacher',teacherSchema);
const MomModel = db.model('mom',momSchema);



module.exports = {MomModel,TeacherModel}