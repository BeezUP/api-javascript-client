# BeezUpApi.BeezUPApi

All URIs are relative to *https://api.beezup.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUserAccount**](BeezUPApi.md#activateUserAccount) | **POST** /user/customer/account/activate | Activate the user account
[**autoConfigureAutoImportInterval**](BeezUPApi.md#autoConfigureAutoImportInterval) | **POST** /user/catalogs/{storeId}/autoImport/scheduling/interval | Configure Auto Import Interval
[**autoDeleteAutoImport**](BeezUPApi.md#autoDeleteAutoImport) | **DELETE** /user/catalogs/{storeId}/autoImport | Delete Auto Import
[**autoGetAutoImportConfiguration**](BeezUPApi.md#autoGetAutoImportConfiguration) | **GET** /user/catalogs/{storeId}/autoImport | Get the auto import configuration
[**autoPauseAutoImport**](BeezUPApi.md#autoPauseAutoImport) | **POST** /user/catalogs/{storeId}/autoImport/pause | Pause Auto Import
[**autoResumeAutoImport**](BeezUPApi.md#autoResumeAutoImport) | **POST** /user/catalogs/{storeId}/autoImport/resume | Resume Auto Import
[**autoScheduleAutoImport**](BeezUPApi.md#autoScheduleAutoImport) | **POST** /user/catalogs/{storeId}/autoImport/scheduling/schedules | Configure Auto Import Schedules
[**autoStartAutoImport**](BeezUPApi.md#autoStartAutoImport) | **POST** /user/catalogs/{storeId}/autoImport/start | Start Auto Import Manually
[**catalogChangeCatalogColumnUserName**](BeezUPApi.md#catalogChangeCatalogColumnUserName) | **POST** /user/catalogs/{storeId}/catalogColumns/{columnId}/rename | Change Catalog Column User Name
[**catalogChangeCustomColumnExpression**](BeezUPApi.md#catalogChangeCustomColumnExpression) | **PUT** /user/catalogs/{storeId}/customColumns/{columnId}/expression | Change custom column expression
[**catalogChangeCustomColumnUserName**](BeezUPApi.md#catalogChangeCustomColumnUserName) | **POST** /user/catalogs/{storeId}/customColumns/{columnId}/rename | Change Custom Column User Name
[**catalogComputeExpression**](BeezUPApi.md#catalogComputeExpression) | **POST** /user/catalogs/{storeId}/customColumns/computeExpression | Compute the expression for this catalog.
[**catalogDeleteCustomColumn**](BeezUPApi.md#catalogDeleteCustomColumn) | **DELETE** /user/catalogs/{storeId}/customColumns/{columnId} | Delete custom column
[**catalogGetBeezUPColumns**](BeezUPApi.md#catalogGetBeezUPColumns) | **GET** /user/catalogs/beezupColumns | Get the BeezUP columns
[**catalogGetCatalogColumns**](BeezUPApi.md#catalogGetCatalogColumns) | **GET** /user/catalogs/{storeId}/catalogColumns | Get catalog column list
[**catalogGetCategories**](BeezUPApi.md#catalogGetCategories) | **GET** /user/catalogs/{storeId}/categories | Get category list
[**catalogGetCustomColumnExpression**](BeezUPApi.md#catalogGetCustomColumnExpression) | **GET** /user/catalogs/{storeId}/customColumns/{columnId}/expression | Get the encrypted custom column expression
[**catalogGetCustomColumns**](BeezUPApi.md#catalogGetCustomColumns) | **GET** /user/catalogs/{storeId}/customColumns | Get custom column list
[**catalogGetProduct**](BeezUPApi.md#catalogGetProduct) | **GET** /user/catalogs/{storeId}/products/{productId} | Get product
[**catalogGetProducts**](BeezUPApi.md#catalogGetProducts) | **POST** /user/catalogs/{storeId}/products | Get product list
[**catalogGetRandomProducts**](BeezUPApi.md#catalogGetRandomProducts) | **GET** /user/catalogs/{storeId}/products/random | Get random product list
[**catalogSaveCustomColumn**](BeezUPApi.md#catalogSaveCustomColumn) | **PUT** /user/catalogs/{storeId}/customColumns/{columnId} | Create or replace a custom column
[**changeOrder**](BeezUPApi.md#changeOrder) | **POST** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType} | Change your marketplace Order Information (accept, ship, etc.)
[**changeOrderList**](BeezUPApi.md#changeOrderList) | **POST** /user/marketplaces/orders/batches/changeOrders/{changeOrderType} | Send a batch of operations to change your marketplace Order information (accept, ship, etc.)
[**changePassword**](BeezUPApi.md#changePassword) | **POST** /user/customer/account/changePassword | Change user password
[**clearMerchantOrderInfo**](BeezUPApi.md#clearMerchantOrderInfo) | **POST** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo | Clear an Order&#39;s merchant information
[**clearMerchantOrderInfoList**](BeezUPApi.md#clearMerchantOrderInfoList) | **POST** /user/marketplaces/orders/batches/clearMerchantOrderInfos | Send a batch of operations to clear an Order&#39;s merchant information
[**configureAutomaticTransitions**](BeezUPApi.md#configureAutomaticTransitions) | **POST** /user/marketplaces/orders/automaticTransitions | Configure new or existing automatic Order status transition
[**configureChannelCatalogCostSettings**](BeezUPApi.md#configureChannelCatalogCostSettings) | **POST** /user/channelCatalogs/{channelCatalogId}/settings/cost | Disable a channel catalog
[**configureChannelCatalogExclusionFilters**](BeezUPApi.md#configureChannelCatalogExclusionFilters) | **PUT** /user/channelCatalogs/{channelCatalogId}/exclusionFilters | Configure channel catalog exclusion filters
[**configureChannelCatalogGeneralSettings**](BeezUPApi.md#configureChannelCatalogGeneralSettings) | **POST** /user/channelCatalogs/{channelCatalogId}/settings/general | Disable a channel catalog
[**createChannelCatalog**](BeezUPApi.md#createChannelCatalog) | **POST** /user/channelCatalogs/ | Create a new channel catalog
[**createContract**](BeezUPApi.md#createContract) | **POST** /user/customer/contracts | Create a new contract
[**createRule**](BeezUPApi.md#createRule) | **POST** /user/analytics/{storeId}/rules | Rule creation
[**createStore**](BeezUPApi.md#createStore) | **POST** /user/customer/stores | Create a new store
[**deleteChannelCatalog**](BeezUPApi.md#deleteChannelCatalog) | **DELETE** /user/channelCatalogs/{channelCatalogId} | Delete the channel catalog
[**deleteChannelCatalogExportationCache**](BeezUPApi.md#deleteChannelCatalogExportationCache) | **DELETE** /user/channelCatalogs/{channelCatalogId}/exportations/cache | Delete the exportation cache
[**deleteChannelCatalogProductValueOverride**](BeezUPApi.md#deleteChannelCatalogProductValueOverride) | **DELETE** /user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides/{channelColumnId} | Delete a specific channel catalog product value override
[**deleteNextContract**](BeezUPApi.md#deleteNextContract) | **DELETE** /user/customer/contracts/next | Delete your next contract
[**deleteReportFilter**](BeezUPApi.md#deleteReportFilter) | **DELETE** /user/analytics/{storeId}/reports/filters/{reportFilterId} | Delete the report filter
[**deleteRule**](BeezUPApi.md#deleteRule) | **DELETE** /user/analytics/{storeId}/rules/{ruleId} | Delete Rule
[**deleteShare**](BeezUPApi.md#deleteShare) | **DELETE** /user/customer/stores/{storeId}/shares/{userId} | Delete a share to another user
[**deleteStore**](BeezUPApi.md#deleteStore) | **DELETE** /user/customer/stores/{storeId} | Delete a store
[**disableChannelCatalog**](BeezUPApi.md#disableChannelCatalog) | **POST** /user/channelCatalogs/{channelCatalogId}/disable | Disable a channel catalog
[**disableChannelCatalogProduct**](BeezUPApi.md#disableChannelCatalogProduct) | **POST** /user/channelCatalogs/{channelCatalogId}/products/{productId}/disable | Disable channel catalog product
[**disableRule**](BeezUPApi.md#disableRule) | **POST** /user/analytics/{storeId}/rules/{ruleId}/disable | Disable rule
[**enableChannelCatalog**](BeezUPApi.md#enableChannelCatalog) | **POST** /user/channelCatalogs/{channelCatalogId}/enable | Enable a channel catalog
[**enableRule**](BeezUPApi.md#enableRule) | **POST** /user/analytics/{storeId}/rules/{ruleId}/enable | Enable rule
[**exportOrders**](BeezUPApi.md#exportOrders) | **POST** /user/marketplaces/orders/exportations | Request a new Order report exportation to be generated
[**exportStoreReportByCategory**](BeezUPApi.md#exportStoreReportByCategory) | **POST** /user/analytics/{storeId}/reports/bycategory/export | Export the report by category
[**exportStoreReportByChannel**](BeezUPApi.md#exportStoreReportByChannel) | **POST** /user/analytics/{storeId}/reports/bychannel/export | Export the report by channel
[**exportStoreReportByProduct**](BeezUPApi.md#exportStoreReportByProduct) | **POST** /user/analytics/{storeId}/reports/byproduct/export | Export the report by product
[**getAutomaticTransitions**](BeezUPApi.md#getAutomaticTransitions) | **GET** /user/marketplaces/orders/automaticTransitions | Get list of configured automatic Order status transitions
[**getAvailableChannels**](BeezUPApi.md#getAvailableChannels) | **GET** /user/channels/ | List all available channel for this store
[**getBillingPeriods**](BeezUPApi.md#getBillingPeriods) | **GET** /user/customer/billingPeriods | Get billing periods conditions
[**getChannelCatalog**](BeezUPApi.md#getChannelCatalog) | **GET** /user/channelCatalogs/{channelCatalogId} | Get the channel catalog information
[**getChannelCatalogCategories**](BeezUPApi.md#getChannelCatalogCategories) | **GET** /user/channelCatalogs/{channelCatalogId}/categoryMappings | Get channel catalog categories
[**getChannelCatalogExclusionFilterOperators**](BeezUPApi.md#getChannelCatalogExclusionFilterOperators) | **GET** /user/channelCatalogs/exclusionFilterOperators | Get channel catalog exclusion filter operators
[**getChannelCatalogExportationCacheInfo**](BeezUPApi.md#getChannelCatalogExportationCacheInfo) | **GET** /user/channelCatalogs/{channelCatalogId}/exportations/cache | Get the exportation cache information
[**getChannelCatalogExportationHistory**](BeezUPApi.md#getChannelCatalogExportationHistory) | **GET** /user/channelCatalogs/{channelCatalogId}/exportations/history | Get the exportation history
[**getChannelCatalogMarketplaceProperties**](BeezUPApi.md#getChannelCatalogMarketplaceProperties) | **GET** /user/marketplaces/channelcatalogs/{channelCatalogId}/properties | Get the marketplace properties for a channel catalog
[**getChannelCatalogMarketplaceSettings**](BeezUPApi.md#getChannelCatalogMarketplaceSettings) | **GET** /user/marketplaces/channelcatalogs/{channelCatalogId}/settings | Get the marketplace settings for a channel catalog
[**getChannelCatalogProductByChannelCatalog**](BeezUPApi.md#getChannelCatalogProductByChannelCatalog) | **POST** /user/channelCatalogs/products/{productId} | Get channel catalog products related to these channel catalogs
[**getChannelCatalogProductInfo**](BeezUPApi.md#getChannelCatalogProductInfo) | **GET** /user/channelCatalogs/{channelCatalogId}/products/{productId} | Get channel catalog product information
[**getChannelCatalogProductInfoList**](BeezUPApi.md#getChannelCatalogProductInfoList) | **POST** /user/channelCatalogs/{channelCatalogId}/products | Get channel catalog product information list
[**getChannelCatalogs**](BeezUPApi.md#getChannelCatalogs) | **GET** /user/channelCatalogs/ | List all your current channel catalogs
[**getChannelCategories**](BeezUPApi.md#getChannelCategories) | **GET** /user/channels/{channelId}/categories | Get channel categories
[**getChannelColumns**](BeezUPApi.md#getChannelColumns) | **POST** /user/channels/{channelId}/columns | Get channel columns
[**getChannelInfo**](BeezUPApi.md#getChannelInfo) | **GET** /user/channels/{channelId} | Get channel information
[**getChannels**](BeezUPApi.md#getChannels) | **GET** /public/channels/{countryIsoCode} | The channel list for one country
[**getChannelsIndex**](BeezUPApi.md#getChannelsIndex) | **GET** /public/channels/ | Get public channel index
[**getContracts**](BeezUPApi.md#getContracts) | **GET** /user/customer/contracts | Get contract list
[**getCreditCardInfo**](BeezUPApi.md#getCreditCardInfo) | **GET** /user/customer/account/creditCardInfo | Get credit card information
[**getFriendInfo**](BeezUPApi.md#getFriendInfo) | **GET** /user/customer/friends/{userId} | Get friend information
[**getInvoices**](BeezUPApi.md#getInvoices) | **GET** /user/customer/invoices | Get all your invoices
[**getMarketplaceAccountStores**](BeezUPApi.md#getMarketplaceAccountStores) | **GET** /user/marketplaces/channelcatalogs/ | Get  you marketplace channel catalog list
[**getMarketplaceAccountsSynchronization**](BeezUPApi.md#getMarketplaceAccountsSynchronization) | **GET** /user/marketplaces/orders/status | Get current synchronization status between your marketplaces and BeezUP accounts
[**getOffer**](BeezUPApi.md#getOffer) | **POST** /user/customer/offers | Get offer pricing
[**getOrder**](BeezUPApi.md#getOrder) | **GET** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId} | Get full Order and Order Item(s) properties
[**getOrderExportations**](BeezUPApi.md#getOrderExportations) | **GET** /user/marketplaces/orders/exportations | Get a paginated list of Order report exportations
[**getOrderHistory**](BeezUPApi.md#getOrderHistory) | **GET** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history | Get an Order&#39;s harvest and change history
[**getOrderIndex**](BeezUPApi.md#getOrderIndex) | **GET** /user/marketplaces/orders/ | Get all actions you can do on the order API
[**getOrderListFull**](BeezUPApi.md#getOrderListFull) | **POST** /user/marketplaces/orders/list/full | Get a paginated list of all Orders with all Order and Order Item(s) properties
[**getOrderListLight**](BeezUPApi.md#getOrderListLight) | **POST** /user/marketplaces/orders/list/light | Get a paginated list of all Orders without details
[**getProfilePictureInfo**](BeezUPApi.md#getProfilePictureInfo) | **GET** /user/customer/account/profilePictureInfo | Get profile picture information
[**getPublicListOfValues**](BeezUPApi.md#getPublicListOfValues) | **GET** /public/lov/{listName} | Get the list of values related to this list name
[**getPublicLovIndex**](BeezUPApi.md#getPublicLovIndex) | **GET** /public/lov/ | Get all list names
[**getPublications**](BeezUPApi.md#getPublications) | **GET** /user/marketplaces/channelcatalogs/publications/{marketplaceTechnicalCode}/{accountId}/history | Fetch the publication history for an account, sorted by descending start date
[**getReportFilter**](BeezUPApi.md#getReportFilter) | **GET** /user/analytics/{storeId}/reports/filters/{reportFilterId} | Get the report filter description
[**getReportFilters**](BeezUPApi.md#getReportFilters) | **GET** /user/analytics/{storeId}/reports/filters | Get report filter list for the given store
[**getRights**](BeezUPApi.md#getRights) | **POST** /user/customer/stores/{storeId}/rights | Get store&#39;s rights
[**getRule**](BeezUPApi.md#getRule) | **GET** /user/analytics/{storeId}/rules/{ruleId} | Gets the rule
[**getRules**](BeezUPApi.md#getRules) | **GET** /user/analytics/{storeId}/rules | Gets the list of rules for a given store
[**getRulesExecutions**](BeezUPApi.md#getRulesExecutions) | **GET** /user/analytics/{storeId}/rules/executions | Get the rules execution history
[**getShares**](BeezUPApi.md#getShares) | **GET** /user/customer/stores/{storeId}/shares | Get shares related to this store
[**getStandardOffers**](BeezUPApi.md#getStandardOffers) | **GET** /user/customer/offers | Get all standard offers
[**getStore**](BeezUPApi.md#getStore) | **GET** /user/customer/stores/{storeId} | Get store&#39;s information
[**getStoreAlerts**](BeezUPApi.md#getStoreAlerts) | **GET** /user/customer/stores/{storeId}/alerts | Get store&#39;s alerts
[**getStoreReportByCategory**](BeezUPApi.md#getStoreReportByCategory) | **POST** /user/analytics/{storeId}/reports/bycategory | Get the report by category
[**getStoreReportByChannel**](BeezUPApi.md#getStoreReportByChannel) | **POST** /user/analytics/{storeId}/reports/bychannel | Get the report by channel
[**getStoreReportByDay**](BeezUPApi.md#getStoreReportByDay) | **POST** /user/analytics/{storeId}/reports/byday | Get the report by day
[**getStoreReportByDayExport**](BeezUPApi.md#getStoreReportByDayExport) | **POST** /user/analytics/{storeId}/reports/byday/export | Get the report by day
[**getStoreReportByProduct**](BeezUPApi.md#getStoreReportByProduct) | **POST** /user/analytics/{storeId}/reports/byproduct | Get the report by product
[**getStoreTrackedClicks**](BeezUPApi.md#getStoreTrackedClicks) | **GET** /user/analytics/{storeId}/tracking/clicks | Get the latest clicks tracked
[**getStoreTrackedExternalOrders**](BeezUPApi.md#getStoreTrackedExternalOrders) | **GET** /user/analytics/{storeId}/tracking/externalorders | Get the latest external orders tracked
[**getStoreTrackedOrders**](BeezUPApi.md#getStoreTrackedOrders) | **GET** /user/analytics/{storeId}/tracking/orders | Get the latest orders tracked
[**getStoreTrackingStatus**](BeezUPApi.md#getStoreTrackingStatus) | **GET** /user/analytics/{storeId}/tracking/status | Get store tracking synchronization status
[**getStores**](BeezUPApi.md#getStores) | **GET** /user/customer/stores | Get store list
[**getTrackingStatus**](BeezUPApi.md#getTrackingStatus) | **GET** /user/analytics/tracking/status | Display the synchronization status of the clicks and orders
[**getUserAccountInfo**](BeezUPApi.md#getUserAccountInfo) | **GET** /user/customer/account | Get user account information
[**getUserListOfValues**](BeezUPApi.md#getUserListOfValues) | **GET** /user/lov/{listName} | Get the list of values related to this list name
[**getUserLovIndex**](BeezUPApi.md#getUserLovIndex) | **GET** /user/lov/ | Get all list names
[**harvestAll**](BeezUPApi.md#harvestAll) | **POST** /user/marketplaces/orders/harvest | Send harvest request to all your marketplaces
[**harvestOrder**](BeezUPApi.md#harvestOrder) | **POST** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest | Send harvest request for a single Order
[**headOrder**](BeezUPApi.md#headOrder) | **HEAD** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId} | Get the meta information about the order (ETag, Last-Modified)
[**importationActivateAutoImport**](BeezUPApi.md#importationActivateAutoImport) | **POST** /user/catalogs/{storeId}/autoImport | Activate the auto importation of the last successful manual catalog importation.
[**importationCancel**](BeezUPApi.md#importationCancel) | **DELETE** /user/catalogs/{storeId}/importations/{executionId} | Cancel importation
[**importationCommit**](BeezUPApi.md#importationCommit) | **POST** /user/catalogs/{storeId}/importations/{executionId}/commit | Commit Importation
[**importationCommitColumns**](BeezUPApi.md#importationCommitColumns) | **POST** /user/catalogs/{storeId}/importations/{executionId}/commitColumns | Commit columns
[**importationConfigureCatalogColumn**](BeezUPApi.md#importationConfigureCatalogColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId} | Configure catalog column
[**importationConfigureRemainingCatalogColumns**](BeezUPApi.md#importationConfigureRemainingCatalogColumns) | **POST** /user/catalogs/{storeId}/importations/{executionId}/configureRemainingCatalogColumns | Configure remaining catalog columns
[**importationDeleteCustomColumn**](BeezUPApi.md#importationDeleteCustomColumn) | **DELETE** /user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId} | Delete Custom Column
[**importationGetCustomColumnExpression**](BeezUPApi.md#importationGetCustomColumnExpression) | **GET** /user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/expression | Get the encrypted custom column expression in this importation
[**importationGetCustomColumns**](BeezUPApi.md#importationGetCustomColumns) | **GET** /user/catalogs/{storeId}/importations/{executionId}/customColumns | Get custom columns currently place in this importation
[**importationGetDetectedCatalogColumns**](BeezUPApi.md#importationGetDetectedCatalogColumns) | **GET** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns | Get detected catalog columns during this importation.
[**importationGetImportationMonitoring**](BeezUPApi.md#importationGetImportationMonitoring) | **GET** /user/catalogs/{storeId}/importations/{executionId} | Get the importation status
[**importationGetManualUpdateLastInputConfig**](BeezUPApi.md#importationGetManualUpdateLastInputConfig) | **GET** /user/catalogs/{storeId}/inputConfiguration | Get the last input configuration
[**importationGetProductSample**](BeezUPApi.md#importationGetProductSample) | **GET** /user/catalogs/{storeId}/importations/{executionId}/productSamples/{productSampleIndex} | Get the product sample related to this importation with all columns (catalog and custom)
[**importationGetProductSampleCustomColumnValue**](BeezUPApi.md#importationGetProductSampleCustomColumnValue) | **GET** /user/catalogs/{storeId}/importations/{executionId}/productSamples/{productSampleIndex}/customColumns/{columnId} | Get product sample custom column value related to this importation.
[**importationGetReportings**](BeezUPApi.md#importationGetReportings) | **GET** /user/catalogs/{storeId}/importations | Get the latest catalog importation reporting
[**importationIgnoreColumn**](BeezUPApi.md#importationIgnoreColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/ignore | Ignore Column
[**importationMapCatalogColumn**](BeezUPApi.md#importationMapCatalogColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/map | Map catalog column to a BeezUP column
[**importationMapCustomColumn**](BeezUPApi.md#importationMapCustomColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/map | Map custom column to a BeezUP column
[**importationReattendColumn**](BeezUPApi.md#importationReattendColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/reattend | Reattend Column
[**importationSaveCustomColumn**](BeezUPApi.md#importationSaveCustomColumn) | **PUT** /user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId} | Create or replace a custom column
[**importationStartManualUpdate**](BeezUPApi.md#importationStartManualUpdate) | **POST** /user/catalogs/{storeId}/importations | Start Manual Import
[**importationTechnicalProgression**](BeezUPApi.md#importationTechnicalProgression) | **GET** /user/catalogs/{storeId}/importations/{executionId}/technicalProgression | Get technical progression
[**importationUnmapCatalogColumn**](BeezUPApi.md#importationUnmapCatalogColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/catalogColumns/{columnId}/unmap | Unmap catalog column
[**importationUnmapCustomColumn**](BeezUPApi.md#importationUnmapCustomColumn) | **POST** /user/catalogs/{storeId}/importations/{executionId}/customColumns/{columnId}/unmap | Unmap custom column
[**login**](BeezUPApi.md#login) | **POST** /public/security/login | Login
[**logout**](BeezUPApi.md#logout) | **POST** /user/customer/security/logout | Log out the current user from go2
[**lostPassword**](BeezUPApi.md#lostPassword) | **POST** /public/security/lostpassword | Lost password
[**mapChannelCatalogCategory**](BeezUPApi.md#mapChannelCatalogCategory) | **POST** /user/channelCatalogs/{channelCatalogId}/categoryMappings/map | Map channel catalog category
[**mapChannelCatalogColumns**](BeezUPApi.md#mapChannelCatalogColumns) | **PUT** /user/channelCatalogs/{channelCatalogId}/columnMappings | Configure channel catalog column mappings
[**moveDownRule**](BeezUPApi.md#moveDownRule) | **POST** /user/analytics/{storeId}/rules/{ruleId}/movedown | Move the rule down
[**moveUpRule**](BeezUPApi.md#moveUpRule) | **POST** /user/analytics/{storeId}/rules/{ruleId}/moveup | Move the rule up
[**optimise**](BeezUPApi.md#optimise) | **POST** /user/analytics/{storeId}/optimisations/{actionName} | Optimise products
[**optimiseByCategory**](BeezUPApi.md#optimiseByCategory) | **POST** /user/analytics/{storeId}/optimisations/bycategory/{catalogCategoryId}/{actionName} | Optimise products&#39;s category
[**optimiseByChannel**](BeezUPApi.md#optimiseByChannel) | **POST** /user/analytics/{storeId}/optimisations/bychannel/{channelId}/{actionName} | Optimise products&#39;s category
[**optimiseByProduct**](BeezUPApi.md#optimiseByProduct) | **POST** /user/analytics/{storeId}/optimisations/byproduct/{productId}/{actionName} | Optimise products
[**overrideChannelCatalogProductOverrides**](BeezUPApi.md#overrideChannelCatalogProductOverrides) | **PUT** /user/channelCatalogs/{channelCatalogId}/products/{productId}/overrides | Override channel catalog product values
[**reactivateCurrentContract**](BeezUPApi.md#reactivateCurrentContract) | **POST** /user/customer/contracts/current/reenableAutoRenewal | Reactivate your terminated contract.
[**reenableChannelCatalogProduct**](BeezUPApi.md#reenableChannelCatalogProduct) | **POST** /user/channelCatalogs/{channelCatalogId}/products/{productId}/reenable | Reenable channel catalog product
[**register**](BeezUPApi.md#register) | **POST** /public/security/register | User Registration
[**resendEmailActivation**](BeezUPApi.md#resendEmailActivation) | **POST** /user/customer/account/resendEmailActivation | Resend email activation
[**runRule**](BeezUPApi.md#runRule) | **POST** /user/analytics/{storeId}/rules/{ruleId}/run | Run rule
[**runRules**](BeezUPApi.md#runRules) | **POST** /user/analytics/{storeId}/rules/run | Run all rules for this store
[**saveCompanyInfo**](BeezUPApi.md#saveCompanyInfo) | **PUT** /user/customer/account/companyInfo | Change company information
[**saveCreditCardInfo**](BeezUPApi.md#saveCreditCardInfo) | **PUT** /user/customer/account/creditCardInfo | Save user credit card info
[**savePersonalInfo**](BeezUPApi.md#savePersonalInfo) | **PUT** /user/customer/account/personalInfo | Save user personal information
[**saveProfilePictureInfo**](BeezUPApi.md#saveProfilePictureInfo) | **PUT** /user/customer/account/profilePictureInfo | Change user picture information
[**saveReportFilter**](BeezUPApi.md#saveReportFilter) | **PUT** /user/analytics/{storeId}/reports/filters/{reportFilterId} | Save the report filter
[**saveStoreAlert**](BeezUPApi.md#saveStoreAlert) | **PUT** /user/customer/stores/{storeId}/alerts/{alertId} | Save store alert
[**setChannelCatalogMarketplaceSettings**](BeezUPApi.md#setChannelCatalogMarketplaceSettings) | **POST** /user/marketplaces/channelcatalogs/{channelCatalogId}/settings | Save new marketplace settings for a channel catalog
[**setMerchantOrderInfo**](BeezUPApi.md#setMerchantOrderInfo) | **POST** /user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo | Set an Order&#39;s merchant information
[**setMerchantOrderInfoList**](BeezUPApi.md#setMerchantOrderInfoList) | **POST** /user/marketplaces/orders/batches/setMerchantOrderInfos | Send a batch of operations to set an Order&#39;s merchant information
[**share**](BeezUPApi.md#share) | **POST** /user/customer/stores/{storeId}/shares | Share a store to another user
[**terminateCurrentContract**](BeezUPApi.md#terminateCurrentContract) | **POST** /user/customer/contracts/current/disableAutoRenewal | Schedule termination of your current contract at the end of the commitment.
[**unmapChannelCatalogCategory**](BeezUPApi.md#unmapChannelCatalogCategory) | **POST** /user/channelCatalogs/{channelCatalogId}/categoryMappings/unmap | Unmap channel catalog category
[**updateRule**](BeezUPApi.md#updateRule) | **PATCH** /user/analytics/{storeId}/rules/{ruleId} | Update Rule
[**updateStore**](BeezUPApi.md#updateStore) | **PATCH** /user/customer/stores/{storeId} | Update some store&#39;s information.
[**userCustomerGet**](BeezUPApi.md#userCustomerGet) | **GET** /user/customer/ | The index of all operations and LOV


<a name="activateUserAccount"></a>
# **activateUserAccount**
> activateUserAccount(emailActivationId)

Activate the user account

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var emailActivationId = "emailActivationId_example"; // String | The email activation id received by email.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.activateUserAccount(emailActivationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailActivationId** | **String**| The email activation id received by email. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoConfigureAutoImportInterval"></a>
# **autoConfigureAutoImportInterval**
> autoConfigureAutoImportInterval(storeId, request)

Configure Auto Import Interval

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ConfigureAutoImportIntervalRequest(); // ConfigureAutoImportIntervalRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.autoConfigureAutoImportInterval(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ConfigureAutoImportIntervalRequest**](ConfigureAutoImportIntervalRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoDeleteAutoImport"></a>
# **autoDeleteAutoImport**
> autoDeleteAutoImport(storeId, )

Delete Auto Import

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.autoDeleteAutoImport(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoGetAutoImportConfiguration"></a>
# **autoGetAutoImportConfiguration**
> AutoImportConfiguration autoGetAutoImportConfiguration(storeId, )

Get the auto import configuration

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.autoGetAutoImportConfiguration(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**AutoImportConfiguration**](AutoImportConfiguration.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoPauseAutoImport"></a>
# **autoPauseAutoImport**
> autoPauseAutoImport(storeId, )

Pause Auto Import

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.autoPauseAutoImport(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoResumeAutoImport"></a>
# **autoResumeAutoImport**
> autoResumeAutoImport(storeId, )

Resume Auto Import

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.autoResumeAutoImport(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoScheduleAutoImport"></a>
# **autoScheduleAutoImport**
> autoScheduleAutoImport(storeId, request)

Configure Auto Import Schedules

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ScheduleAutoImportRequest(); // ScheduleAutoImportRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.autoScheduleAutoImport(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ScheduleAutoImportRequest**](ScheduleAutoImportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autoStartAutoImport"></a>
# **autoStartAutoImport**
> LinksImportationGetImportationMonitoringLink autoStartAutoImport(storeId, )

Start Auto Import Manually

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.autoStartAutoImport(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**LinksImportationGetImportationMonitoringLink**](LinksImportationGetImportationMonitoringLink.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogChangeCatalogColumnUserName"></a>
# **catalogChangeCatalogColumnUserName**
> catalogChangeCatalogColumnUserName(storeId, columnIdrequest)

Change Catalog Column User Name

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The catalog column identifier

var request = new BeezUpApi.ChangeUserColumnNameRequest(); // ChangeUserColumnNameRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.catalogChangeCatalogColumnUserName(storeId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The catalog column identifier | 
 **request** | [**ChangeUserColumnNameRequest**](ChangeUserColumnNameRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogChangeCustomColumnExpression"></a>
# **catalogChangeCustomColumnExpression**
> catalogChangeCustomColumnExpression(storeId, columnIdrequest)

Change custom column expression

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.ChangeCustomColumnExpressionRequest(); // ChangeCustomColumnExpressionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.catalogChangeCustomColumnExpression(storeId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**ChangeCustomColumnExpressionRequest**](ChangeCustomColumnExpressionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogChangeCustomColumnUserName"></a>
# **catalogChangeCustomColumnUserName**
> catalogChangeCustomColumnUserName(storeId, columnIdrequest)

Change Custom Column User Name

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.ChangeUserColumnNameRequest(); // ChangeUserColumnNameRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.catalogChangeCustomColumnUserName(storeId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**ChangeUserColumnNameRequest**](ChangeUserColumnNameRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogComputeExpression"></a>
# **catalogComputeExpression**
> &#39;String&#39; catalogComputeExpression(storeId, request)

Compute the expression for this catalog.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ComputeExpressionRequest(); // ComputeExpressionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogComputeExpression(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ComputeExpressionRequest**](ComputeExpressionRequest.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogDeleteCustomColumn"></a>
# **catalogDeleteCustomColumn**
> catalogDeleteCustomColumn(storeId, columnId)

Delete custom column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.catalogDeleteCustomColumn(storeId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The custom column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetBeezUPColumns"></a>
# **catalogGetBeezUPColumns**
> [BeezUPColumnConfiguration] catalogGetBeezUPColumns()

Get the BeezUP columns

Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetBeezUPColumns(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BeezUPColumnConfiguration]**](BeezUPColumnConfiguration.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetCatalogColumns"></a>
# **catalogGetCatalogColumns**
> CatalogColumns catalogGetCatalogColumns(storeId, )

Get catalog column list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetCatalogColumns(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**CatalogColumns**](CatalogColumns.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetCategories"></a>
# **catalogGetCategories**
> Categories catalogGetCategories(storeId, acceptEncoding)

Get category list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var acceptEncoding = ["acceptEncoding_example"]; // [String] | Indicates that the client accepts that the response will be compressed to reduce traffic size.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetCategories(storeId, acceptEncoding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **acceptEncoding** | [**[String]**](String.md)| Indicates that the client accepts that the response will be compressed to reduce traffic size. | 

### Return type

[**Categories**](Categories.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetCustomColumnExpression"></a>
# **catalogGetCustomColumnExpression**
> &#39;String&#39; catalogGetCustomColumnExpression(storeId, columnId)

Get the encrypted custom column expression

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetCustomColumnExpression(storeId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The custom column identifier | 

### Return type

**&#39;String&#39;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetCustomColumns"></a>
# **catalogGetCustomColumns**
> CustomColumns catalogGetCustomColumns(storeId, )

Get custom column list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetCustomColumns(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**CustomColumns**](CustomColumns.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetProduct"></a>
# **catalogGetProduct**
> Product catalogGetProduct(storeId, productId)

Get product

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var productId = "productId_example"; // String | The product identifier you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetProduct(storeId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **productId** | **String**| The product identifier you want to get | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetProducts"></a>
# **catalogGetProducts**
> Products catalogGetProducts(storeId, , opts)

Get product list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var opts = { 
  'request': new BeezUpApi.GetProductsRequest() // GetProductsRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetProducts(storeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**GetProductsRequest**](GetProductsRequest.md)|  | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogGetRandomProducts"></a>
# **catalogGetRandomProducts**
> Products catalogGetRandomProducts(storeId, , opts)

Get random product list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var opts = { 
  'count': 100 // Number | The count of random product you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogGetRandomProducts(storeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **count** | **Number**| The count of random product you want to get | [optional] [default to 100]

### Return type

[**Products**](Products.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogSaveCustomColumn"></a>
# **catalogSaveCustomColumn**
> catalogSaveCustomColumn(storeId, columnIdrequest)

Create or replace a custom column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.CreateCustomColumnRequest(); // CreateCustomColumnRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.catalogSaveCustomColumn(storeId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**CreateCustomColumnRequest**](CreateCustomColumnRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changeOrder"></a>
# **changeOrder**
> changeOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, changeOrderType, userName, request, ifMatch, opts)

Change your marketplace Order Information (accept, ship, etc.)

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier

var changeOrderType = "changeOrderType_example"; // String | The Order change type

var userName = "userName_example"; // String | Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.

var request = new BeezUpApi.ChangeOrderRequest(); // ChangeOrderRequest | 

var ifMatch = "ifMatch_example"; // String | ETag value to identify the last known version of requested resource.\\ To ensure that you are making a change on the lastest version of the resource.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 

var opts = { 
  'testMode': false // Boolean | If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, changeOrderType, userName, request, ifMatch, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 
 **changeOrderType** | **String**| The Order change type | 
 **userName** | **String**| Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application&#39;s user login. | 
 **request** | [**ChangeOrderRequest**](ChangeOrderRequest.md)|  | 
 **ifMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To ensure that you are making a change on the lastest version of the resource.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | 
 **testMode** | **Boolean**| If true, the operation will be not be sent to marketplace. But the validation will be taken in account. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changeOrderList"></a>
# **changeOrderList**
> BatchOrderOperationResponse changeOrderList(changeOrderType, userName, request, opts)

Send a batch of operations to change your marketplace Order information (accept, ship, etc.)

The purpose of this operation is to reduce the amount of request to the API.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var changeOrderType = "changeOrderType_example"; // String | The Order change type

var userName = "userName_example"; // String | Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.

var request = new BeezUpApi.ChangeOrderListRequest(); // ChangeOrderListRequest | 

var opts = { 
  'testMode': false // Boolean | If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeOrderList(changeOrderType, userName, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeOrderType** | **String**| The Order change type | 
 **userName** | **String**| Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application&#39;s user login. | 
 **request** | [**ChangeOrderListRequest**](ChangeOrderListRequest.md)|  | 
 **testMode** | **Boolean**| If true, the operation will be not be sent to marketplace. But the validation will be taken in account. | [optional] [default to false]

### Return type

[**BatchOrderOperationResponse**](BatchOrderOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changePassword"></a>
# **changePassword**
> changePassword(request)

Change user password

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.ChangePasswordRequest(); // ChangePasswordRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePassword(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ChangePasswordRequest**](ChangePasswordRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearMerchantOrderInfo"></a>
# **clearMerchantOrderInfo**
> clearMerchantOrderInfo(marketplaceTechnicalCode, accountId, beezUPOrderId, )

Clear an Order&#39;s merchant information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clearMerchantOrderInfo(marketplaceTechnicalCode, accountId, beezUPOrderId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearMerchantOrderInfoList"></a>
# **clearMerchantOrderInfoList**
> BatchOrderOperationResponse clearMerchantOrderInfoList(request)

Send a batch of operations to clear an Order&#39;s merchant information

The purpose of this operation is to reduce the amount of request to the API.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.ClearMerchantOrderInfoListRequest(); // ClearMerchantOrderInfoListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clearMerchantOrderInfoList(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ClearMerchantOrderInfoListRequest**](ClearMerchantOrderInfoListRequest.md)|  | 

### Return type

[**BatchOrderOperationResponse**](BatchOrderOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configureAutomaticTransitions"></a>
# **configureAutomaticTransitions**
> configureAutomaticTransitions(request)

Configure new or existing automatic Order status transition

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.ConfigureAutomaticTransitionRequest(); // ConfigureAutomaticTransitionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureAutomaticTransitions(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ConfigureAutomaticTransitionRequest**](ConfigureAutomaticTransitionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configureChannelCatalogCostSettings"></a>
# **configureChannelCatalogCostSettings**
> configureChannelCatalogCostSettings(channelCatalogId, request)

Disable a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.CostSettings(); // CostSettings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureChannelCatalogCostSettings(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**CostSettings**](CostSettings.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configureChannelCatalogExclusionFilters"></a>
# **configureChannelCatalogExclusionFilters**
> configureChannelCatalogExclusionFilters(channelCatalogId, request)

Configure channel catalog exclusion filters

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.ExclusionFilters(); // ExclusionFilters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureChannelCatalogExclusionFilters(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**ExclusionFilters**](ExclusionFilters.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configureChannelCatalogGeneralSettings"></a>
# **configureChannelCatalogGeneralSettings**
> configureChannelCatalogGeneralSettings(channelCatalogId, request)

Disable a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.GeneralSettings(); // GeneralSettings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configureChannelCatalogGeneralSettings(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**GeneralSettings**](GeneralSettings.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChannelCatalog"></a>
# **createChannelCatalog**
> [BeezUPCommonLink2] createChannelCatalog(request)

Create a new channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.CreateChannelCatalogRequest(); // CreateChannelCatalogRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChannelCatalog(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateChannelCatalogRequest**](CreateChannelCatalogRequest.md)|  | 

### Return type

[**[BeezUPCommonLink2]**](BeezUPCommonLink2.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContract"></a>
# **createContract**
> BeezUPCommonInfoSummaries createContract(request)

Create a new contract

Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.CreateContract(); // CreateContract | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContract(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateContract**](CreateContract.md)|  | 

### Return type

[**BeezUPCommonInfoSummaries**](BeezUPCommonInfoSummaries.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRule"></a>
# **createRule**
> createRule(storeId, request)

Rule creation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.CreateRuleRequest(); // CreateRuleRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRule(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**CreateRuleRequest**](CreateRuleRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createStore"></a>
# **createStore**
> LinksGetStoresLink createStore(request)

Create a new store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.CreateStoreRequest(); // CreateStoreRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStore(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateStoreRequest**](CreateStoreRequest.md)|  | 

### Return type

[**LinksGetStoresLink**](LinksGetStoresLink.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChannelCatalog"></a>
# **deleteChannelCatalog**
> deleteChannelCatalog(channelCatalogId, )

Delete the channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChannelCatalog(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChannelCatalogExportationCache"></a>
# **deleteChannelCatalogExportationCache**
> deleteChannelCatalogExportationCache(channelCatalogId, )

Delete the exportation cache

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChannelCatalogExportationCache(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChannelCatalogProductValueOverride"></a>
# **deleteChannelCatalogProductValueOverride**
> deleteChannelCatalogProductValueOverride(channelCatalogId, productIdchannelColumnId)

Delete a specific channel catalog product value override

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier

var channelColumnId = "8a76f06a-fefc-4c0d-bcfe-b210f1482977"; // String | The channel column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChannelCatalogProductValueOverride(channelCatalogId, productIdchannelColumnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **productId** | **String**| The product identifier | 
 **channelColumnId** | **String**| The channel column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNextContract"></a>
# **deleteNextContract**
> deleteNextContract()

Delete your next contract

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNextContract(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReportFilter"></a>
# **deleteReportFilter**
> deleteReportFilter(storeId, reportFilterId)

Delete the report filter

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var reportFilterId = "reportFilterId_example"; // String | Your report filter identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReportFilter(storeId, reportFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **reportFilterId** | **String**| Your report filter identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(storeId, ruleId)

Delete Rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShare"></a>
# **deleteShare**
> deleteShare(storeId, userId)

Delete a share to another user

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var userId = "userId_example"; // String | The friend user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShare(storeId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **userId** | **String**| The friend user id | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStore"></a>
# **deleteStore**
> deleteStore(storeId, )

Delete a store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteStore(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="disableChannelCatalog"></a>
# **disableChannelCatalog**
> disableChannelCatalog(channelCatalogId, )

Disable a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.disableChannelCatalog(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="disableChannelCatalogProduct"></a>
# **disableChannelCatalogProduct**
> disableChannelCatalogProduct(channelCatalogId, productId)

Disable channel catalog product

By default a all your catalog products are exposed to the channel. You can disable a product by using this operation. /!\\ In case of massive optimisation we recommand you to use the analytics api 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.disableChannelCatalogProduct(channelCatalogId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **productId** | **String**| The product identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="disableRule"></a>
# **disableRule**
> disableRule(storeId, ruleId)

Disable rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.disableRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enableChannelCatalog"></a>
# **enableChannelCatalog**
> enableChannelCatalog(channelCatalogId, )

Enable a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.enableChannelCatalog(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enableRule"></a>
# **enableRule**
> enableRule(storeId, ruleId)

Enable rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.enableRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportOrders"></a>
# **exportOrders**
> exportOrders(request)

Request a new Order report exportation to be generated

A new file will be generated containing a summary of all the Orders matching the requested filter settings.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.ExportOrderListRequest(); // ExportOrderListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exportOrders(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ExportOrderListRequest**](ExportOrderListRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportStoreReportByCategory"></a>
# **exportStoreReportByCategory**
> BeezUPCommonLink3 exportStoreReportByCategory(storeId, format, request)

Export the report by category

Export the report by category

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var format = "format_example"; // String | 

var request = new BeezUpApi.ReportByCategoryRequest(); // ReportByCategoryRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportStoreReportByCategory(storeId, format, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **format** | **String**|  | 
 **request** | [**ReportByCategoryRequest**](ReportByCategoryRequest.md)|  | 

### Return type

[**BeezUPCommonLink3**](BeezUPCommonLink3.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportStoreReportByChannel"></a>
# **exportStoreReportByChannel**
> BeezUPCommonLink3 exportStoreReportByChannel(storeId, format, request)

Export the report by channel

Export the report by channel

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var format = "format_example"; // String | 

var request = new BeezUpApi.ReportByChannelRequest(); // ReportByChannelRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportStoreReportByChannel(storeId, format, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **format** | **String**|  | 
 **request** | [**ReportByChannelRequest**](ReportByChannelRequest.md)|  | 

### Return type

[**BeezUPCommonLink3**](BeezUPCommonLink3.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportStoreReportByProduct"></a>
# **exportStoreReportByProduct**
> BeezUPCommonLink3 exportStoreReportByProduct(storeId, format, request)

Export the report by product

Export the report by product

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var format = "format_example"; // String | 

var request = new BeezUpApi.ReportByProductRequest(); // ReportByProductRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportStoreReportByProduct(storeId, format, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **format** | **String**|  | 
 **request** | [**ReportByProductRequest**](ReportByProductRequest.md)|  | 

### Return type

[**BeezUPCommonLink3**](BeezUPCommonLink3.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAutomaticTransitions"></a>
# **getAutomaticTransitions**
> AutomaticTransitionInfos getAutomaticTransitions(opts)

Get list of configured automatic Order status transitions

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutomaticTransitions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**AutomaticTransitionInfos**](AutomaticTransitionInfos.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableChannels"></a>
# **getAvailableChannels**
> [ChannelHeader] getAvailableChannels(storeId)

List all available channel for this store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "04730364-9826-4ff3-92e4-51fccd02bf10"; // String | The store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableChannels(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| The store identifier | 

### Return type

[**[ChannelHeader]**](ChannelHeader.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBillingPeriods"></a>
# **getBillingPeriods**
> BillingPeriods getBillingPeriods()

Get billing periods conditions

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBillingPeriods(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BillingPeriods**](BillingPeriods.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalog"></a>
# **getChannelCatalog**
> ChannelCatalog getChannelCatalog(channelCatalogId, )

Get the channel catalog information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalog(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

[**ChannelCatalog**](ChannelCatalog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogCategories"></a>
# **getChannelCatalogCategories**
> ChannelCatalogCategoryMappings getChannelCatalogCategories(channelCatalogId, )

Get channel catalog categories

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogCategories(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

[**ChannelCatalogCategoryMappings**](ChannelCatalogCategoryMappings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogExclusionFilterOperators"></a>
# **getChannelCatalogExclusionFilterOperators**
> [ExclusionFilterOperator] getChannelCatalogExclusionFilterOperators()

Get channel catalog exclusion filter operators

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogExclusionFilterOperators(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ExclusionFilterOperator]**](ExclusionFilterOperator.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogExportationCacheInfo"></a>
# **getChannelCatalogExportationCacheInfo**
> ChannelCatalogExportCacheInfoResponse getChannelCatalogExportationCacheInfo(channelCatalogId, )

Get the exportation cache information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogExportationCacheInfo(channelCatalogId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 

### Return type

[**ChannelCatalogExportCacheInfoResponse**](ChannelCatalogExportCacheInfoResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogExportationHistory"></a>
# **getChannelCatalogExportationHistory**
> ChannelCatalogExportationHistory getChannelCatalogExportationHistory(channelCatalogId, pageNumber, pageSize, )

Get the exportation history

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var pageNumber = 1; // Number | The page number you want to get

var pageSize = 25; // Number | The entry count you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogExportationHistory(channelCatalogId, pageNumber, pageSize, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **pageNumber** | **Number**| The page number you want to get | 
 **pageSize** | **Number**| The entry count you want to get | 

### Return type

[**ChannelCatalogExportationHistory**](ChannelCatalogExportationHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogMarketplaceProperties"></a>
# **getChannelCatalogMarketplaceProperties**
> ChannelCatalogMarketplaceProperties getChannelCatalogMarketplaceProperties(channelCatalogId)

Get the marketplace properties for a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "channelCatalogId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogMarketplaceProperties(channelCatalogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**|  | 

### Return type

[**ChannelCatalogMarketplaceProperties**](ChannelCatalogMarketplaceProperties.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogMarketplaceSettings"></a>
# **getChannelCatalogMarketplaceSettings**
> ChannelCatalogMarketplaceSettings getChannelCatalogMarketplaceSettings(channelCatalogId)

Get the marketplace settings for a channel catalog

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "channelCatalogId_example"; // String | Channel Catalog Id to query (required)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogMarketplaceSettings(channelCatalogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| Channel Catalog Id to query (required) | 

### Return type

[**ChannelCatalogMarketplaceSettings**](ChannelCatalogMarketplaceSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogProductByChannelCatalog"></a>
# **getChannelCatalogProductByChannelCatalog**
> ChannelCatalogProductByChannelCatalogResponse getChannelCatalogProductByChannelCatalog(productId, opts)

Get channel catalog products related to these channel catalogs

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier

var opts = { 
  'request': new BeezUpApi.ChannelCatalogProductByChannelCatalogRequest() // ChannelCatalogProductByChannelCatalogRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogProductByChannelCatalog(productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The product identifier | 
 **request** | [**ChannelCatalogProductByChannelCatalogRequest**](ChannelCatalogProductByChannelCatalogRequest.md)|  | [optional] 

### Return type

[**ChannelCatalogProductByChannelCatalogResponse**](ChannelCatalogProductByChannelCatalogResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogProductInfo"></a>
# **getChannelCatalogProductInfo**
> ChannelCatalogProductInfo getChannelCatalogProductInfo(channelCatalogId, productId)

Get channel catalog product information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogProductInfo(channelCatalogId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **productId** | **String**| The product identifier | 

### Return type

[**ChannelCatalogProductInfo**](ChannelCatalogProductInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogProductInfoList"></a>
# **getChannelCatalogProductInfoList**
> ChannelCatalogProductInfoList getChannelCatalogProductInfoList(channelCatalogId, , opts)

Get channel catalog product information list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var opts = { 
  'request': new BeezUpApi.GetChannelCatalogProductInfoListRequest() // GetChannelCatalogProductInfoListRequest | The channel catalog product list filter
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogProductInfoList(channelCatalogId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**GetChannelCatalogProductInfoListRequest**](GetChannelCatalogProductInfoListRequest.md)| The channel catalog product list filter | [optional] 

### Return type

[**ChannelCatalogProductInfoList**](ChannelCatalogProductInfoList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCatalogs"></a>
# **getChannelCatalogs**
> ChannelCatalogList getChannelCatalogs(opts)

List all your current channel catalogs

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var opts = { 
  'storeId': "04730364-9826-4ff3-92e4-51fccd02bf10" // String | The store identifier
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCatalogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| The store identifier | [optional] 

### Return type

[**ChannelCatalogList**](ChannelCatalogList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelCategories"></a>
# **getChannelCategories**
> ChannelRootCategory getChannelCategories(channelId, acceptEncoding)

Get channel categories

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28"; // String | The channel identifier

var acceptEncoding = ["acceptEncoding_example"]; // [String] | Indicates that the client accepts that the response will be compressed to reduce traffic size.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelCategories(channelId, acceptEncoding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| The channel identifier | 
 **acceptEncoding** | [**[String]**](String.md)| Indicates that the client accepts that the response will be compressed to reduce traffic size. | 

### Return type

[**ChannelRootCategory**](ChannelRootCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelColumns"></a>
# **getChannelColumns**
> [ChannelColumn] getChannelColumns(channelId, acceptEncoding, opts)

Get channel columns

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28"; // String | The channel identifier

var acceptEncoding = ["acceptEncoding_example"]; // [String] | Indicates that the client accepts that the response will be compressed to reduce traffic size.

var opts = { 
  'request': [new BeezUpApi.BeezUPCommonChannelColumnId()] // [BeezUPCommonChannelColumnId] | Allow you to filter the channel column identifier list your want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelColumns(channelId, acceptEncoding, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| The channel identifier | 
 **acceptEncoding** | [**[String]**](String.md)| Indicates that the client accepts that the response will be compressed to reduce traffic size. | 
 **request** | [**[BeezUPCommonChannelColumnId]**](BeezUPCommonChannelColumnId.md)| Allow you to filter the channel column identifier list your want to get | [optional] 

### Return type

[**[ChannelColumn]**](ChannelColumn.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelInfo"></a>
# **getChannelInfo**
> ChannelInfo getChannelInfo(channelId, )

Get channel information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28"; // String | The channel identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelInfo(channelId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | **String**| The channel identifier | 

### Return type

[**ChannelInfo**](ChannelInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannels"></a>
# **getChannels**
> ChannelInfoList getChannels(countryIsoCode, acceptEncoding)

The channel list for one country

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var countryIsoCode = "countryIsoCode_example"; // String | The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \\ To know which country are available you have to use the operation: GetChannelsByCountry 

var acceptEncoding = ["acceptEncoding_example"]; // [String] | Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannels(countryIsoCode, acceptEncoding, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryIsoCode** | **String**| The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \\ To know which country are available you have to use the operation: GetChannelsByCountry  | 
 **acceptEncoding** | [**[String]**](String.md)| Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size. | 

### Return type

[**ChannelInfoList**](ChannelInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelsIndex"></a>
# **getChannelsIndex**
> PublicChannelIndex getChannelsIndex()

Get public channel index

Use this operation to get the correct link to the channels and to the list of values

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelsIndex(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PublicChannelIndex**](PublicChannelIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContracts"></a>
# **getContracts**
> Contracts getContracts()

Get contract list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContracts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Contracts**](Contracts.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCreditCardInfo"></a>
# **getCreditCardInfo**
> CreditCardInfoResponse getCreditCardInfo()

Get credit card information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCreditCardInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CreditCardInfoResponse**](CreditCardInfoResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFriendInfo"></a>
# **getFriendInfo**
> UserFriendInfo getFriendInfo(userId)

Get friend information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var userId = "userId_example"; // String | Your friend user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFriendInfo(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Your friend user id | 

### Return type

[**UserFriendInfo**](UserFriendInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoices"></a>
# **getInvoices**
> Invoices getInvoices()

Get all your invoices

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoices(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Invoices**](Invoices.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketplaceAccountStores"></a>
# **getMarketplaceAccountStores**
> MarketplaceChannelCatalogList getMarketplaceAccountStores()

Get  you marketplace channel catalog list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketplaceAccountStores(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MarketplaceChannelCatalogList**](MarketplaceChannelCatalogList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketplaceAccountsSynchronization"></a>
# **getMarketplaceAccountsSynchronization**
> AccountSynchronizations getMarketplaceAccountsSynchronization(opts)

Get current synchronization status between your marketplaces and BeezUP accounts

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketplaceAccountsSynchronization(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**AccountSynchronizations**](AccountSynchronizations.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOffer"></a>
# **getOffer**
> Offer getOffer(request)

Get offer pricing

Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.OfferRequest(); // OfferRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOffer(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**OfferRequest**](OfferRequest.md)|  | 

### Return type

[**Offer**](Offer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrder"></a>
# **getOrder**
> Order getOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts)

Get full Order and Order Item(s) properties

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderExportations"></a>
# **getOrderExportations**
> OrderExportations getOrderExportations(pageNumber, pageSize, storeId, opts)

Get a paginated list of Order report exportations

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var pageNumber = 1; // Number | The page number you want to get

var pageSize = 25; // Number | The entry count you want to get

var storeId = "storeId_example"; // String | The store identifier to regroup the order exportations

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderExportations(pageNumber, pageSize, storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | **Number**| The page number you want to get | 
 **pageSize** | **Number**| The entry count you want to get | 
 **storeId** | **String**| The store identifier to regroup the order exportations | 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**OrderExportations**](OrderExportations.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderHistory"></a>
# **getOrderHistory**
> OrderHistory getOrderHistory(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts)

Get an Order&#39;s harvest and change history

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderHistory(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**OrderHistory**](OrderHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderIndex"></a>
# **getOrderIndex**
> OrderIndex getOrderIndex(opts)

Get all actions you can do on the order API

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderIndex(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**OrderIndex**](OrderIndex.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderListFull"></a>
# **getOrderListFull**
> OrderListFull getOrderListFull(acceptEncoding, request)

Get a paginated list of all Orders with all Order and Order Item(s) properties

The purpose of this operation is to reduce the amount of request to the API.\\ \\ Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var acceptEncoding = ["acceptEncoding_example"]; // [String] | Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size

var request = new BeezUpApi.OrderListRequest(); // OrderListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderListFull(acceptEncoding, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptEncoding** | [**[String]**](String.md)| Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size | 
 **request** | [**OrderListRequest**](OrderListRequest.md)|  | 

### Return type

[**OrderListFull**](OrderListFull.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderListLight"></a>
# **getOrderListLight**
> OrderListLight getOrderListLight(request)

Get a paginated list of all Orders without details

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.OrderListRequest(); // OrderListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderListLight(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**OrderListRequest**](OrderListRequest.md)|  | 

### Return type

[**OrderListLight**](OrderListLight.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfilePictureInfo"></a>
# **getProfilePictureInfo**
> ProfilePictureInfoResponse getProfilePictureInfo()

Get profile picture information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProfilePictureInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProfilePictureInfoResponse**](ProfilePictureInfoResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPublicListOfValues"></a>
# **getPublicListOfValues**
> PublicListOfValuesResponse getPublicListOfValues(listName, opts)

Get the list of values related to this list name

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var listName = "listName_example"; // String | The list of value name your want to get

var opts = { 
  'acceptLanguage': ["acceptLanguage_example"], // [String] | Indicates that the client accepts the following languages.
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicListOfValues(listName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listName** | **String**| The list of value name your want to get | 
 **acceptLanguage** | [**[String]**](String.md)| Indicates that the client accepts the following languages. | [optional] 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**PublicListOfValuesResponse**](PublicListOfValuesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPublicLovIndex"></a>
# **getPublicLovIndex**
> PublicLovIndex getPublicLovIndex(opts)

Get all list names

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicLovIndex(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**PublicLovIndex**](PublicLovIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPublications"></a>
# **getPublications**
> AccountPublications getPublications(marketplaceTechnicalCode, accountId, opts)

Fetch the publication history for an account, sorted by descending start date

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "marketplaceTechnicalCode_example"; // String | Marketplace Technical Code to query (required)

var accountId = 56; // Number | Account Id to query (required)

var opts = { 
  'channelCatalogId': "channelCatalogId_example", // String | Channel Catalog Id by which to filter (optional)
  'count': 10, // Number | Amount of entries to fetch (optional, default set to 10)
  'publicationTypes': ["publicationTypes_example"] // [String] | Publication types by which to filter (optional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublications(marketplaceTechnicalCode, accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| Marketplace Technical Code to query (required) | 
 **accountId** | **Number**| Account Id to query (required) | 
 **channelCatalogId** | **String**| Channel Catalog Id by which to filter (optional) | [optional] 
 **count** | **Number**| Amount of entries to fetch (optional, default set to 10) | [optional] [default to 10]
 **publicationTypes** | [**[String]**](String.md)| Publication types by which to filter (optional) | [optional] 

### Return type

[**AccountPublications**](AccountPublications.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReportFilter"></a>
# **getReportFilter**
> ReportFilter getReportFilter(storeId, reportFilterId)

Get the report filter description

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var reportFilterId = "reportFilterId_example"; // String | Your report filter identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportFilter(storeId, reportFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **reportFilterId** | **String**| Your report filter identifier | 

### Return type

[**ReportFilter**](ReportFilter.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReportFilters"></a>
# **getReportFilters**
> ReportFilters getReportFilters(storeId, )

Get report filter list for the given store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportFilters(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**ReportFilters**](ReportFilters.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRights"></a>
# **getRights**
> [FunctionalityRightInfo] getRights(storeId, functionalityCodeList)

Get store&#39;s rights

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var functionalityCodeList = [new BeezUpApi.[String]()]; // [String] | The functionality code list you want to check


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRights(storeId, functionalityCodeList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **functionalityCodeList** | **[String]**| The functionality code list you want to check | 

### Return type

[**[FunctionalityRightInfo]**](FunctionalityRightInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRule"></a>
# **getRule**
> Rule getRule(storeId, ruleId)

Gets the rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

[**Rule**](Rule.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRules"></a>
# **getRules**
> RuleList getRules(storeId, )

Gets the list of rules for a given store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRules(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**RuleList**](RuleList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRulesExecutions"></a>
# **getRulesExecutions**
> RuleExecutionReportings getRulesExecutions(storeId, pageNumber, pageSize)

Get the rules execution history

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var pageNumber = 1; // Number | The page to retrieve

var pageSize = 10; // Number | The count of rule history to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRulesExecutions(storeId, pageNumber, pageSize, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **pageNumber** | **Number**| The page to retrieve | [default to 1]
 **pageSize** | **Number**| The count of rule history to retrieve | [default to 10]

### Return type

[**RuleExecutionReportings**](RuleExecutionReportings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShares"></a>
# **getShares**
> StoreShares getShares(storeId, )

Get shares related to this store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShares(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**StoreShares**](StoreShares.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStandardOffers"></a>
# **getStandardOffers**
> StandardOffers getStandardOffers()

Get all standard offers

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStandardOffers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StandardOffers**](StandardOffers.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStore"></a>
# **getStore**
> StoreHeader getStore(storeId, )

Get store&#39;s information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStore(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**StoreHeader**](StoreHeader.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreAlerts"></a>
# **getStoreAlerts**
> StoreAlerts getStoreAlerts(storeId, )

Get store&#39;s alerts

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreAlerts(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**StoreAlerts**](StoreAlerts.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreReportByCategory"></a>
# **getStoreReportByCategory**
> ReportByCategoryResponse getStoreReportByCategory(storeId, request)

Get the report by category

Get the report by category

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ReportByCategoryRequest(); // ReportByCategoryRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreReportByCategory(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ReportByCategoryRequest**](ReportByCategoryRequest.md)|  | 

### Return type

[**ReportByCategoryResponse**](ReportByCategoryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreReportByChannel"></a>
# **getStoreReportByChannel**
> ReportByChannelResponse getStoreReportByChannel(storeId, request)

Get the report by channel

Get the report by channel

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ReportByChannelRequest(); // ReportByChannelRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreReportByChannel(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ReportByChannelRequest**](ReportByChannelRequest.md)|  | 

### Return type

[**ReportByChannelResponse**](ReportByChannelResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreReportByDay"></a>
# **getStoreReportByDay**
> ReportByDayResponse getStoreReportByDay(storeId, request)

Get the report by day

Get the report by day

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ReportByDayRequest(); // ReportByDayRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreReportByDay(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ReportByDayRequest**](ReportByDayRequest.md)|  | 

### Return type

[**ReportByDayResponse**](ReportByDayResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreReportByDayExport"></a>
# **getStoreReportByDayExport**
> BeezUPCommonLink3 getStoreReportByDayExport(storeId, format, request)

Get the report by day

Get the report by day

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var format = "format_example"; // String | 

var request = new BeezUpApi.ReportByDayRequest(); // ReportByDayRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreReportByDayExport(storeId, format, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **format** | **String**|  | 
 **request** | [**ReportByDayRequest**](ReportByDayRequest.md)|  | 

### Return type

[**BeezUPCommonLink3**](BeezUPCommonLink3.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreReportByProduct"></a>
# **getStoreReportByProduct**
> ReportByProductResponse getStoreReportByProduct(storeId, request)

Get the report by product

Get the report by product

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.ReportByProductRequest(); // ReportByProductRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreReportByProduct(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**ReportByProductRequest**](ReportByProductRequest.md)|  | 

### Return type

[**ReportByProductResponse**](ReportByProductResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreTrackedClicks"></a>
# **getStoreTrackedClicks**
> TrackedClicks getStoreTrackedClicks(storeId, , opts)

Get the latest clicks tracked

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var opts = { 
  'count': 100 // Number | The click's count you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreTrackedClicks(storeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **count** | **Number**| The click&#39;s count you want to get | [optional] [default to 100]

### Return type

[**TrackedClicks**](TrackedClicks.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreTrackedExternalOrders"></a>
# **getStoreTrackedExternalOrders**
> TrackedExternalOrders getStoreTrackedExternalOrders(storeId, , opts)

Get the latest external orders tracked

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var opts = { 
  'count': 100 // Number | The external order's count you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreTrackedExternalOrders(storeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **count** | **Number**| The external order&#39;s count you want to get | [optional] [default to 100]

### Return type

[**TrackedExternalOrders**](TrackedExternalOrders.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreTrackedOrders"></a>
# **getStoreTrackedOrders**
> TrackedOrders getStoreTrackedOrders(storeId, , opts)

Get the latest orders tracked

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var opts = { 
  'count': 100 // Number | The order's count you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreTrackedOrders(storeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **count** | **Number**| The order&#39;s count you want to get | [optional] [default to 100]

### Return type

[**TrackedOrders**](TrackedOrders.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStoreTrackingStatus"></a>
# **getStoreTrackingStatus**
> StoreTrackingStatus getStoreTrackingStatus(storeId, )

Get store tracking synchronization status

Your clicks and orders are eventually consistent. \\ This operation indicates you at which date the projections are for this store. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreTrackingStatus(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**StoreTrackingStatus**](StoreTrackingStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStores"></a>
# **getStores**
> Stores getStores()

Get store list

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStores(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Stores**](Stores.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTrackingStatus"></a>
# **getTrackingStatus**
> TrackingStatus getTrackingStatus()

Display the synchronization status of the clicks and orders

Your clicks and orders are eventually consistent. \\ This operation indicates you at which date the projections are. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTrackingStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TrackingStatus**](TrackingStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserAccountInfo"></a>
# **getUserAccountInfo**
> AccountInfo getUserAccountInfo()

Get user account information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserAccountInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountInfo**](AccountInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserListOfValues"></a>
# **getUserListOfValues**
> UserListOfValuesResponse getUserListOfValues(listName, opts)

Get the list of values related to this list name

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var listName = "listName_example"; // String | The list of value name your want to get

var opts = { 
  'acceptLanguage': ["acceptLanguage_example"], // [String] | Indicates that the client accepts the following languages.
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserListOfValues(listName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listName** | **String**| The list of value name your want to get | 
 **acceptLanguage** | [**[String]**](String.md)| Indicates that the client accepts the following languages. | [optional] 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

[**UserListOfValuesResponse**](UserListOfValuesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserLovIndex"></a>
# **getUserLovIndex**
> UserLovIndex getUserLovIndex()

Get all list names

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserLovIndex(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserLovIndex**](UserLovIndex.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="harvestAll"></a>
# **harvestAll**
> harvestAll()

Send harvest request to all your marketplaces

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.harvestAll(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="harvestOrder"></a>
# **harvestOrder**
> harvestOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, )

Send harvest request for a single Order

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.harvestOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headOrder"></a>
# **headOrder**
> headOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts)

Get the meta information about the order (ETag, Last-Modified)

The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body. This could be useful  

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headOrder(marketplaceTechnicalCode, accountId, beezUPOrderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 
 **ifNoneMatch** | **String**| ETag value to identify the last known version of requested resource.\\ To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\\ If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationActivateAutoImport"></a>
# **importationActivateAutoImport**
> importationActivateAutoImport(storeId, )

Activate the auto importation of the last successful manual catalog importation.

Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationActivateAutoImport(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationCancel"></a>
# **importationCancel**
> importationCancel(storeId, executionId, )

Cancel importation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationCancel(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationCommit"></a>
# **importationCommit**
> importationCommit(storeId, executionId, )

Commit Importation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationCommit(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationCommitColumns"></a>
# **importationCommitColumns**
> importationCommitColumns(storeId, executionId, )

Commit columns

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationCommitColumns(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationConfigureCatalogColumn"></a>
# **importationConfigureCatalogColumn**
> importationConfigureCatalogColumn(storeId, executionId, columnIdrequest)

Configure catalog column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.ConfigureCatalogColumnCatalogRequest(); // ConfigureCatalogColumnCatalogRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationConfigureCatalogColumn(storeId, executionId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**ConfigureCatalogColumnCatalogRequest**](ConfigureCatalogColumnCatalogRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationConfigureRemainingCatalogColumns"></a>
# **importationConfigureRemainingCatalogColumns**
> importationConfigureRemainingCatalogColumns(storeId, executionId, )

Configure remaining catalog columns

This operation should be used after you have mapped the required BeezUP Columns

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationConfigureRemainingCatalogColumns(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationDeleteCustomColumn"></a>
# **importationDeleteCustomColumn**
> importationDeleteCustomColumn(storeId, executionId, columnId)

Delete Custom Column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationDeleteCustomColumn(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetCustomColumnExpression"></a>
# **importationGetCustomColumnExpression**
> &#39;String&#39; importationGetCustomColumnExpression(storeId, executionId, columnId)

Get the encrypted custom column expression in this importation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetCustomColumnExpression(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 

### Return type

**&#39;String&#39;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetCustomColumns"></a>
# **importationGetCustomColumns**
> CustomColumns importationGetCustomColumns(storeId, executionId, )

Get custom columns currently place in this importation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetCustomColumns(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

[**CustomColumns**](CustomColumns.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetDetectedCatalogColumns"></a>
# **importationGetDetectedCatalogColumns**
> DetectedCatalogColumns importationGetDetectedCatalogColumns(storeId, executionId, )

Get detected catalog columns during this importation.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetDetectedCatalogColumns(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

[**DetectedCatalogColumns**](DetectedCatalogColumns.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetImportationMonitoring"></a>
# **importationGetImportationMonitoring**
> ImportationMonitoring importationGetImportationMonitoring(storeId, executionId, )

Get the importation status

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetImportationMonitoring(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

[**ImportationMonitoring**](ImportationMonitoring.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetManualUpdateLastInputConfig"></a>
# **importationGetManualUpdateLastInputConfig**
> LastManualImportInputConfiguration importationGetManualUpdateLastInputConfig(storeId, )

Get the last input configuration

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetManualUpdateLastInputConfig(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**LastManualImportInputConfiguration**](LastManualImportInputConfiguration.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetProductSample"></a>
# **importationGetProductSample**
> ProductSample importationGetProductSample(storeId, executionId, productSampleIndex, )

Get the product sample related to this importation with all columns (catalog and custom)

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var productSampleIndex = 56; // Number | Index of the product sample. Starting from 0 to 99.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetProductSample(storeId, executionId, productSampleIndex, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **productSampleIndex** | **Number**| Index of the product sample. Starting from 0 to 99. | 

### Return type

[**ProductSample**](ProductSample.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetProductSampleCustomColumnValue"></a>
# **importationGetProductSampleCustomColumnValue**
> &#39;String&#39; importationGetProductSampleCustomColumnValue(storeId, executionId, productSampleIndex, columnId)

Get product sample custom column value related to this importation.

/!\\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var productSampleIndex = 56; // Number | Index of the product sample. Starting from 0 to 99.

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetProductSampleCustomColumnValue(storeId, executionId, productSampleIndex, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **productSampleIndex** | **Number**| Index of the product sample. Starting from 0 to 99. | 
 **columnId** | **String**| The custom column identifier | 

### Return type

**&#39;String&#39;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationGetReportings"></a>
# **importationGetReportings**
> [ImportationReporting] importationGetReportings(storeId, )

Get the latest catalog importation reporting

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationGetReportings(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

[**[ImportationReporting]**](ImportationReporting.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationIgnoreColumn"></a>
# **importationIgnoreColumn**
> importationIgnoreColumn(storeId, executionId, columnId)

Ignore Column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationIgnoreColumn(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationMapCatalogColumn"></a>
# **importationMapCatalogColumn**
> importationMapCatalogColumn(storeId, executionId, columnIdrequest)

Map catalog column to a BeezUP column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The catalog column identifier

var request = new BeezUpApi.MapBeezUPColumnRequest(); // MapBeezUPColumnRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationMapCatalogColumn(storeId, executionId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The catalog column identifier | 
 **request** | [**MapBeezUPColumnRequest**](MapBeezUPColumnRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationMapCustomColumn"></a>
# **importationMapCustomColumn**
> importationMapCustomColumn(storeId, executionId, columnIdrequest)

Map custom column to a BeezUP column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.MapBeezUPColumnRequest(); // MapBeezUPColumnRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationMapCustomColumn(storeId, executionId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**MapBeezUPColumnRequest**](MapBeezUPColumnRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationReattendColumn"></a>
# **importationReattendColumn**
> importationReattendColumn(storeId, executionId, columnId)

Reattend Column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationReattendColumn(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationSaveCustomColumn"></a>
# **importationSaveCustomColumn**
> importationSaveCustomColumn(storeId, executionId, columnIdrequest)

Create or replace a custom column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier

var request = new BeezUpApi.ChangeCustomColumnRequest(); // ChangeCustomColumnRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationSaveCustomColumn(storeId, executionId, columnIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 
 **request** | [**ChangeCustomColumnRequest**](ChangeCustomColumnRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationStartManualUpdate"></a>
# **importationStartManualUpdate**
> LinksImportationGetImportationMonitoringLink importationStartManualUpdate(storeId, request)

Start Manual Import

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.StartManualImportRequest(); // StartManualImportRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationStartManualUpdate(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**StartManualImportRequest**](StartManualImportRequest.md)|  | 

### Return type

[**LinksImportationGetImportationMonitoringLink**](LinksImportationGetImportationMonitoringLink.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationTechnicalProgression"></a>
# **importationTechnicalProgression**
> ImportationTechnicalProgression importationTechnicalProgression(storeId, executionId, )

Get technical progression

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importationTechnicalProgression(storeId, executionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 

### Return type

[**ImportationTechnicalProgression**](ImportationTechnicalProgression.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationUnmapCatalogColumn"></a>
# **importationUnmapCatalogColumn**
> importationUnmapCatalogColumn(storeId, executionId, columnId)

Unmap catalog column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The catalog column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationUnmapCatalogColumn(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The catalog column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importationUnmapCustomColumn"></a>
# **importationUnmapCustomColumn**
> importationUnmapCustomColumn(storeId, executionId, columnId)

Unmap custom column

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var executionId = "executionId_example"; // String | The execution identifier of you catalog importation

var columnId = "columnId_example"; // String | The custom column identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.importationUnmapCustomColumn(storeId, executionId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **executionId** | **String**| The execution identifier of you catalog importation | 
 **columnId** | **String**| The custom column identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> ApiCredentials login(request)

Login

User Login - The login will give your tokens

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.LoginRequest(); // LoginRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**ApiCredentials**](ApiCredentials.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()

Log out the current user from go2

Log out the current user from go2

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lostPassword"></a>
# **lostPassword**
> lostPassword(email)

Lost password

Lost password - Your password will be regenerated and sent to your email

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var email = new BeezUpApi.BeezUPCommonEmail(); // BeezUPCommonEmail | Your email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lostPassword(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**BeezUPCommonEmail**](BeezUPCommonEmail.md)| Your email | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mapChannelCatalogCategory"></a>
# **mapChannelCatalogCategory**
> mapChannelCatalogCategory(channelCatalogId, request)

Map channel catalog category

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.MapCategoryRequest(); // MapCategoryRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mapChannelCatalogCategory(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**MapCategoryRequest**](MapCategoryRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mapChannelCatalogColumns"></a>
# **mapChannelCatalogColumns**
> mapChannelCatalogColumns(channelCatalogId, request)

Configure channel catalog column mappings

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.ColumnMappingList(); // ColumnMappingList | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mapChannelCatalogColumns(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**ColumnMappingList**](ColumnMappingList.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveDownRule"></a>
# **moveDownRule**
> moveDownRule(storeId, ruleId)

Move the rule down

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.moveDownRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveUpRule"></a>
# **moveUpRule**
> moveUpRule(storeId, ruleId)

Move the rule up

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.moveUpRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="optimise"></a>
# **optimise**
> optimise(storeId, actionNamerequest)

Optimise products

/!\\ WARNING /!\\ \\ Apply the operation on every product related to this request. \\ This operation is used at the bottom of the analytics page result. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var actionName = "actionName_example"; // String | 

var request = new BeezUpApi.OptimiseRequest(); // OptimiseRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.optimise(storeId, actionNamerequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **actionName** | **String**|  | 
 **request** | [**OptimiseRequest**](OptimiseRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="optimiseByCategory"></a>
# **optimiseByCategory**
> optimiseByCategory(storeId, catalogCategoryId, actionName, opts)

Optimise products&#39;s category

/!\\ WARNING /!\\ \\ This operation will reenable or disable products&#39;s category for every channel indicated in the body.  

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var catalogCategoryId = "catalogCategoryId_example"; // String | The category identifier concerned by this optimisation

var actionName = "actionName_example"; // String | 

var opts = { 
  'request': [new BeezUpApi.[String]()] // [String] | The channel identifier list concerned by this optimisation
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.optimiseByCategory(storeId, catalogCategoryId, actionName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **catalogCategoryId** | **String**| The category identifier concerned by this optimisation | 
 **actionName** | **String**|  | 
 **request** | **[String]**| The channel identifier list concerned by this optimisation | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="optimiseByChannel"></a>
# **optimiseByChannel**
> optimiseByChannel(storeId, channelId, actionName)

Optimise products&#39;s category

/!\\ WARNING /!\\ \\ Apply the operation on every product on this channel. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var channelId = "channelId_example"; // String | The channel identifier concerned by this optimisation

var actionName = "actionName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.optimiseByChannel(storeId, channelId, actionName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **channelId** | **String**| The channel identifier concerned by this optimisation | 
 **actionName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="optimiseByProduct"></a>
# **optimiseByProduct**
> optimiseByProduct(storeId, productId, actionName, opts)

Optimise products

/!\\ WARNING /!\\ \\ This operation will reenable or disable this product for every channel indicated in the body.  

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var productId = "productId_example"; // String | The product identifier concerned by this optimisation

var actionName = "actionName_example"; // String | 

var opts = { 
  'request': [new BeezUpApi.[String]()] // [String] | The channel identifier list concerned by this optimisation
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.optimiseByProduct(storeId, productId, actionName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **productId** | **String**| The product identifier concerned by this optimisation | 
 **actionName** | **String**|  | 
 **request** | **[String]**| The channel identifier list concerned by this optimisation | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="overrideChannelCatalogProductOverrides"></a>
# **overrideChannelCatalogProductOverrides**
> overrideChannelCatalogProductOverrides(channelCatalogId, productIdrequest)

Override channel catalog product values

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier

var request = new BeezUpApi.ProductOverrides(); // ProductOverrides | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.overrideChannelCatalogProductOverrides(channelCatalogId, productIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **productId** | **String**| The product identifier | 
 **request** | [**ProductOverrides**](ProductOverrides.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reactivateCurrentContract"></a>
# **reactivateCurrentContract**
> reactivateCurrentContract()

Reactivate your terminated contract.

By calling this operation you can re-enable the auto renewal.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.reactivateCurrentContract(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reenableChannelCatalogProduct"></a>
# **reenableChannelCatalogProduct**
> reenableChannelCatalogProduct(channelCatalogId, productId)

Reenable channel catalog product

By default a all your catalog products are exposed to the channel. You can reenable a product by using this operation. /!\\ In case of massive optimisation we recommand you to use the analytics api 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var productId = "578419df-1bbf-41a6-96fa-862e42182b67"; // String | The product identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.reenableChannelCatalogProduct(channelCatalogId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **productId** | **String**| The product identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="register"></a>
# **register**
> register(request)

User Registration

User Registration - Create a new user on BeezUP

### Example
```javascript
var BeezUpApi = require('beez_up_api');

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.RegisterRequest(); // RegisterRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.register(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**RegisterRequest**](RegisterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resendEmailActivation"></a>
# **resendEmailActivation**
> resendEmailActivation()

Resend email activation

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resendEmailActivation(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runRule"></a>
# **runRule**
> runRule(storeId, ruleId)

Run rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.runRule(storeId, ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runRules"></a>
# **runRules**
> runRules(storeId, )

Run all rules for this store

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.runRules(storeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveCompanyInfo"></a>
# **saveCompanyInfo**
> saveCompanyInfo(request)

Change company information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.CompanyInfo(); // CompanyInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveCompanyInfo(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CompanyInfo**](CompanyInfo.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveCreditCardInfo"></a>
# **saveCreditCardInfo**
> saveCreditCardInfo(request)

Save user credit card info

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.CreditCardInfo(); // CreditCardInfo | Credit card info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveCreditCardInfo(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreditCardInfo**](CreditCardInfo.md)| Credit card info | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="savePersonalInfo"></a>
# **savePersonalInfo**
> savePersonalInfo(request)

Save user personal information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.PersonalInfo(); // PersonalInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.savePersonalInfo(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PersonalInfo**](PersonalInfo.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveProfilePictureInfo"></a>
# **saveProfilePictureInfo**
> saveProfilePictureInfo(request)

Change user picture information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.ProfilePictureInfo(); // ProfilePictureInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProfilePictureInfo(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ProfilePictureInfo**](ProfilePictureInfo.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveReportFilter"></a>
# **saveReportFilter**
> saveReportFilter(storeId, reportFilterIdreportFilter)

Save the report filter

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var reportFilterId = "reportFilterId_example"; // String | Your report filter identifier

var reportFilter = new BeezUpApi.SaveReportFilterRequest(); // SaveReportFilterRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveReportFilter(storeId, reportFilterIdreportFilter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **reportFilterId** | **String**| Your report filter identifier | 
 **reportFilter** | [**SaveReportFilterRequest**](SaveReportFilterRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveStoreAlert"></a>
# **saveStoreAlert**
> saveStoreAlert(storeId, alertId, request)

Save store alert

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var alertId = 56; // Number | 

var request = [new BeezUpApi.SaveStoreAlertRequest()]; // [SaveStoreAlertRequest] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveStoreAlert(storeId, alertId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **alertId** | **Number**|  | 
 **request** | [**[SaveStoreAlertRequest]**](SaveStoreAlertRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setChannelCatalogMarketplaceSettings"></a>
# **setChannelCatalogMarketplaceSettings**
> setChannelCatalogMarketplaceSettings(channelCatalogId, model)

Save new marketplace settings for a channel catalog

Allow you to configure your marketplace settings.  Partial update accepted. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "channelCatalogId_example"; // String | Channel Catalog Id to query

var model = new BeezUpApi.SetChannelCatalogMarketplaceSettingsRequest(); // SetChannelCatalogMarketplaceSettingsRequest | Settings to save


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setChannelCatalogMarketplaceSettings(channelCatalogId, model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| Channel Catalog Id to query | 
 **model** | [**SetChannelCatalogMarketplaceSettingsRequest**](SetChannelCatalogMarketplaceSettingsRequest.md)| Settings to save | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setMerchantOrderInfo"></a>
# **setMerchantOrderInfo**
> setMerchantOrderInfo(marketplaceTechnicalCode, accountId, beezUPOrderId, request)

Set an Order&#39;s merchant information

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var marketplaceTechnicalCode = "Amazon"; // String | The marketplace technical code

var accountId = 1001; // Number | The account identifier

var beezUPOrderId = "00000000000000000000000000000000000000000000000"; // String | The BeezUP Order identifier

var request = new BeezUpApi.SetMerchantOrderInfoRequest(); // SetMerchantOrderInfoRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setMerchantOrderInfo(marketplaceTechnicalCode, accountId, beezUPOrderId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceTechnicalCode** | **String**| The marketplace technical code | 
 **accountId** | **Number**| The account identifier | 
 **beezUPOrderId** | **String**| The BeezUP Order identifier | 
 **request** | [**SetMerchantOrderInfoRequest**](SetMerchantOrderInfoRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setMerchantOrderInfoList"></a>
# **setMerchantOrderInfoList**
> BatchOrderOperationResponse setMerchantOrderInfoList(request)

Send a batch of operations to set an Order&#39;s merchant information

The purpose of this operation is to reduce the amount of request to the API.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.SetMerchantOrderInfoListRequest(); // SetMerchantOrderInfoListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setMerchantOrderInfoList(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SetMerchantOrderInfoListRequest**](SetMerchantOrderInfoListRequest.md)|  | 

### Return type

[**BatchOrderOperationResponse**](BatchOrderOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="share"></a>
# **share**
> share(storeId, email)

Share a store to another user

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var email = new BeezUpApi.FriendEmail(); // FriendEmail | Your friend's email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.share(storeId, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **email** | [**FriendEmail**](FriendEmail.md)| Your friend&#39;s email | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="terminateCurrentContract"></a>
# **terminateCurrentContract**
> terminateCurrentContract(request)

Schedule termination of your current contract at the end of the commitment.

By default your contract are automatically renew. By calling this operation you can disable the auto renewal.

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var request = new BeezUpApi.TerminateContract(); // TerminateContract | Indicate the termination reason


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.terminateCurrentContract(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TerminateContract**](TerminateContract.md)| Indicate the termination reason | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unmapChannelCatalogCategory"></a>
# **unmapChannelCatalogCategory**
> unmapChannelCatalogCategory(channelCatalogId, request)

Unmap channel catalog category

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var channelCatalogId = "6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"; // String | The channel catalog identifier

var request = new BeezUpApi.UnmapCategoryRequest(); // UnmapCategoryRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unmapChannelCatalogCategory(channelCatalogId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelCatalogId** | **String**| The channel catalog identifier | 
 **request** | [**UnmapCategoryRequest**](UnmapCategoryRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> updateRule(storeId, ruleIdrequest)

Update Rule

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var ruleId = "ruleId_example"; // String | Your rule identifier

var request = new BeezUpApi.UpdateRuleRequest(); // UpdateRuleRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRule(storeId, ruleIdrequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **ruleId** | **String**| Your rule identifier | 
 **request** | [**UpdateRuleRequest**](UpdateRuleRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStore"></a>
# **updateStore**
> updateStore(storeId, request)

Update some store&#39;s information.

Update some store&#39;s information. FYI, you cannot change the country. 

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var storeId = "storeId_example"; // String | Your store identifier

var request = new BeezUpApi.UpdateStoreRequest(); // UpdateStoreRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStore(storeId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Your store identifier | 
 **request** | [**UpdateStoreRequest**](UpdateStoreRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCustomerGet"></a>
# **userCustomerGet**
> CustomerIndex userCustomerGet()

The index of all operations and LOV

### Example
```javascript
var BeezUpApi = require('beez_up_api');
var defaultClient = BeezUpApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new BeezUpApi.BeezUPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCustomerGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CustomerIndex**](CustomerIndex.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

