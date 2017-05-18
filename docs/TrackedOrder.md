# BeezUpApi.TrackedOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utcDate** | **Date** | The utc date of the order. | 
**channel** | [**BeezUPCommonChannelBasicInfo**](BeezUPCommonChannelBasicInfo.md) |  | 
**merchantOrderId** | **String** | The merchant order identifier | 
**totalAmount** | **Number** | The total amount related to the order. | 
**currencyCode** | [**BeezUPCommonCurrencyCode**](BeezUPCommonCurrencyCode.md) |  | 
**paymentValidated** | **Boolean** | Indicate if the payment of this order has been validated or not. | 
**products** | [**[TrackedOrderProduct]**](TrackedOrderProduct.md) | the product list related to this order. | 


