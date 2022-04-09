const Post = require('../model/post');
module.exports.home = function(req,res){
   
   Post.find({}).populate('user').exec(
    function(err,allPosts){
        if(err){
            console.error("Error in fetching contacts from db");
        }
         else{
            return res.render('home',{
                title:"Home",
                posts: allPosts
            });
         }
    }
   )
};


/*
modul.exports.actionName = function(req,res){

}




*/ 
 
