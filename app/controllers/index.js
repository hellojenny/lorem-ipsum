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
		},

		// editor functions
		firstFont: function() {
			// h1
			$("#textbox-h1").css("font-family",model[Math.floor(Math.random() * model.length)].family);
			var fam1 = $("#textbox-h1").css("font-family");
			if (fam1.charAt(0) === '"' && fam1.charAt(fam1.length -1) === '"') {
			    fam1 = fam1.substr(1,fam1.length-2);
			}
			$("#h1Name").html('Font: '+fam1);

			// p
			$("#textbox-p").css("font-family",model[Math.floor(Math.random() * model.length)].family);
			var fam2 = $("#textbox-p").css("font-family");
			if (fam2.charAt(0) === '"' && fam2.charAt(fam2.length -1) === '"') {
			    fam2 = fam2.substr(1,fam2.length-2);
			}
			$("#pName").html('Font: '+fam2);

			WebFont.load({
				google: {
					families: [fam1, fam2]
				}
			});
		}.on('init'),
		refresh: function(object, likeButton, label) {
			$("#"+object).each(function(i) {
				// calls all fonts and picks one at random
				$(this).css("font-family",model[Math.floor(Math.random() * model.length)].family);

				// resets like button
				$("#"+likeButton).css("visibility", "visible");
				$("#"+likeButton+"done").css("visibility", "hidden");

				//replaces label
				var fam = $(this).css("font-family");
				if (fam.charAt(0) === '"' && fam.charAt(fam.length -1) === '"') {
					    fam = fam.substr(1,fam.length-2);
				}
				$("#"+label).html('Font: '+fam);

				WebFont.load({
				google: {
					families: [fam]
				}
			});
			});
		},
		bold: function(object) {
			$("#"+object).each(function(i) {
				var bold = $(this).css("font-weight");
				if (bold === "700" || bold === "bold") {
					$(this).css("font-weight", "400");
				}
				else {
					$(this).css("font-weight", "700");
				}
			});
		},
		italic: function(object) {
			$("#"+object).each(function(i) {
				var italic = $(this).css("font-style");
				if (italic === "italic") {
					$(this).css("font-style", "normal");
				}
				else {
					$(this).css("font-style", "italic");
				}
			});
		},
		caps: function(object) {
			$("#"+object).each(function(i) {
				var caps = $(this).css("text-transform");
				if (caps === "uppercase") {
					$(this).css("text-transform", "none");
				}
				else {
					$(this).css("text-transform", "uppercase");
				}
			});
		},
		likeFam: function(object, likeButton) {
			var fam = $("#"+object).css("font-family");
			if (fam.charAt(0) === '"' && fam.charAt(fam.length -1) === '"') {
				    fam = fam.substr(1,fam.length-2);
			}
			// console.log(fam);

			$.ajax({
				type: 'post',
				url: 'http://localhost:3000/fonts/liked',
				data: {
					family: fam
				}
			});

			$("#"+likeButton).css("visibility", "hidden");
			$("#"+likeButton+"done").css("visibility", "visible");
			return $("#"+object).css("font-family");
		},
	}
});
