/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.template.library.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Library 1.38
		 *
		 * @namespace
		 * @name com.template.library
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.template.library",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"com.template.library.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return com.template.library;
		/* eslint-enable */

	}, /* bExport= */ false);