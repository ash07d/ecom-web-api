require('dotenv').config();//טעינת קובץ הגדרות שך דוט אי אנ וי
const jwt=require('jsonwebtoken');
const privatekey=process.env.privatekey;
const token=jwt.sign({uid:23}, privatekey,{expiresIn:'1h'});
console.log(token);


//זהו אוביקט מובנה מובנה בסיבבת נוט גס המכיל משתנה סביבה של המערכת 
try{
    const pelet=jwt.verify(token,privatekey);
}
catch(err){
    console.log(err.message);
}