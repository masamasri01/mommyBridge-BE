const Models = require('../model/activities_model')
class ActivitiesServices{
    static  async  createMeal(mealName,mealTime,mealType,amount,childId){
        const createModel = new Models.MealModel({mealName,mealTime,mealType,amount,childId})
        return await createModel.save();
    }
    static  async  createNap(startTime,endTime,childId){
        const createModel = new Models.NapModel({startTime,endTime,childId})
        return await createModel.save();
    }
    static  async  createAttend(attend,childId){
        const createModel = new Models.AttendanceModel({attend,childId})
        return await createModel.save();
    }
    
    static  async  createAnnounce(announce,childId){
        const createModel = new Models.AnnouncementModel({announce,childId})
        return await createModel.save();
    }
    static  async  createAccident(accidentType,description,userId,childrenIds){
        const createModel = new Models.AccidentModel({accidentType,description,userId,childrenIds})
        return await createModel.save();
    }
    
    // static async getTododata(userId){
    //     //console.log('services '+userId)
    //     const todoList = await TodoModel.find({userId: userId})
    //     return todoList;
    // }
    
    // static  async  deletaData(todoId){
    //     const todoDataDelete = await TodoModel.findOneAndDelete({_id: todoId})//
    //     return todoDataDelete;
    // }
} 
module.exports = ActivitiesServices;