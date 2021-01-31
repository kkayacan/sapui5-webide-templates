jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/template/crud-master-detail/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/template/crud-master-detail/test/integration/pages/App",
	"com/template/crud-master-detail/test/integration/pages/Browser",
	"com/template/crud-master-detail/test/integration/pages/Master",
	"com/template/crud-master-detail/test/integration/pages/Detail",
	"com/template/crud-master-detail/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.crud-master-detail.view."
	});

	sap.ui.require([
		"com/template/crud-master-detail/test/integration/NavigationJourneyPhone",
		"com/template/crud-master-detail/test/integration/NotFoundJourneyPhone",
		"com/template/crud-master-detail/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});