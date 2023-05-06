// whenever the user use api the route folder is api tat call controller
//in controller we handle handle the requests and responses
//controller uses service 
// and in service we perform all db 

const router = require('express').Router();
const UserController = require('../controller/user_controller')
router.post('/registerationMom',UserController.registerMom)
router.post('/registerationTeacher',UserController.registerTeacher)

router.post('/loginMom',UserController.loginMom)
router.post('/loginTeacher',UserController.loginTeacher)

router.post('/registerChild',UserController.registerChild)


module.exports = router;