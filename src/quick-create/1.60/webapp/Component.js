sap.ui.define(['/sap/suite/ui/generic/template/QuickCreate/Component'],
	function (QuickCreateComponent) {
		"use strict";

		var QCComponent = QuickCreateComponent.extend("com.template.quick-create.component", {
			metadata: {
				"manifest": "json",
				properties: {
					"entitySet": {
						"type": "string",
						"defaultValue": "Products"
					}
				}
			}
		});
		return QCComponent;
	}, true);