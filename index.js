const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const cookie=require('cookie-parser');
const db=require('./config/mongoose');

//session 
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookie());


app.use(express.static("./assets"));


// set up the view engine

app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'codeial',
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error while running server: ${err}`);
    }
    console.log(`server is running on port: ${port} `);
    
})