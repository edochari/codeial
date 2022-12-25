const User=require("../models/user")

module.exports.profile=function(req,res){
    res.end('<h1>Users are explored</h1>');
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{title:'Codeial  SignIn'});
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{title:'Codeial  SignUp'});
}

module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm-password)
    {
        return res.redirect("back");
    }
    
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log("Error in finding user in signing up"); return ;}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log("Error in creating user"); return ;} 
                return res.redirect("/users/sign-in"); 
            })

        }
        else{
            return res.redirect("back");
        }
    })


}

module.exports.createSession=function(req,res){
    
}