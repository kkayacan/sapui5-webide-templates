sap.ui.define([
		"com/template/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.template.controller.NotFound", {

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