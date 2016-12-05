import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var family = params.family;
		return family;
	},
});
