require('dotenv').config();//הפעלת פונקציה מתוך ספריית 
function sandemail(u,p);
{
    Console.log("sent email to" + u);
    //קרא לגוגל והתחבר באמצעות השם והסיסמה
}
SANDEMAIL(process.env.USER_EMAIL,process.env.EMAIL_PASS);
const { Console } = require('console');
// קישור לספריית פרוטוקול עבודה באינטרנט
const http=require('http');
// קישור לאפליקציה שכתבנו בקובץ החיצוני
const app=require('./app');
const port=3000;
// יצירת אובייקט מסוג שרת אינטרנט
const server=http.createServer(app);
// הפעלת אובייקט השרת כך שיאזין לבקשות בכתובת הפורט שהגדרנו לו
server.listen(port,()=>{console.log("server started")});