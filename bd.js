const bcrypt=require('bcrypt');
const pass="abc123";
const saltRounds=10;
const
hashFromDb="$2b$10$3MLmfIUeNNmld.lMma46IeRwEcvZhPC5xoROAOTOz5kO9fql1EWCW";
bcrypt.compare(pass,hashFromDb,(err,status)=>{
if(err)
console.log(err.message);
else
console.log(status);
});