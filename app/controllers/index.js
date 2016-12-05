import Ember from 'ember';

var model;

export default Ember.Controller.extend({
	init: function() {
		this._super();
	    Ember.run.schedule("afterRender",this,function() {
	    	this.send("getModel");
	    	this.send("firstFont");
	    });
	},
	actions: {
		getModel: function() {
			model = this.get("model");
			return model;
		},

		// editor functions
		firstFont: function() {
			// h1
			Ember.$("#textbox-h1").css("font-family",model[Math.floor(Math.random() * model.length)].family);
			var fam1 = Ember.$("#textbox-h1").css("font-family");
			if (fam1.charAt(0) === '"' && fam1.charAt(fam1.length -1) === '"') {
			    fam1 = fam1.substr(1,fam1.length-2);
			}
			Ember.$("#h1Name").html('Font: '+fam1);

			// p
			Ember.$("#textbox-p").css("font-family",model[Math.floor(Math.random() * model.length)].family);
			var fam2 = Ember.$("#textbox-p").css("font-family");
			if (fam2.charAt(0) === '"' && fam2.charAt(fam2.length -1) === '"') {
			    fam2 = fam2.substr(1,fam2.length-2);
			}
			Ember.$("#pName").html('Font: '+fam2);

			WebFont.load({
				google: {
					families: [fam1, fam2]
				}
			});
		}.on('init'),
		refresh: function(object, likeButton, label) {
			Ember.$("#"+object).each(function() {
				// calls all fonts and picks one at random
				Ember.$(this).css("font-family",model[Math.floor(Math.random() * model.length)].family);

				// resets like button
				Ember.$("#"+likeButton).css("visibility", "visible");
				Ember.$("#"+likeButton+"done").css("visibility", "hidden");

				//replaces label
				var fam = Ember.$(this).css("font-family");
				if (fam.charAt(0) === '"' && fam.charAt(fam.length -1) === '"') {
					    fam = fam.substr(1,fam.length-2);
				}
				Ember.$("#"+label).html('Font: '+fam);

				// var WebFont = require('webfontloader');

				WebFont.load({
				google: {
					families: [fam]
				}
			});
			});
		},
		bold: function(object) {
			Ember.$("#"+object).each(function() {
				var bold = Ember.$(this).css("font-weight");
				if (bold === "700" || bold === "bold") {
					Ember.$(this).css("font-weight", "400");
				}
				else {
					Ember.$(this).css("font-weight", "700");
				}
			});
		},
		italic: function(object) {
			Ember.$("#"+object).each(function() {
				var italic = Ember.$(this).css("font-style");
				if (italic === "italic") {
					Ember.$(this).css("font-style", "normal");
				}
				else {
					Ember.$(this).css("font-style", "italic");
				}
			});
		},
		caps: function(object) {
			Ember.$("#"+object).each(function() {
				var caps = Ember.$(this).css("text-transform");
				if (caps === "uppercase") {
					Ember.$(this).css("text-transform", "none");
				}
				else {
					Ember.$(this).css("text-transform", "uppercase");
				}
			});
		},
		likeFam: function(object, likeButton) {
			var fam = Ember.$("#"+object).css("font-family");
			if (fam.charAt(0) === '"' && fam.charAt(fam.length -1) === '"') {
				    fam = fam.substr(1,fam.length-2);
			}
			// console.log(fam);

			Ember.$.ajax({
				type: 'post',
				url: 'https://lorem-ipsum-api.herokuapp.com/fonts/liked',
				data: {
					family: fam
				}
			});

			Ember.$("#"+likeButton).css("visibility", "hidden");
			Ember.$("#"+likeButton+"done").css("visibility", "visible");
			return Ember.$("#"+object).css("font-family");
		}
	}
});
