
// קישור לספריית אקספרס
const express=require('express');
// יצירת מופע של  אקספרס
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const Userrouter=require('./api/v1/controllers/user');
//const bcrypt=require('bcrypt');
// bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
//     if(err)
//     console.log(err.message);
//     else
//     console.log(hashPass);
//     });
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:'http://localhost:3000'}));
//app.use(cors());
//הוספת שכבת ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
app.use(morgan('dev'));
const productrouter=require('./api/v1/routes/product');
const ip=require('./api/v1/midllewares/auth');
const mysql=require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'ashley',
//     password: 'Aa07101994-',
//     database: 'ecommdb'
// });
// connection.connect(function(err) {  //חיבור לבסיס נתונים 
//     if (err) //במידה והייתה שגיאה אז יכנס למשתנה הזה פירוט של שגיאה 
//     console.log('Error ' + err.message);
//     else // במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
//     console.log('Connected To Db');
//     });
// global.db=connection;//שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתוכנית
// connection.query("select * from t_product");
    
const mongoose=require('mongoose');//קישור לספריית מונגוס 
const conn_str=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.gymtnhn.mongodb.net/ecomdb`;//הגדרת מחרוזת התחברות לשרת של מונגו 
//nongoose.set('stricOuery', true);
mongoose.connect(conn_str);//פתיחת החיבור לבסיס הנתתונים



// app.use(function(req,res,next){
//     console.log("conection from ip" + req.socket.remoteAddress);
//     next();
// });
//הוספת שכבה של ניתוב עבור מוצרים
app.use("/product", productrouter);
app.use("/user",Userrouter);
app.use("/*",ip);
module.exports=app;