import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return $.ajax({
			url: 'https://lorem-ipsum-api.herokuapp.com/fonts'
		}).then(function(json) {
			return json.items;
		});
	},
	afterModel: function(params) {
		console.log("help (index)");
		// this.controllerFor('index').send('firstFont');
	}
});
