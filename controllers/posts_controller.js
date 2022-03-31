const Post = require('../model/post');


module.exports.create = function(req,res){
    if(req.body.content != ""){
        
        
        Post.create({
            content:req.body.content,
            user:req.user._id
        },function(err,post){
            if(err){
                console.log('error in creating post'); 
                return
            }
            
            
            return res.redirect('back');
            });
        }
    }
