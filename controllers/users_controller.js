module.exports.users = function(req,res){
    res.send("<h1>Hemlo Users</h1>")
}

module.exports.profile = function(req,res){
    res.render('user',{
        title:"Profile"
    });
}