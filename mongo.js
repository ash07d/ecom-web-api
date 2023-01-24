const mongoose=require('mongoose');//קישור לספריית מונגוס 
const conn_str="mongodb+srv://ashley07:ashley07@cluster0.gymtnhn.mongodb.net/ecomdb";//הגדרת מחרוזת התחברות לשרת של מונגו 
mongoose.connect(conn_str);//פתיחת החיבור לבסיס הנתתונים 
//הגרת סכימה/ מבנה של אוסף / טבלה של מוצרים 
const ProductSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    Picname:String,
    },{versinonKey:false }); 
//יצירת מודל - מבנה המייצג את מבנה אוסף הנתונים 
const ProductModel=mongoose.model('product',ProductSchema);
//על המודל והדפסה ללוג את התוצאת השאילתה find הפעלת השיטה 
ProductModel.find().then((products)=>{
 console.log(products);
}); 
ProductModel.insertMany({Pid:44,Pname:'cheese',Price:66,Pdesc:'best cheese',Picname:'cheese.jpg'}).then((data)=>{
    console.log(data);
});