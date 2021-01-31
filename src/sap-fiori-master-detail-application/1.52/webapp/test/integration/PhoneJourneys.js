/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/template/master-detail/test/integration/NavigationJourneyPhone",
		"com/template/master-detail/test/integration/NotFoundJourneyPhone",
		"com/template/master-detail/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});