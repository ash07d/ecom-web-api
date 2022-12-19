let arr={'192.168.1.181,192.168.1.186,192.167.1.184'}
function IP(x,y)
{
    x=(192.168.1.181);
    if(x=y)
    {
        return(x)
    }
    else 
    {
        return(y);
    }
}
// קישור לספריית אקספרס
const express=require('express');
// יצירת מופע של  אקספרס
const app=express();
const productrouter=require('./api/v1/routes/product')
//הוספת שכבה של ניתוב עבור מוצרים
app.use("/product", productrouter);
//הוספת שכבת ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
app.use(morgan('dev'));
//
app.use(function(req,res,next){
    console.log("conection from ip" + req.socket.remoteAddress);
    next();
});
module.exports=app;