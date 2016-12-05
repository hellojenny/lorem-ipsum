import Ember from 'ember';

export default Ember.Controller.extend({
	init: function() {
		this._super();
	    Ember.run.schedule("afterRender",this,function() {
	    	this.send("setFont");
	    });
	},
	actions: {
		setFont: function() {
			$(".likedFont").each(function(i) {
				var font = $(this).html();
				$(this).css("font-family", font);
				WebFont.load({
					google: {
						families: [font]
					}
				});

			});
		}.on('init')
	}
});

