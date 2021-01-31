/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/template/master-detail/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});