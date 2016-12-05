import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		document.title="Lorem Ipsum, Jenny's Font Project";
		// somehow import the .ttf files?
	},
	model: function(params) {
		return $.ajax({
			url: 'http://localhost:3000/fonts'
		}).then(function(json) {
			return json.items;
		});
	}
});
