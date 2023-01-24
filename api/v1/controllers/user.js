const bcrypt=require('bcrypt');
module.exports={
    Register:(req,res)=>{
        let connection=global.db;//שמירת חיבור לבסיס הנתונים בתוך משתנה 
        const user=req.body.user;//שמירת שם משתמש שנשלח בתוך גוף הבקשה 
        const pass=req.body.pass;//שמירת סיסמה שנשלחה בתוך גוף הבקשה 
        const fullname=req.body.fullname;//שמירת השם המלא שנשלח בתוך גוף הבקשה 
        //כעת נצפין את הסיסמה ונשמור את הנתונים בבסיס הנתונים 
        bcrypt.hash(pass,10,(err,hashPass)=>{
            if(err)
            console.log(err.message);
            else
            {
                console.log(hashPass);
                //הוספת המשתמש לבסיס נתונים 
                let sql=`insert into t_users(user,pass,fullname) values('${user}','${hashPass}','${fullname}')`;
                console.log(sql);
                //הפעלת השאילתה והחזרת תשובה למשתמש
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
            }
            });

        
    },
    Login:(req,res)=>{
        let connection=global.db;
        const pname=req.body.pname;
        const pdesc=req.body.pdesc;
        const picname=req.body.picname;

        let sql="INSERT INTO t_useres (pname, pdesc, picname) VALUES ('" + pname + "', '" + pdesc + "', '" + picname +"')";
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


};