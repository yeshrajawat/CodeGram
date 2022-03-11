const User = require('../model/user')


module.exports.users = function(req,res){
    res.send("<h1>Hemlo Users</h1>")
}

module.exports.profile = function(req,res){
    res.render('user',{
        title:"Profile"
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Sign Up"
    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Sign In"
    });
}

//Create User 
module.exports.create = function(req,res){
//TODO Later
    if(req.body.password != req.body.confirm_password){
        

        return res.redirect('back');
    }
    else{
        User.findOne({email:req.body.email},function(err,user){
            if(err){
                console.log('error in finding user in signing up')
            }
            if(!user){
                User.create(req.body,function(err,user){
                    if(err){
                        console.log('Error in creating user whie signing up')

                    }
                     if(user){
                        console.log('successfully created');
                        return res.redirect('/users/sign-in');
                     }
                });
            
            }
            else{
                console.log('Already in database');
                res.redirect('back');
            }
        })
    }
}

//Create Session
module.exports.createSession = function(req,res){
    //TODO Later

    return res.redirect('/');


    
}