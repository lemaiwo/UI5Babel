sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {

	return Controller.extend("BabelDemo.controller.Main", {
		onInit: function() {
			let numbers = [1,2,3,4,5,6,7,8,9];
			let aNumbers = numbers.map(value=>({number:value}));
			let evenNumbers = aNumbers.filter((number) => number.number % 2 === 0);
			let oddNumbers = aNumbers.filter((number) => Math.abs(number.number % 2) === 1);
			let model = new JSONModel({
				numbers:aNumbers,
				evenNumbers:evenNumbers,
				oddNumbers:oddNumbers
			});
			this.getView().setModel(model);
		}
	});
});