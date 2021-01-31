sap.ui.define([
		"com/template/worklist-app/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.template.worklist-app.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);