module.exports={
    gatallproduct:(req,res)=>{
        return res.status(200).json({msg:"all products"})
    },
    gatproductbyid:(req,res)=>{
        return res.status(200).json({msg:"product by id" + req.params.id});
    
    },
    addproduct:(req,res)=>{
        return res.status(200).json({msg:"add prodict"})
    
    },
    updateproduct:(req,res)=>{
        return res.status(200).json({msg:"updedate product by id" + req.params.id});
    
    },
    deleteproduct:(req,res)=>{
        return res.status(200).json({msg:"delete product by id" + req.params.id});
    
    },
    


};
