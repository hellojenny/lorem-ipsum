import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return $.ajax({
			url: 'http://localhost:3000/fonts/liked'
		}).then(function(json) {
			return json.data;
		});
	}
});
