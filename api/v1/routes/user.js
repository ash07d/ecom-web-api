// קישור לספריית אקספרס
const router=require('express').Router();
const UserController=require('../controllers/user');



//הרשמת משתמש חדש
router.post("/register",UserCotroller.Register);
//התחברות משתמש קיים
router.post("/login",UserController.Login);




module.exports=router;
