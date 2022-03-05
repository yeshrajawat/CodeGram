const express = require('express');
const port = 8000;
const app = express();
const routes = require('./routes/index')
//use express router
app.use('/',routes);



app.listen(port,function(err){
    if(err){
        console.error(`Error in running the server:${err}`);
        return ;
    }  
    else{
        console.log(`Server is running on port ${port}`);
    }

});




