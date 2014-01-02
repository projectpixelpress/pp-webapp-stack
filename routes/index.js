exports.index = function(req, res){
  res.render('index', 
  	{ 
  		title: 'Pixel Press Web App',
  		pageID: 'main',
      greeting: 'Hello, from the Pixel Press webapp generator!'
  	}
  );
};