module.exports.homelist = function(req,res){
    res.render('index',{title: 'Home list'})
}
module.exports.locationInfo = function(req,res){
    res.render('index',{title: 'Loc Info'})
}
module.exports.addReview = function(req,res){
    res.render('index',{title: 'Add review'})
}