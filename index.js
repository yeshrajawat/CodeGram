const express = require('express');
const port = 8000;
const app = express();
const routes = require('./routes/index');
const expressLayouts = require('express-ejs-layouts');



// Adding middleware for accessing static files
app.use(express.static('./assets'))
// Adding Middleware for express-ejs-layouts
app.use(expressLayouts);

//use express router
app.use('/',routes);


//Setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.error(`Error in running the server:${err}`);
        return ;
    }  
    else{
        console.log(`Server is running on port ${port}`);
    }

});




