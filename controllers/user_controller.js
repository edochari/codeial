const User=require("../models/user")

module.exports.profile=function(req,res){
  if(req.cookies.user_id){
    User.findById(req.cookies.user_id,function(err,user){
        if (user) {
               return res.render('user_profile',{
                title:'User Profile',
                user:user})
            
        }else{
            return res.redirect("/users/sign-in");
        }
    })

  }else{
    return res.redirect("/users/sign-in");
  }
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{title:'Codeial  SignIn'});
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{title:'Codeial  SignUp'});
}

module.exports.create=function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirmPassword)
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
    // User.findOne({email:req.body.email},function(err,user){
    //     if(err){console.log("Error while signing in"); return ;}

    //     if(user){
    //        if(user.password != req.body.password){
    //         return res.redirect("back");
            

    //        }
    //        res.cookie("user_id",user._id);
    //        return res.redirect("/users/profile");
    //     }else{
    //         return res.redirect("back");
    //     }
    // })

    return res.redirect('/profile');
    
}

module.exports.signout=function(req,res){
    let user_id=req.user_id;
    res.clearCookie('user_id');
    return res.redirect("/users/sign-in");
}
