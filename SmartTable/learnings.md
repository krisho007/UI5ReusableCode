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
- Custom Columns in a smart table
```
<smartTable:SmartTable id="smartTable">
<m:Table mode="SingleSelectMaster" selectionChange=".onPressTableItem">
	<m:columns>
	    <m:Column id="PRTotal" width="120px" hAlign="End">
		<m:customData>
		    <core:CustomData key="p13nData"
			value='\{"columnKey": "PRTotal", "maxLength": "5","columnIndex":"2", "isCurrency": true, "leadingProperty": "PRTotal", 
			"sortProperty": "PRTotal", "type": "numeric", "unit": "PRTotalCurrency"}' />
		</m:customData>
		<m:Text text="{i18n>listColumnTextValue}" />
	    </m:Column>
	</m:columns>
</m:Table>                
</smartTable:SmartTable>    
```
