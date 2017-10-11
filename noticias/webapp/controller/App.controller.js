sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("appnoticias.controller.App", {
		
		onInit: function() {
			var html = this.getView().byId("html");
			html.setContent('<iframe width="100%" height="95%" src="https://elcomercio.pe/"></iframe>');
		}
	});
});