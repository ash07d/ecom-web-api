
module.exports={
    gatallproduct:(req,res)=>{
        let connection=global.db;
        connection.query('select * from t_product', function(err,rows,fields){
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({msg:err.message});
            }
            else
            {
                console.log("ok");
                return res.status(200).json({rows});
            }
        });
    },
    gatproductbyid:(req,res)=>{
        let connection=global.db;
        connection.query('select * from t_product where pid=?',[req.params.id], function(err,rows,fields){
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({msg:err.message});
            }
            else
            {
                console.log("ok");
                return res.status(200).json({rows});
            }
        });
    },
    addproduct:(req,res)=>{
        let connection=global.db;
        const pname=req.body.pname;
        const pdesc=req.body.pdesc;
        const picname=req.body.picname;

        let sql="INSERT INTO t_products (pname, pdesc, picname) VALUES ('" + pname + "', '" + pdesc + "', '" + picname +"')";
        console.log(sql);
        connection.query(sql,[req.params.id], function(err,rows,fields){
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({msg:err.message});
            }
            else
            {
                console.log("ok");
                return res.status(200).json({rows});
            }
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