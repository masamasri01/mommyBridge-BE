// whenever the user use api the route folder is api tat call controller
//in controller we handle handle the requests and responses
//controller uses service 
// and in service we perform all db 

const UserModel = require('../model/user_model');
const UserService = require('../services/user_services')
exports.registerMom = async (req,res,next)=>{
    try{
        const {email,password}= req.body;
        const successRes = await UserService.registerMomUser(email,password);
        res.json({status:true,success:"User Registered Successfully"})
    }catch(err){
        console.log("---> err -->", err);
        next(err);
        throw err;
    }
   
}
exports.registerChild = async (req,res,next)=>{
    try{
        const {fullName,classId}= req.body;
        const successRes = await UserService.registerChild(fullName,classId);
        res.json({status:true,success:"User Registered Successfully"})
    }catch(err){
        console.log("---> err -->", err);
        next(err);
        throw err;
    }
   
}
exports.registerTeacher = async (req,res,next)=>{
    try{
        const {email,password}= req.body;
        const successRes = await UserService.registerTeacherUser(email,password);
        res.json({status:true,success:"User Registered Successfully"})
    }catch(err){
        console.log("---> err -->", err);
        next(err);
        throw err;
    }
   
}
exports.loginMom = async (req,res,next)=>{ // we send the response back to frontend
    try{
        const {email,password}= req.body;
        const user =await  UserService.checkMomuser(email);
        if(user==false || user==null){
            console.log("'User does not exist'");
            return res.status(400).json({ message: 'User not found' });
           // throw new Error('User does not exist');
        }
        else{

        const isMatch = user.comparePassword(password); 
        if(isMatch  == false){
            throw new Error('wrong password')
        }
        let tokenData={_id:user._id , email:user.email}
        const token = await UserService.generateToken(tokenData,"key",'1h')// expires after 1 hour
        res.status(200).json({status:true,token:token})}
    }catch(err){  
        throw err;
    }
} 
exports.loginTeacher = async (req,res,next)=>{ // we send the response back to frontend
    try{
        const {email,password}= req.body;
        const user =await  UserService.checkTeacheruser(email);
        if(user==false || user==null){
            console.log("'User does not exist'");
            return res.status(400).json({ message: 'User not found' });
           // throw new Error('User does not exist');
        }
        
        const isMatch =user.comparePassword(password); 
        if(isMatch  == false){
            throw new Error('wrong password')
        }
        let tokenData={_id:user._id , email:user.email}
        const token = await UserService.generateToken(tokenData,"key",'1h')// expires after 1 hour
        res.status(200).json({status:true,token:token})
    }catch(err){  
        throw err;
    }
} 