# BeezUpApi.Rule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **String** | The identifier of the rule | 
**ruleName** | **String** | The name of the rule | 
**lastExecutionStatus** | [**RuleLastExecutionStatus**](RuleLastExecutionStatus.md) |  | [optional] 
**lastExecutionUtcDate** | **Date** | The utc date of the last execution | [optional] 
**actionName** | [**OptimisationActionName**](OptimisationActionName.md) |  | 
**reportFilterId** | **String** | Report filter identifier linked to the rule | 
**position** | **Number** | Rule execution position | 
**enabled** | **Boolean** | Is the rule enabled | 
**validityStartUtcDate** | **Date** | Rule validity start utc date | [optional] 
**validityEndUtcDate** | **Date** | Rule validity end utc date | [optional] 
**links** | [**RuleLinks**](RuleLinks.md) |  | 


