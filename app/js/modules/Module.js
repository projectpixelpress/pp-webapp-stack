Module = {
	config: {
		greet: "Howdy",
		from: "Module.js"
	},

	action : function (param) {
		console.log(this.config.greet +", from " + param + "!");
	},

	init : function (options) {
		if( typeof options === "object" ) {
			this.config = options;
		}

		this.action(this.config.from);
	}

};