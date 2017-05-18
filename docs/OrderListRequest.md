# BeezUpApi.OrderListRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceTechnicalCodes** | [**[BeezUPCommonMarketplaceTechnicalCode]**](BeezUPCommonMarketplaceTechnicalCode.md) |  | [optional] 
**marketplaceBusinessCodes** | [**[BeezUPCommonMarketplaceBusinessCode]**](BeezUPCommonMarketplaceBusinessCode.md) |  | [optional] 
**accountIds** | [**[AccountId]**](AccountId.md) | Account id list | [optional] 
**beezUPOrderStatuses** | [**[BeezUPOrderStatus]**](BeezUPOrderStatus.md) |  | [optional] 
**dateSearchType** | [**DateSearchType**](DateSearchType.md) |  | 
**beginPeriodUtcDate** | **Date** | The begin period you want to make the search. \\ The period MUST not be greater than 30 days. The begin period MUST be lower than the end period.   | 
**endPeriodUtcDate** | **Date** | The end period of you search. \\ The period MUST not be greater than 30 days. \\ The end period MUST be greater than the begin period.  The end period MUST be lower to the current date.  | 
**orderBuyerName** | [**OrderBuyerName**](OrderBuyerName.md) |  | [optional] 
**marketplaceOrderIds** | [**[MarketplaceOrderId]**](MarketplaceOrderId.md) |  | [optional] 
**orderMerchantOrderIds** | [**[OrderMerchantOrderId]**](OrderMerchantOrderId.md) | Merchant order id list | [optional] 
**pageSize** | [**PageSize**](PageSize.md) |  | 
**pageNumber** | [**PageNumber**](PageNumber.md) |  | 


