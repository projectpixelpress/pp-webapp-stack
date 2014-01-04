var jquery = require('./vendor/jquery.min'),
	Mod = require('./modules/Module');

var PP = (function() {
		
	var privateVariable = 'App fired!',
		docElem = document.documentElement;

	return {
		publicFunction: function() {
			console.log(privateVariable);
		},
		userAgentInit: function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		}
	};

})();

(function() {

	PP.publicFunction();
	PP.userAgentInit();

	Mod.init({
		greet: "What up",
		from: "Module.js"
	});

})();