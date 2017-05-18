/**
 * BeezUP API
 * This API will allow you to create your account and to get your tokens. \\ If you lost your password, you have an operation to get it back. 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BeezUPCommonMarketplaceBusinessCode', 'model/BeezUPCommonMarketplaceTechnicalCode', 'model/BeezUPOrderStatus', 'model/DateSearchType', 'model/MarketplaceOrderId', 'model/OrderBuyerName', 'model/OrderMerchantOrderId', 'model/PageNumber', 'model/PageSize'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BeezUPCommonMarketplaceBusinessCode'), require('./BeezUPCommonMarketplaceTechnicalCode'), require('./BeezUPOrderStatus'), require('./DateSearchType'), require('./MarketplaceOrderId'), require('./OrderBuyerName'), require('./OrderMerchantOrderId'), require('./PageNumber'), require('./PageSize'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.OrderListRequest = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AccountId, root.BeezUpApi.BeezUPCommonMarketplaceBusinessCode, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode, root.BeezUpApi.BeezUPOrderStatus, root.BeezUpApi.DateSearchType, root.BeezUpApi.MarketplaceOrderId, root.BeezUpApi.OrderBuyerName, root.BeezUpApi.OrderMerchantOrderId, root.BeezUpApi.PageNumber, root.BeezUpApi.PageSize);
  }
}(this, function(ApiClient, AccountId, BeezUPCommonMarketplaceBusinessCode, BeezUPCommonMarketplaceTechnicalCode, BeezUPOrderStatus, DateSearchType, MarketplaceOrderId, OrderBuyerName, OrderMerchantOrderId, PageNumber, PageSize) {
  'use strict';




  /**
   * The OrderListRequest model module.
   * @module model/OrderListRequest
   * @version 2.0
   */

  /**
   * Constructs a new <code>OrderListRequest</code>.
   * @alias module:model/OrderListRequest
   * @class
   * @param dateSearchType {module:model/DateSearchType} 
   * @param beginPeriodUtcDate {Date} The begin period you want to make the search. \\ The period MUST not be greater than 30 days. The begin period MUST be lower than the end period.  
   * @param endPeriodUtcDate {Date} The end period of you search. \\ The period MUST not be greater than 30 days. \\ The end period MUST be greater than the begin period.  The end period MUST be lower to the current date. 
   * @param pageSize {module:model/PageSize} 
   * @param pageNumber {module:model/PageNumber} 
   */
  var exports = function(dateSearchType, beginPeriodUtcDate, endPeriodUtcDate, pageSize, pageNumber) {
    var _this = this;





    _this['dateSearchType'] = dateSearchType;
    _this['beginPeriodUtcDate'] = beginPeriodUtcDate;
    _this['endPeriodUtcDate'] = endPeriodUtcDate;



    _this['pageSize'] = pageSize;
    _this['pageNumber'] = pageNumber;
  };

  /**
   * Constructs a <code>OrderListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderListRequest} obj Optional instance to populate.
   * @return {module:model/OrderListRequest} The populated <code>OrderListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marketplaceTechnicalCodes')) {
        obj['marketplaceTechnicalCodes'] = ApiClient.convertToType(data['marketplaceTechnicalCodes'], [BeezUPCommonMarketplaceTechnicalCode]);
      }
      if (data.hasOwnProperty('marketplaceBusinessCodes')) {
        obj['marketplaceBusinessCodes'] = ApiClient.convertToType(data['marketplaceBusinessCodes'], [BeezUPCommonMarketplaceBusinessCode]);
      }
      if (data.hasOwnProperty('accountIds')) {
        obj['accountIds'] = ApiClient.convertToType(data['accountIds'], [AccountId]);
      }
      if (data.hasOwnProperty('beezUPOrderStatuses')) {
        obj['beezUPOrderStatuses'] = ApiClient.convertToType(data['beezUPOrderStatuses'], [BeezUPOrderStatus]);
      }
      if (data.hasOwnProperty('dateSearchType')) {
        obj['dateSearchType'] = DateSearchType.constructFromObject(data['dateSearchType']);
      }
      if (data.hasOwnProperty('beginPeriodUtcDate')) {
        obj['beginPeriodUtcDate'] = ApiClient.convertToType(data['beginPeriodUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('endPeriodUtcDate')) {
        obj['endPeriodUtcDate'] = ApiClient.convertToType(data['endPeriodUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('order_Buyer_Name')) {
        obj['order_Buyer_Name'] = OrderBuyerName.constructFromObject(data['order_Buyer_Name']);
      }
      if (data.hasOwnProperty('marketplaceOrderIds')) {
        obj['marketplaceOrderIds'] = ApiClient.convertToType(data['marketplaceOrderIds'], [MarketplaceOrderId]);
      }
      if (data.hasOwnProperty('order_MerchantOrderIds')) {
        obj['order_MerchantOrderIds'] = ApiClient.convertToType(data['order_MerchantOrderIds'], [OrderMerchantOrderId]);
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = PageSize.constructFromObject(data['pageSize']);
      }
      if (data.hasOwnProperty('pageNumber')) {
        obj['pageNumber'] = PageNumber.constructFromObject(data['pageNumber']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BeezUPCommonMarketplaceTechnicalCode>} marketplaceTechnicalCodes
   */
  exports.prototype['marketplaceTechnicalCodes'] = undefined;
  /**
   * @member {Array.<module:model/BeezUPCommonMarketplaceBusinessCode>} marketplaceBusinessCodes
   */
  exports.prototype['marketplaceBusinessCodes'] = undefined;
  /**
   * Account id list
   * @member {Array.<module:model/AccountId>} accountIds
   */
  exports.prototype['accountIds'] = undefined;
  /**
   * @member {Array.<module:model/BeezUPOrderStatus>} beezUPOrderStatuses
   */
  exports.prototype['beezUPOrderStatuses'] = undefined;
  /**
   * @member {module:model/DateSearchType} dateSearchType
   */
  exports.prototype['dateSearchType'] = undefined;
  /**
   * The begin period you want to make the search. \\ The period MUST not be greater than 30 days. The begin period MUST be lower than the end period.  
   * @member {Date} beginPeriodUtcDate
   */
  exports.prototype['beginPeriodUtcDate'] = undefined;
  /**
   * The end period of you search. \\ The period MUST not be greater than 30 days. \\ The end period MUST be greater than the begin period.  The end period MUST be lower to the current date. 
   * @member {Date} endPeriodUtcDate
   */
  exports.prototype['endPeriodUtcDate'] = undefined;
  /**
   * @member {module:model/OrderBuyerName} order_Buyer_Name
   */
  exports.prototype['order_Buyer_Name'] = undefined;
  /**
   * @member {Array.<module:model/MarketplaceOrderId>} marketplaceOrderIds
   */
  exports.prototype['marketplaceOrderIds'] = undefined;
  /**
   * Merchant order id list
   * @member {Array.<module:model/OrderMerchantOrderId>} order_MerchantOrderIds
   */
  exports.prototype['order_MerchantOrderIds'] = undefined;
  /**
   * @member {module:model/PageSize} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * @member {module:model/PageNumber} pageNumber
   */
  exports.prototype['pageNumber'] = undefined;



  return exports;
}));


