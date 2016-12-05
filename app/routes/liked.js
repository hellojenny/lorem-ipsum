import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		console.log("help (liked)");
	},
	model: function(params) {
		return $.ajax({
			url: 'https://lorem-ipsum-api.herokuapp.com/fonts/liked'
		}).then(function(json) {
			return json.data;
		});
	}
});
