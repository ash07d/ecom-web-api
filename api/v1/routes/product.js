// קישור לספריית אקספרס
const router=require('express').Router();
const productcontroller=require('../controllers/product');
//const {addproduct,gatallproduct,gatproductbyid,updateproduct,deleteproduct}=require('../controllers/product')

// router.get("/",(req,res)=>{
//     return res.status(200).json({msg:"all products"})
// })

//הגרנו ניתוב - נקודת קצה שביטת גט לנתיב של המוצא 
router.get("/",productcontroller.gatallproduct);
//שליפת מוצר לפי קוד המוצר
router.get("/:id",productcontroller.gatproductbyid);
//עדכון מוצר לפי קוד המוצר
router.put("/:id",productcontroller.updateproduct);
//הוסף מוצר
router.post("/",productcontroller.addproduct);
//מחק מוצר לפי קוד המוצר
router.delete("/:id",productcontroller.deleteproduct);


module.exports=router;
//npm ci מתקינה כל הספריות הנדרשות בפרוייקט על פי ההגדרות בקובץ פאקט גייסון