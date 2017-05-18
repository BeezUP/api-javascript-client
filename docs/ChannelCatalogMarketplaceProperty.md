# BeezUpApi.ChannelCatalogMarketplaceProperty

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**BeezUPCommonInfoSummaries**](BeezUPCommonInfoSummaries.md) |  | [optional] 
**_default** | **[String]** | Indicate the default values of the property | [optional] 
**description** | **String** | Indicate the description of the property | [optional] 
**position** | **Number** | Indicate the position of the property in the display group | 
**readOnly** | **Boolean** | Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed. | [default to false]
**minLength** | **Number** | Indicates the minimum size of the property value | [optional] [default to 0]
**maxLength** | **Number** | Indicates the maximum size of the property value | [optional] 
**minItems** | **Number** | Indicates the minimum item count of the property value. | [optional] [default to 1]
**maxItems** | **Number** | Indicates the maximum item count of the property value | [optional] [default to 1]
**lovLink** | [**BeezUPCommonLOVLink3**](BeezUPCommonLOVLink3.md) |  | [optional] 
**lovRequired** | **Boolean** | Indicates if the property value must be in the list of value. | [optional] [default to false]
**required** | **Boolean** | Indicate if the property is required or not | [default to false]
**offerIdRequired** | **Number** | Indicates the offer identifier required to configure this property. | [optional] 
**visible** | **Boolean** | Indicates if this property should be displayed in the configuration page. | [default to true]
**type** | [**Type**](Type.md) |  | [optional] 
**pattern** | **String** | Channel catalog marketplace setting value format validation regular expression | [optional] 


