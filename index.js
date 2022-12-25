const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const cookie=require('cookie-parser');
const db=require('./config/mongoose');
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookie());


app.use(express.static("./assets"));
// use express router

app.use('/',require('./routes/index'));

// set up the view engine

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error while running server: ${err}`);
    }
    console.log(`server is running on port: ${port} `);
    
})