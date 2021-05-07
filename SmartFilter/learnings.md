
- In Value Help Dialog, to hide "Define Conditions", use filterType "single" or "multiple". 
```xml
<smartFilterBar:controlConfiguration>
    <smartFilterBar:ControlConfiguration key="Plant" displayBehaviour="descriptionOnly" filterType="multiple"/>
```

- If there are no filters in the SmartFilter, use below annotations    
```xml
<Annotations Target="ZPR_EXT_PS_MAY20_SRV.PR">
<Annotation Term="UI.SelectionFields">
	<Collection>
		<PropertyPath>AmountInCompanyCodeCurrency</PropertyPath>
		<PropertyPath>PostingDate</PropertyPath>
		<PropertyPath>CompanyCode</PropertyPath>
		<PropertyPath>CostCenter</PropertyPath>
		<PropertyPath>FiscalMonth</PropertyPath>
		<PropertyPath>YearMonth</PropertyPath>
	</Collection>
</Annotation>
</Annotations>
```

- If you want the Value Help to be a drop down (not a popup), there are two ways of achieving it. Do any ONE of these.
1. Use controlType in controlConfiguration 
```xml
<smartFilterBar:controlConfiguration>
    <smartFilterBar:ControlConfiguration key="Plant" displayBehaviour="descriptionOnly" controlType="dropDownList"/>
```
2. In the metadata 
```xml
<Property Name="ABC" Type="Edm.String" sap:value-list="fixed-values"/>
```

- Associate a Text property to an ID property
```xml
<Annotations Target="ZPR_EXT_PS_MAY20_SRV.Status/Id" xmlns="http://docs.oasis-open.org/odata/ns/edm">
	<Annotation Term="com.sap.vocabularies.Common.v1.Text" Path="Name"/>
</Annotations>
```

- Trigger a contains search instead of equals search
```xml
<mvc:View controllerName="cis.mm.controller.List" xmlns:mvc="sap.ui.core.mvc"  
	  xmlns:sfb="sap.ui.comp.smartfilterbar" xmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1">

<sfb:SmartFilterBar id="listFilterBar" app:useContainsAsDefaultFilter="true">
```
