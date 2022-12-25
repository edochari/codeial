module.exports.home=function(req,res){

    console.log(req.cookies);
    res.cookie('hari',25);
    return res.render('home',{
        title:'Home'
    })
}

