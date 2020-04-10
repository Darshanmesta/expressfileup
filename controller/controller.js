const assert=require('assert')


module.exports={
    home:(req,res)=>{
        res.render('index')
    },

    upload:(req,res)=>{
        if(req.files){
           let uploadPath;

           let file=req.files.myFile;
           console.log(file)

         for(var i=0;i<file.length;i++){
             uploadPath='./uploads/'+file[i].name
             console.log(file[i].name)
             console.log(uploadPath)

             file[i].mv(uploadPath,function(err){
                 if(err){
                     assert.equal(null,err)
                     console.log("Upload Failed")
                 }

                 else{
                     console.log("Upload success")
                }
             })


        
         }
        
        }
        setTimeout(function(){
            res.redirect('/')
        },10000)
     
    }
}