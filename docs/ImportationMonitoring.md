# BeezUpApi.ImportationMonitoring

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | [**BeezUPCommonUserId**](BeezUPCommonUserId.md) |  | [optional] 
**success** | **Boolean** | Indicates if the importation was successfully completed or not | 
**executionId** | [**ExecutionId**](ExecutionId.md) |  | 
**lastUpdateUtcDate** | **Date** | The last update of the reporting | 
**beginUtcDate** | **Date** | The start date of the importation | 
**errors** | [**[BeezUPCommonUserErrorMessage]**](BeezUPCommonUserErrorMessage.md) | In case of error a description will be indicated | [optional] 
**steps** | **{String: Boolean}** | Contains all steps of the importation process with a boolean. If true the step has been passed, false the step is not complete | 


