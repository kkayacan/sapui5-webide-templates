jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/template/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/template/test/integration/pages/App",
	"com/template/test/integration/pages/Browser",
	"com/template/test/integration/pages/Master",
	"com/template/test/integration/pages/Detail",
	"com/template/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.view."
	});

	sap.ui.require([
		"com/template/test/integration/NavigationJourneyPhone",
		"com/template/test/integration/NotFoundJourneyPhone",
		"com/template/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});