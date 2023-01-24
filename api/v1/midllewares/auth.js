//function(req,res,next)
// {
//     console.log(req.url);
//     next();
// }

//שכבה זו תגדיר מערך של מכרוזות המכיל 5 כתובות IP
//let IPArr=[1.178.9,...];
//module.exports = ((req,res,next)=>)

// module.exports = ((req,res,naxt)=>{
//     const MyIP = req.socket.remoteAddress;
//     const arr = [192168,123.55,44.43,123.44, MyIP];
//     for(let i = 0; i<arr.length;i++)
//     {
//         if(arr[i]==MyIP)
//         {
//             console.log("my ip adress is: " + " " + MyIP);
//             naxt();
//         }
//     }
//     console.log("your ip is not found");
// });
const jwt=require('jsonwebtoken');
module.exports = ((req,res,naxt)=>{
    try{
        const Privatekey=process.env.PRIVATEKET;
    const token=req.headers.authorization.split(' ')[1];
    const user=jwt.verify(token,Privatekey);
    naxt();
    }
    catch(err)
    {
        console.log(err.message);
        return res.status(401).json({msg:"you are not authorized "});
    }

});
