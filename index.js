const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

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