# BeezUpApi.PublicationFeedReporting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedType** | [**FeedType**](FeedType.md) |  | 
**startUtcDate** | **Date** | The feed publication start time (UTC timezone) | 
**endUtcDate** | **Date** | The feed publication end time (UTC timezone) | [optional] 
**processingStatus** | **String** | The processing status | 
**exportedProducts** | **Number** | The product count downloaded from BeezUP Export | [optional] 
**transmittedItems** | **Number** | The item count (products or offers) sent to the marketplace | [optional] 
**publishedItems** | **Number** | The item count (products or offers) the marketplace flagged as successful | [optional] 
**publishedItemsWithWarning** | **Number** | The item count (products or offers) the marketplace flagged as successful with warnings | [optional] 
**failedItems** | **Number** | The item count (products or offers) the marketplace flagged as failed | [optional] 
**errorMessage** | **String** | The error message | [optional] 
**htmlReportUrl** | **String** | The Url for the Html Report generated | [optional] 
**htmlReportGenerationErrorMessage** | **String** | The error message if the Html Report generation failed | [optional] 
**completed** | **Boolean** | Indicates if the publication is completed or not | [optional] 


