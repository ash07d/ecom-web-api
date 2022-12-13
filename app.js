// קישור לספריית אקספרס

const express=require('express');
// יצירת מופע של  אקספרס
const app=express();
const productrouter=require('./api/v1/routes/product')

app.use("/product", productrouter)

//

module.exports=app;