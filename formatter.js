sap.ui.define(["sap/ui/core/format/DateFormat"], function(DateFormat) {
	"use strict";
	return {
		removeLeadingZerosFromString: function(numberString) {
			return parseInt(numberString, 10);
		},
		numberOfDaysBetweenTwoDates: function(date) {
			var today = new Date();
			var finishDate = new Date(date);
			var difference = Math.round((finishDate - today) / (1000 * 60 * 60 * 24));
			var value = (difference < 0) ? "(" + (difference * -1) + ")" : difference;
			return value;
		},
		dateFormat: function(date) {
			var oDateFormat = DateFormat.getDateInstance({
				pattern: "MM/dd/yyyy"
			});
			return oDateFormat.format(new Date(date));
		}
	}
}
]);
