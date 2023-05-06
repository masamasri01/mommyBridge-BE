const ActivitiesServices= require('../services/activities_services')
// req= any data sent from frontend in req body, 
//use res to send to front end
exports.createMeal= async(req,res,next)=>{
    try {
        const {mealName,mealTime,mealType,amount,childId}=  req.body;
        let meal = await   ActivitiesServices.createMeal(mealName,mealTime,mealType,amount,childId)
        res.json({status:true,success:meal} )
    } catch (error) {
        next(error);
    }
}
exports.createNap = async(req,res,next)=>{
    try {
        const {startTime,endTime,childId}=  req.body;
        let todo = await   ActivitiesServices.createNap(startTime,endTime,childId)
        res.json({status:true,success:todo} )
    } catch (error) {
        next(error);
    }
}
exports.createAttend = async(req,res,next)=>{
    try {
        const {attend,childId}=  req.body;
        let todo = await   ActivitiesServices.createAttend(attend,childId)
        res.json({status:true,success:todo} )
    } catch (error) {
        next(error);
    }
}
exports.createAnnounce = async(req,res,next)=>{
    try {
        const {announce,childId}=  req.body;
        let todo = await   ActivitiesServices.createAnnounce(announce,childId)
        res.json({status:true,success:todo} )
    } catch (error) {
        next(error);
    }
}
exports.createAccident = async(req,res,next)=>{
    try {
        const {accidentType,description,userId,childrenIds}=  req.body;
        let todo = await   ActivitiesServices.createAccident(accidentType,description,userId,childrenIds)
        res.json({status:true,success:todo} )
    } catch (error) {
        next(error);
    }
}
// exports.getUserTodo =  async (req,res,next)=>{
//     try {
//         console.dir(req.body);

//         const {userId} = req.body;
//        // console.log("userId is  "+JSON.stringify(req.body));
//         let todoData = await TodoServices.getTododata(userId);
//         if(todoData.length == 0) {
//             console.log("No record found")
            
//         }
//         res.json({status: true,success:todoData});
//      //   console.log("res is        "+res);
//     } catch (error) {
//         console.log(error, 'err---->');
//         next(error);
//     }
// }


// exports.deleteTodo= async(req,res,next)=>{
   
//         try {
//             const {todoId}=  req.body;
//             let deletaData = await   TodoServices.deletaData(todoId)
//             console.log(todoId)
//             res.json({status:true,success:deletaData} )
//         } catch (error) {
//             next(error);
//         }
//}