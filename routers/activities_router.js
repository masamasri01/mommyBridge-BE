const router = require('express').Router();
const ActivitiesController = require("../controller/activities_controller")
//api
router.post('/mealAdd',ActivitiesController.createMeal)
router.post('/napAdd',ActivitiesController.createNap)
router.post('/attendAdd',ActivitiesController.createAttend)
router.post('/announceAdd',ActivitiesController.createAnnounce)
router.post('/accidentAdd',ActivitiesController.createAccident)

module.exports= router;
