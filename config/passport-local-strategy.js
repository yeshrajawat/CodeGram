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
})