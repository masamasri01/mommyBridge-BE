
const { ChildModel } = require('../model/child_model');
const UserModel=require('../model/user_model')
const jwt =  require('jsonwebtoken');
class UserService{
    static async registerMomUser(email,password){
        try{
            const createMomUser = new UserModel.MomModel({email,password});
            return await createMomUser.save();
    
        }catch(err){
            throw err;
        }
    }
 static async registerChild(fullName,classId){
    try{
        const createModel = new ChildModel({fullName,classId});
        return await createModel.save();

    }catch(err){
        throw err;
    }
}
    static async registerTeacherUser(email,password){
        try{
       
            const createUser = new UserModel.TeacherModel({email,password});
            return await createUser.save();
    
        }catch(err){
            throw err;
        }
 }
 static async checkMomuser(email){
    try {
        return await UserModel.MomModel.findOne({email})
    } catch (error) {
        throw error
    }
}
static async checkTeacheruser(email){
    try {
        return await UserModel.TeacherModel.findOne({email})
    } catch (error) {
        throw error
    }
}
static async generateToken(tokenData, secretKey,JWT_EXPIRE){
     return jwt.sign(tokenData , secretKey, { expiresIn: JWT_EXPIRE }  );
}
static async getMomUserByEmail(email){
    try{
        return await UserModel.MomModel.findOne({email});
    }catch(err){
        console.log(err);
    }
}
static async getTeacherUserByEmail(email){
    try{
        return await UserModel.TeacherModel.findOne({email});
    }catch(err){
        console.log(err);
    }
}
}
module.exports = UserService;