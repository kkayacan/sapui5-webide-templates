/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/template/sapui5-app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/template/sapui5-app/test/integration/pages/Main",
	"com/template/sapui5-app/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.template.sapui5-app.view.",
		autoWait: true
	});
});