/*global QUnit*/

sap.ui.define([
	"SandboxPlatypus/SandboxPlatypus/controller/PlatypusView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PlatypusView Controller");

	QUnit.test("I should test the PlatypusView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});