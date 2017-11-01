"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (Controller, JSONModel) {
  return Controller.extend("BabelDemo.controller.Main", {
    onInit: function onInit() {
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var aNumbers = numbers.map(function (value) {
        return {
          number: value
        };
      });
      var evenNumbers = aNumbers.filter(function (number) {
        return number.number % 2 == 0;
      });
      var oddNumbers = aNumbers.filter(function (number) {
        return Math.abs(number.number % 2) == 1;
      });
      var model = new JSONModel({
        numbers: aNumbers,
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
      });
      this.getView().setModel(model);
    }
  });
});
