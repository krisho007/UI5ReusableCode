- Add $expand to binding URL/Path

```xml
<smartTable:SmartTable id="smartTable" entitySet="PRs" beforeRebindTable=".onBeforeRebind">
```

```
onBeforeRebind: function (oEvent) {
    var mBindingParams = oEvent.getParameter("bindingParams");
    mBindingParams.parameters["expand"] = "PRConvertedValues,Plants,Vendors,PurchasingGroups";
```

- Add $select properties
```
onBeforeRebind: function (oEvent) {
   var mBindingParams = oEvent.getParameter("bindingParams");
   mBindingParams.parameters.select += ",Vendor,MultipleCurrency";
```

- Event handlers for smart table binding
```
onBeforeRebind: function (oEvent) {
	var mBindingParams = oEvent.getParameter("bindingParams");
	
	//Event handlers for the binding
	mBindingParams.events = {
		"dataReceived" : function(oEvent){

		}.bind(this)
	};
   
```
