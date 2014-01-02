'use strict';

var PP = (function() {
		
	var privateVariable = 'App fired!',
		docElem = document.documentElement,
		module;

	return {
		publicFunction: function() {
			console.log(privateVariable);
		},
		userAgentInit: function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		module: function () {
			Module.init();
		}
	};

})();

(function() {

	//foundation init
	$(document).foundation();

	PP.publicFunction();
	PP.userAgentInit();

	PP.module();

})();