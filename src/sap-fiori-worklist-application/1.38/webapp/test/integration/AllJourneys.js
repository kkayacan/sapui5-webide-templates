jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/template/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/template/test/integration/pages/Worklist",
		"com/template/test/integration/pages/Object",
		"com/template/test/integration/pages/NotFound",
		"com/template/test/integration/pages/Browser",
		"com/template/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.view."
	});

	sap.ui.require([
		"com/template/test/integration/WorklistJourney",
		"com/template/test/integration/ObjectJourney",
		"com/template/test/integration/NavigationJourney",
		"com/template/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});