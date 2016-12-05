import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		// somehow load the firstFont functions
		console.log("help (index)");
	},
	model: function(params) {
		return $.ajax({
			url: 'https://lorem-ipsum-api.herokuapp.com/fonts'
		}).then(function(json) {
			return json.items;
		});
	}
});
