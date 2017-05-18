# BeezUpApi.AutoImportConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**InputConfiguration**](InputConfiguration.md) |  | 
**inputConfiguredByUserId** | [**BeezUPCommonUserId**](BeezUPCommonUserId.md) |  | 
**schedulingType** | [**SchedulingType**](SchedulingType.md) |  | 
**scheduledByUserId** | [**BeezUPCommonUserId**](BeezUPCommonUserId.md) |  | [optional] 
**schedulingValue** | **[String]** | Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time. | 
**paused** | **Boolean** | Indicate if the auto import is in pause or not. | [default to false]
**pauseStatusChangedByUserId** | [**BeezUPCommonUserId**](BeezUPCommonUserId.md) |  | [optional] 
**pauseStatusChangedUtcDate** | **Date** | Indicate when the pause status has changed in UTC date. | [optional] 
**duplicateProductConfiguration** | [**DuplicateProductValueConfiguration**](DuplicateProductValueConfiguration.md) |  | 
**schedulingLocalTimeZoneName** | **String** | Indicate the time zone name of the scheduling. If the scheduling type is \&quot;Schedule\&quot; | [optional] [default to &#39;Romance Standard Time&#39;]


