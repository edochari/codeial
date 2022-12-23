module.exports.profile=function(req,res){
    res.end('<h1>Users are explored</h1>');
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{title:'Codeial  SignIn'});
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{title:'Codeial  SignUp'});
}