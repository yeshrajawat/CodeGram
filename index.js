const express = require('express');
const port = 8000;
const app = express();



app.listen()
app.listen(port,function(err){
    if(err){
        console.error(`Error in running the server:${err}`);
        return ;
    }  
    else{
        console.log(`Server is running on port ${port}`);
    }

});




