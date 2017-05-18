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
    define(['ApiClient', 'model/AccountId', 'model/BeezUPCommonCurrencyCode', 'model/BeezUPCommonHttpUrl', 'model/BeezUPCommonMarketplaceBusinessCode', 'model/BeezUPCommonMarketplaceTechnicalCode', 'model/BeezUPOrderId', 'model/BeezUPOrderStatus', 'model/Etag', 'model/MarketplaceOrderId', 'model/MarketplaceOrderStatus', 'model/OrderBuyerName', 'model/OrderHeader', 'model/OrderItem', 'model/OrderLinks', 'model/OrderMerchantECommerceSoftwareName', 'model/OrderMerchantECommerceSoftwareVersion', 'model/OrderMerchantOrderId', 'model/OrderTransitionLinks', 'model/Processing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BeezUPCommonCurrencyCode'), require('./BeezUPCommonHttpUrl'), require('./BeezUPCommonMarketplaceBusinessCode'), require('./BeezUPCommonMarketplaceTechnicalCode'), require('./BeezUPOrderId'), require('./BeezUPOrderStatus'), require('./Etag'), require('./MarketplaceOrderId'), require('./MarketplaceOrderStatus'), require('./OrderBuyerName'), require('./OrderHeader'), require('./OrderItem'), require('./OrderLinks'), require('./OrderMerchantECommerceSoftwareName'), require('./OrderMerchantECommerceSoftwareVersion'), require('./OrderMerchantOrderId'), require('./OrderTransitionLinks'), require('./Processing'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.Order = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.AccountId, root.BeezUpApi.BeezUPCommonCurrencyCode, root.BeezUpApi.BeezUPCommonHttpUrl, root.BeezUpApi.BeezUPCommonMarketplaceBusinessCode, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode, root.BeezUpApi.BeezUPOrderId, root.BeezUpApi.BeezUPOrderStatus, root.BeezUpApi.Etag, root.BeezUpApi.MarketplaceOrderId, root.BeezUpApi.MarketplaceOrderStatus, root.BeezUpApi.OrderBuyerName, root.BeezUpApi.OrderHeader, root.BeezUpApi.OrderItem, root.BeezUpApi.OrderLinks, root.BeezUpApi.OrderMerchantECommerceSoftwareName, root.BeezUpApi.OrderMerchantECommerceSoftwareVersion, root.BeezUpApi.OrderMerchantOrderId, root.BeezUpApi.OrderTransitionLinks, root.BeezUpApi.Processing);
  }
}(this, function(ApiClient, AccountId, BeezUPCommonCurrencyCode, BeezUPCommonHttpUrl, BeezUPCommonMarketplaceBusinessCode, BeezUPCommonMarketplaceTechnicalCode, BeezUPOrderId, BeezUPOrderStatus, Etag, MarketplaceOrderId, MarketplaceOrderStatus, OrderBuyerName, OrderHeader, OrderItem, OrderLinks, OrderMerchantECommerceSoftwareName, OrderMerchantECommerceSoftwareVersion, OrderMerchantOrderId, OrderTransitionLinks, Processing) {
  'use strict';




  /**
   * The Order model module.
   * @module model/Order
   * @version 2.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   * @implements module:model/OrderHeader
   * @param marketplaceTechnicalCode {module:model/BeezUPCommonMarketplaceTechnicalCode} 
   * @param accountId {module:model/AccountId} 
   * @param beezUPOrderId {module:model/BeezUPOrderId} 
   * @param marketplaceBusinessCode {module:model/BeezUPCommonMarketplaceBusinessCode} 
   * @param orderMarketplaceOrderId {module:model/MarketplaceOrderId} 
   * @param orderStatusBeezUPOrderStatus {module:model/BeezUPOrderStatus} 
   * @param orderPurchaseUtcDate {Date} The purchase date of this order
   * @param orderLastModificationUtcDate {Date} The last modification UTC date done by BeezUP of this order
   * @param orderMarketplaceLastModificationUtcDate {Date} The last modification UTC date done by the marketplace on this order
   * @param processing {module:model/Processing} 
   * @param etag {module:model/Etag} 
   * @param links {module:model/OrderLinks} 
   * @param orderItems {Array.<module:model/OrderItem>} 
   * @param transitionLinks {module:model/OrderTransitionLinks} 
   */
  var exports = function(marketplaceTechnicalCode, accountId, beezUPOrderId, marketplaceBusinessCode, orderMarketplaceOrderId, orderStatusBeezUPOrderStatus, orderPurchaseUtcDate, orderLastModificationUtcDate, orderMarketplaceLastModificationUtcDate, processing, etag, links, orderItems, transitionLinks) {
    var _this = this;

    OrderHeader.call(_this, marketplaceTechnicalCode, accountId, beezUPOrderId, marketplaceBusinessCode, orderMarketplaceOrderId, orderStatusBeezUPOrderStatus, orderPurchaseUtcDate, orderLastModificationUtcDate, orderMarketplaceLastModificationUtcDate, processing, etag, links);
    _this['links'] = links;









































    _this['orderItems'] = orderItems;
    _this['transitionLinks'] = transitionLinks;
  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      OrderHeader.constructFromObject(data, obj);
      if (data.hasOwnProperty('links')) {
        obj['links'] = OrderLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('order_MarketPlaceChannel')) {
        obj['order_MarketPlaceChannel'] = ApiClient.convertToType(data['order_MarketPlaceChannel'], 'String');
      }
      if (data.hasOwnProperty('order_TotalTax')) {
        obj['order_TotalTax'] = ApiClient.convertToType(data['order_TotalTax'], 'Number');
      }
      if (data.hasOwnProperty('order_TotalCommission')) {
        obj['order_TotalCommission'] = ApiClient.convertToType(data['order_TotalCommission'], 'Number');
      }
      if (data.hasOwnProperty('order_PaymentMethod')) {
        obj['order_PaymentMethod'] = ApiClient.convertToType(data['order_PaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('order_PayingUtcDate')) {
        obj['order_PayingUtcDate'] = ApiClient.convertToType(data['order_PayingUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('order_Comment')) {
        obj['order_Comment'] = ApiClient.convertToType(data['order_Comment'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_Civility')) {
        obj['order_Shipping_Civility'] = ApiClient.convertToType(data['order_Shipping_Civility'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_CompanyName')) {
        obj['order_Shipping_CompanyName'] = ApiClient.convertToType(data['order_Shipping_CompanyName'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressName')) {
        obj['order_Shipping_AddressName'] = ApiClient.convertToType(data['order_Shipping_AddressName'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_Email')) {
        obj['order_Shipping_Email'] = ApiClient.convertToType(data['order_Shipping_Email'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressLine1')) {
        obj['order_Shipping_AddressLine1'] = ApiClient.convertToType(data['order_Shipping_AddressLine1'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressLine2')) {
        obj['order_Shipping_AddressLine2'] = ApiClient.convertToType(data['order_Shipping_AddressLine2'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressLine3')) {
        obj['order_Shipping_AddressLine3'] = ApiClient.convertToType(data['order_Shipping_AddressLine3'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressPostalCode')) {
        obj['order_Shipping_AddressPostalCode'] = ApiClient.convertToType(data['order_Shipping_AddressPostalCode'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressCity')) {
        obj['order_Shipping_AddressCity'] = ApiClient.convertToType(data['order_Shipping_AddressCity'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressStateOrRegion')) {
        obj['order_Shipping_AddressStateOrRegion'] = ApiClient.convertToType(data['order_Shipping_AddressStateOrRegion'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressCountryName')) {
        obj['order_Shipping_AddressCountryName'] = ApiClient.convertToType(data['order_Shipping_AddressCountryName'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_AddressCountryIsoCodeAlpha2')) {
        obj['order_Shipping_AddressCountryIsoCodeAlpha2'] = ApiClient.convertToType(data['order_Shipping_AddressCountryIsoCodeAlpha2'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_Phone')) {
        obj['order_Shipping_Phone'] = ApiClient.convertToType(data['order_Shipping_Phone'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_MobilePhone')) {
        obj['order_Shipping_MobilePhone'] = ApiClient.convertToType(data['order_Shipping_MobilePhone'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_Price')) {
        obj['order_Shipping_Price'] = ApiClient.convertToType(data['order_Shipping_Price'], 'Number');
      }
      if (data.hasOwnProperty('order_Shipping_Method')) {
        obj['order_Shipping_Method'] = ApiClient.convertToType(data['order_Shipping_Method'], 'String');
      }
      if (data.hasOwnProperty('order_Shipping_ShippingTax')) {
        obj['order_Shipping_ShippingTax'] = ApiClient.convertToType(data['order_Shipping_ShippingTax'], 'Number');
      }
      if (data.hasOwnProperty('order_Shipping_EarliestShipUtcDate')) {
        obj['order_Shipping_EarliestShipUtcDate'] = ApiClient.convertToType(data['order_Shipping_EarliestShipUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('order_Shipping_LatestShipUtcDate')) {
        obj['order_Shipping_LatestShipUtcDate'] = ApiClient.convertToType(data['order_Shipping_LatestShipUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('order_Buyer_Identifier')) {
        obj['order_Buyer_Identifier'] = ApiClient.convertToType(data['order_Buyer_Identifier'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_Civility')) {
        obj['order_Buyer_Civility'] = ApiClient.convertToType(data['order_Buyer_Civility'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_CompanyName')) {
        obj['order_Buyer_CompanyName'] = ApiClient.convertToType(data['order_Buyer_CompanyName'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_Email')) {
        obj['order_Buyer_Email'] = ApiClient.convertToType(data['order_Buyer_Email'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressLine1')) {
        obj['order_Buyer_AddressLine1'] = ApiClient.convertToType(data['order_Buyer_AddressLine1'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressLine2')) {
        obj['order_Buyer_AddressLine2'] = ApiClient.convertToType(data['order_Buyer_AddressLine2'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressLine3')) {
        obj['order_Buyer_AddressLine3'] = ApiClient.convertToType(data['order_Buyer_AddressLine3'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressPostalCode')) {
        obj['order_Buyer_AddressPostalCode'] = ApiClient.convertToType(data['order_Buyer_AddressPostalCode'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressCity')) {
        obj['order_Buyer_AddressCity'] = ApiClient.convertToType(data['order_Buyer_AddressCity'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressStateOrRegion')) {
        obj['order_Buyer_AddressStateOrRegion'] = ApiClient.convertToType(data['order_Buyer_AddressStateOrRegion'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressCountryName')) {
        obj['order_Buyer_AddressCountryName'] = ApiClient.convertToType(data['order_Buyer_AddressCountryName'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_AddressCountryIsoCodeAlpha2')) {
        obj['order_Buyer_AddressCountryIsoCodeAlpha2'] = ApiClient.convertToType(data['order_Buyer_AddressCountryIsoCodeAlpha2'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_Phone')) {
        obj['order_Buyer_Phone'] = ApiClient.convertToType(data['order_Buyer_Phone'], 'String');
      }
      if (data.hasOwnProperty('order_Buyer_MobilePhone')) {
        obj['order_Buyer_MobilePhone'] = ApiClient.convertToType(data['order_Buyer_MobilePhone'], 'String');
      }
      if (data.hasOwnProperty('order_OrderSourceUri')) {
        obj['order_OrderSourceUri'] = ApiClient.convertToType(data['order_OrderSourceUri'], 'String');
      }
      if (data.hasOwnProperty('order_OrderItemsSourceUri')) {
        obj['order_OrderItemsSourceUri'] = ApiClient.convertToType(data['order_OrderItemsSourceUri'], 'String');
      }
      if (data.hasOwnProperty('orderItems')) {
        obj['orderItems'] = ApiClient.convertToType(data['orderItems'], [OrderItem]);
      }
      if (data.hasOwnProperty('transitionLinks')) {
        obj['transitionLinks'] = OrderTransitionLinks.constructFromObject(data['transitionLinks']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OrderLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * Useful to identify the origin of the order. For example in Amazon.
   * @member {String} order_MarketPlaceChannel
   */
  exports.prototype['order_MarketPlaceChannel'] = undefined;
  /**
   * The total tax of this order
   * @member {Number} order_TotalTax
   */
  exports.prototype['order_TotalTax'] = undefined;
  /**
   * The total commission of this order
   * @member {Number} order_TotalCommission
   */
  exports.prototype['order_TotalCommission'] = undefined;
  /**
   * The payment method of this order
   * @member {String} order_PaymentMethod
   */
  exports.prototype['order_PaymentMethod'] = undefined;
  /**
   * The UTC date of the payment of this order
   * @member {Date} order_PayingUtcDate
   */
  exports.prototype['order_PayingUtcDate'] = undefined;
  /**
   * The comment associated to this order
   * @member {String} order_Comment
   */
  exports.prototype['order_Comment'] = undefined;
  /**
   * The civility of the person in the shipping address for this order
   * @member {String} order_Shipping_Civility
   */
  exports.prototype['order_Shipping_Civility'] = undefined;
  /**
   * The company name of the shipping address for this order
   * @member {String} order_Shipping_CompanyName
   */
  exports.prototype['order_Shipping_CompanyName'] = undefined;
  /**
   * The name of the person in the shipping address for this order
   * @member {String} order_Shipping_AddressName
   */
  exports.prototype['order_Shipping_AddressName'] = undefined;
  /**
   * The email of the person in the shipping address for this order
   * @member {String} order_Shipping_Email
   */
  exports.prototype['order_Shipping_Email'] = undefined;
  /**
   * The shipping address line 1 of this order
   * @member {String} order_Shipping_AddressLine1
   */
  exports.prototype['order_Shipping_AddressLine1'] = undefined;
  /**
   * The shipping address line 2 of this order
   * @member {String} order_Shipping_AddressLine2
   */
  exports.prototype['order_Shipping_AddressLine2'] = undefined;
  /**
   * The shipping address line 3 of this order
   * @member {String} order_Shipping_AddressLine3
   */
  exports.prototype['order_Shipping_AddressLine3'] = undefined;
  /**
   * The shipping address postal code of this order
   * @member {String} order_Shipping_AddressPostalCode
   */
  exports.prototype['order_Shipping_AddressPostalCode'] = undefined;
  /**
   * The shipping address city of this order
   * @member {String} order_Shipping_AddressCity
   */
  exports.prototype['order_Shipping_AddressCity'] = undefined;
  /**
   * The shipping address state or region of this order
   * @member {String} order_Shipping_AddressStateOrRegion
   */
  exports.prototype['order_Shipping_AddressStateOrRegion'] = undefined;
  /**
   * The shipping address country name
   * @member {String} order_Shipping_AddressCountryName
   */
  exports.prototype['order_Shipping_AddressCountryName'] = undefined;
  /**
   * The shipping address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
   * @member {String} order_Shipping_AddressCountryIsoCodeAlpha2
   */
  exports.prototype['order_Shipping_AddressCountryIsoCodeAlpha2'] = undefined;
  /**
   * The phone number of the person in the shipping address for this order
   * @member {String} order_Shipping_Phone
   */
  exports.prototype['order_Shipping_Phone'] = undefined;
  /**
   * The mobile phone number of the person in the shipping address for this order
   * @member {String} order_Shipping_MobilePhone
   */
  exports.prototype['order_Shipping_MobilePhone'] = undefined;
  /**
   * The shipping price of this order
   * @member {Number} order_Shipping_Price
   */
  exports.prototype['order_Shipping_Price'] = undefined;
  /**
   * The shipping method of this order
   * @member {String} order_Shipping_Method
   */
  exports.prototype['order_Shipping_Method'] = undefined;
  /**
   * The shipping tax for this order
   * @member {Number} order_Shipping_ShippingTax
   */
  exports.prototype['order_Shipping_ShippingTax'] = undefined;
  /**
   * The UTC date of the earliest ship for this order
   * @member {Date} order_Shipping_EarliestShipUtcDate
   */
  exports.prototype['order_Shipping_EarliestShipUtcDate'] = undefined;
  /**
   * The UTC date of the latest ship for this order
   * @member {Date} order_Shipping_LatestShipUtcDate
   */
  exports.prototype['order_Shipping_LatestShipUtcDate'] = undefined;
  /**
   * The buyer identifier for this order
   * @member {String} order_Buyer_Identifier
   */
  exports.prototype['order_Buyer_Identifier'] = undefined;
  /**
   * The buyer civility for this order
   * @member {String} order_Buyer_Civility
   */
  exports.prototype['order_Buyer_Civility'] = undefined;
  /**
   * The buyer company name for this order
   * @member {String} order_Buyer_CompanyName
   */
  exports.prototype['order_Buyer_CompanyName'] = undefined;
  /**
   * The email of the buyer for this order
   * @member {String} order_Buyer_Email
   */
  exports.prototype['order_Buyer_Email'] = undefined;
  /**
   * The Buyer address line 1 of this order
   * @member {String} order_Buyer_AddressLine1
   */
  exports.prototype['order_Buyer_AddressLine1'] = undefined;
  /**
   * The Buyer address line 2 of this order
   * @member {String} order_Buyer_AddressLine2
   */
  exports.prototype['order_Buyer_AddressLine2'] = undefined;
  /**
   * The Buyer address line 3 of this order
   * @member {String} order_Buyer_AddressLine3
   */
  exports.prototype['order_Buyer_AddressLine3'] = undefined;
  /**
   * The Buyer address postal code of this order
   * @member {String} order_Buyer_AddressPostalCode
   */
  exports.prototype['order_Buyer_AddressPostalCode'] = undefined;
  /**
   * The Buyer address city of this order
   * @member {String} order_Buyer_AddressCity
   */
  exports.prototype['order_Buyer_AddressCity'] = undefined;
  /**
   * The Buyer address state or region of this order
   * @member {String} order_Buyer_AddressStateOrRegion
   */
  exports.prototype['order_Buyer_AddressStateOrRegion'] = undefined;
  /**
   * The Buyer address country name
   * @member {String} order_Buyer_AddressCountryName
   */
  exports.prototype['order_Buyer_AddressCountryName'] = undefined;
  /**
   * The Buyer address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
   * @member {String} order_Buyer_AddressCountryIsoCodeAlpha2
   */
  exports.prototype['order_Buyer_AddressCountryIsoCodeAlpha2'] = undefined;
  /**
   * The phone number of the buyer for this order
   * @member {String} order_Buyer_Phone
   */
  exports.prototype['order_Buyer_Phone'] = undefined;
  /**
   * The mobile phone number of the buyer for this order
   * @member {String} order_Buyer_MobilePhone
   */
  exports.prototype['order_Buyer_MobilePhone'] = undefined;
  /**
   * Technical information: The url to the source of this order. We received this information from the marketplace. 
   * @member {String} order_OrderSourceUri
   */
  exports.prototype['order_OrderSourceUri'] = undefined;
  /**
   * Technical information: The url to the source of this order items. We received this information from the marketplace. 
   * @member {String} order_OrderItemsSourceUri
   */
  exports.prototype['order_OrderItemsSourceUri'] = undefined;
  /**
   * @member {Array.<module:model/OrderItem>} orderItems
   */
  exports.prototype['orderItems'] = undefined;
  /**
   * @member {module:model/OrderTransitionLinks} transitionLinks
   */
  exports.prototype['transitionLinks'] = undefined;

  // Implement OrderHeader interface:
  /**
   * @member {module:model/BeezUPCommonMarketplaceTechnicalCode} marketplaceTechnicalCode
   */
exports.prototype['marketplaceTechnicalCode'] = undefined;

  /**
   * @member {module:model/AccountId} accountId
   */
exports.prototype['accountId'] = undefined;

  /**
   * @member {module:model/BeezUPOrderId} beezUPOrderId
   */
exports.prototype['beezUPOrderId'] = undefined;

  /**
   * @member {module:model/BeezUPCommonHttpUrl} beezUPOrderUrl
   */
exports.prototype['beezUPOrderUrl'] = undefined;

  /**
   * @member {module:model/BeezUPCommonMarketplaceBusinessCode} marketplaceBusinessCode
   */
exports.prototype['marketplaceBusinessCode'] = undefined;

  /**
   * @member {module:model/MarketplaceOrderId} order_MarketplaceOrderId
   */
exports.prototype['order_MarketplaceOrderId'] = undefined;

  /**
   * @member {module:model/BeezUPOrderStatus} order_Status_BeezUPOrderStatus
   */
exports.prototype['order_Status_BeezUPOrderStatus'] = undefined;

  /**
   * @member {module:model/MarketplaceOrderStatus} order_Status_MarketplaceOrderStatus
   */
exports.prototype['order_Status_MarketplaceOrderStatus'] = undefined;

  /**
   * @member {module:model/OrderMerchantOrderId} order_MerchantOrderId
   */
exports.prototype['order_MerchantOrderId'] = undefined;

  /**
   * @member {module:model/OrderMerchantECommerceSoftwareName} order_MerchantECommerceSoftwareName
   */
exports.prototype['order_MerchantECommerceSoftwareName'] = undefined;

  /**
   * @member {module:model/OrderMerchantECommerceSoftwareVersion} order_MerchantECommerceSoftwareVersion
   */
exports.prototype['order_MerchantECommerceSoftwareVersion'] = undefined;

  /**
   * The purchase date of this order
   * @member {Date} order_PurchaseUtcDate
   */
exports.prototype['order_PurchaseUtcDate'] = undefined;

  /**
   * The last modification UTC date done by BeezUP of this order
   * @member {Date} order_LastModificationUtcDate
   */
exports.prototype['order_LastModificationUtcDate'] = undefined;

  /**
   * The last modification UTC date done by the marketplace on this order
   * @member {Date} order_MarketplaceLastModificationUtcDate
   */
exports.prototype['order_MarketplaceLastModificationUtcDate'] = undefined;

  /**
   * @member {module:model/OrderBuyerName} order_Buyer_Name
   */
exports.prototype['order_Buyer_Name'] = undefined;

  /**
   * The total price of this order (corresponding to the amount paid by the customer)
   * @member {Number} order_TotalPrice
   */
exports.prototype['order_TotalPrice'] = undefined;

  /**
   * @member {module:model/BeezUPCommonCurrencyCode} order_CurrencyCode
   */
exports.prototype['order_CurrencyCode'] = undefined;

  /**
   * @member {module:model/Processing} processing
   */
exports.prototype['processing'] = undefined;

  /**
   * @member {module:model/Etag} etag
   */
exports.prototype['etag'] = undefined;

  /**
   * @member {module:model/OrderHeaderLinks} links
   */
exports.prototype['links'] = undefined;



  return exports;
}));

