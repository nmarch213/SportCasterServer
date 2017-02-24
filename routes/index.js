module.exports = function(app) {

  app.get('/', function(req, res){
    res.send(['this', 'sucks']);
  });

};

//some changes
