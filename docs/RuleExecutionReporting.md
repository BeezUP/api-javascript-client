# BeezUpApi.RuleExecutionReporting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **String** | The rule identifier | 
**ruleName** | **String** | The name of the rule | 
**startedUtcDate** | **Date** | The start utc date of the execution of the rule | [optional] 
**completedUtcDate** | **Date** | The completed utc date of the execution of the rule | [optional] 
**status** | [**RuleExecutionReportingStatus**](RuleExecutionReportingStatus.md) |  | 
**errorType** | [**RuleExecutionReportingErrorType**](RuleExecutionReportingErrorType.md) |  | [optional] 
**affectedProductCount** | **Number** | The count of affected products, active or not | [optional] 
**activeAffectedProductCount** | **Number** | The count of affected active products | [optional] 
**affectedChannelCount** | **Number** | The count of affected Channels across all products | [optional] 
**optimisationActionName** | [**OptimisationActionName**](OptimisationActionName.md) |  | [optional] 
**userId** | **String** | The userId that executed the rule if any | [optional] 
**executionSource** | [**RuleExecutionReportingExecutionSource**](RuleExecutionReportingExecutionSource.md) |  | 
**reportUrl** | **String** | The url for the excel report for this execution | [optional] 
**links** | [**RuleExecutionReportingLinks**](RuleExecutionReportingLinks.md) |  | [optional] 


