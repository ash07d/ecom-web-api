const mongoose=require('mongoose');// קישור לספריית מונגוס 
const ProductSchema=mongoose.Schema({//יצירת אובייקט מסוג סכימה, מבנה הנתונים המשקף את האוסף / טבלה 
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    Picname:String,
    },{versinonKey:false }); 
//יצירת מודל - מבנה המייצג את מבנה אוסף הנתונים
module.exports=mongoose.model('product',ProductSchema);