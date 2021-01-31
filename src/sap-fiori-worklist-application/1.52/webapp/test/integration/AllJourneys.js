/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/template/worklist-app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/template/worklist-app/test/integration/pages/Worklist",
	"com/template/worklist-app/test/integration/pages/Object",
	"com/template/worklist-app/test/integration/pages/NotFound",
	"com/template/worklist-app/test/integration/pages/Browser",
	"com/template/worklist-app/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.worklist-app.view."
	});

	sap.ui.require([
		"com/template/worklist-app/test/integration/WorklistJourney",
		"com/template/worklist-app/test/integration/ObjectJourney",
		"com/template/worklist-app/test/integration/NavigationJourney",
		"com/template/worklist-app/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});