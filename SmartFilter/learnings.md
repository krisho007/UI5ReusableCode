
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
