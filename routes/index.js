const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/home',homeController.home);

console.log("router is loaded");
module.exports=router;