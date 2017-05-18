# BeezUpApi.ImportationReporting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepName** | **String** | The last step name of the importation process | [optional] 
**userId** | [**BeezUPCommonUserId**](BeezUPCommonUserId.md) |  | [optional] 
**success** | **Boolean** | Indicate if the importation succeed or not. | [optional] 
**totalProductCount** | **Number** | Indicate the total product count detected in the catalog during the importation. | [optional] 
**totalProductErrorCount** | **Number** | Indicate the total product count in error detected in the catalog during the importation. | [optional] 
**totalProductSuccessCount** | **Number** | Indicate the total product count in success in the catalog during the importation. | [optional] 
**errors** | [**[BeezUPCommonUserErrorMessage]**](BeezUPCommonUserErrorMessage.md) | Indicate the error message list related to this importation. | [optional] 
**lastUpdateUtcDate** | **Date** | Indicate the last update UTC date of the reporting. | 
**autoImported** | **Boolean** | Indicate if this importation is an auto import or not. | [optional] 
**beginUtcDate** | **Date** | Indicate the begin UTC date of this importation. | 
**endUtcDate** | **Date** | Indicate the end UTC date of this importation. | [optional] 
**inputConfigurationUrl** | **String** | Indicate the input url of this importation. | [optional] 
**steps** | **{String: Boolean}** | Indicate the steps that have been passed during the importation process | 


