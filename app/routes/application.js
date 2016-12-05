import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		document.title="Lorem Ipsum Font Emporium";
		// somehow import the .ttf files?
	}
});
