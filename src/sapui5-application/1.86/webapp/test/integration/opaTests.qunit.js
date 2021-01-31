/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/template/sapui5-app/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});