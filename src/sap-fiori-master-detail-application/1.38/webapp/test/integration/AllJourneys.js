jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

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
		"com/template/test/integration/MasterJourney",
		"com/template/test/integration/NavigationJourney",
		"com/template/test/integration/NotFoundJourney",
		"com/template/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});