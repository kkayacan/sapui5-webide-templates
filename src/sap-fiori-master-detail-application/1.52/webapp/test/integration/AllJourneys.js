/*global QUnit*/

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
	"com/template/master-detail/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/template/master-detail/test/integration/pages/App",
	"com/template/master-detail/test/integration/pages/Browser",
	"com/template/master-detail/test/integration/pages/Master",
	"com/template/master-detail/test/integration/pages/Detail",
	"com/template/master-detail/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.master-detail.view."
	});

	sap.ui.require([
		"com/template/master-detail/test/integration/MasterJourney",
		"com/template/master-detail/test/integration/NavigationJourney",
		"com/template/master-detail/test/integration/NotFoundJourney",
		"com/template/master-detail/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});