//ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 

const mongoose=rsequire('mongoose');

//המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
    
    gatallproduct:(req,res)=>
    {
        const productModel=require('../models/product');//קישור למודל של אוסף המוצרים
        productModel.find().then((products)=>{
            console.log(products);
            return res.status(200).json(products);
        });
    },
    gatproductbyid:(req,res)=>
    {
        const productModel=require('../models/product');//קישור למודל של אוסף המוצרים
        productModel.findOne({Pid:req.params.id}).then((product)=>{
            console.log(product);
            return res.status(200).json(product);
        });
    },
    addproduct:(req,res)=>{
        //let connection=global.db;
        const productModel=require('../models/product');//קישור למודל של אוסף המוצרים
        productModel.insertMany(req.body).then((result)=>{
            console.log(result);
            return res.status(200).json(result);
        });
    },
        

    updateproduct:(req,res)=>{
        let Conection =global.db;
        const pname=req.body.pname;
        const pdesc=req.body.pdesc;
        const picname=req.body.picname;

        let sql="INSERT INTO t_products (pname, pdesc, picname) VALUES ('" + pname + "', '" + pdesc + "', '" + picname +"')";
        Conection.query(sql,function(err,rows,fields){
        if(err)
            {
            console.log(err.message);
            return res.status(500).json(err.message);
            }
        else
            {
            console.log("ok");
            return res.status(200).json(rows);
            }
        });
    },

    deleteproduct:(req,res)=>{ 
        let Conection =global.mysqlDb;
        Conection.query('DELETE FROM t_products WHERE pid='+ req.params.id ,(err,rows,fields)=>{
        if(err)
            {
            console.log(err.message);
            return res.status(500).json(err.message);
            }
        else
            {
            console.log("ok");
            return res.status(200).json(rows);
            }
        });
    },

};