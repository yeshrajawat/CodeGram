const express = require('express');
const port = 8000;
const app = express();
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded());
//Cookie-parser
app.use(cookieParser());

// Adding middleware for accessing static files
app.use(express.static('./assets'))
// Adding Middleware for express-ejs-layouts
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout head
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Mongo store is used to store the session cookie in the db

app.use(session({
    name:"codegram",
    secret:"aguero",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost/codegram_development"
    })

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

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




