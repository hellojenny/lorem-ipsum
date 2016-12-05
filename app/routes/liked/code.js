import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var family = params.family;
		family = family.split(' ').join('+');
		return family;
	},
});
