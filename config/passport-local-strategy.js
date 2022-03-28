const passport = require('passport');
const Localstrategy  = require('passport-local').Strategy;
const User= require('../model/user');


//Authentication using passport
passport.use(new Localstrategy({ 
    usernameField:'email'
    },
    function(email,password,done){
        //  Find a user and establish the identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("Error finding the user using passport");
                return done(err,false);
            }
            if(!user || user.password != password){
                
                console.log('Invalid username or password')
                return done(null,false);
            }
            else{
                return done(null,user);
            }
            

        })
    }
));

passport.serializeUser( function(user,done){
   return  done(null,user.id);
})
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log("Error while finding user");
            return done(err);
        }
        else{
            return done(null,user);
        }
    });
});

//check whether the user is authenticated 
module.exports.checkAuthentication = (req,res,next)=>{
    //If the user is signed in then pass on the request to the next function.
    if(req.isAuthenticated()){
        return next();
    }
    else{
        return res.redirect('/users/sign-in');
    }
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals 
        res.locals.user = req.user;
     }
     next();
}



