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
    define(['ApiClient', 'model/BeezUPCommonChannelCatalogId', 'model/BeezUPCommonChannelId', 'model/BeezUPCommonMarketplaceAccountId', 'model/BeezUPCommonMarketplaceBusinessCode', 'model/BeezUPCommonMarketplaceTechnicalCode', 'model/BeezUPCommonStoreId', 'model/MarketplaceChannelCatalogLinks', 'model/MarketplaceChannelCatalogLovLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeezUPCommonChannelCatalogId'), require('./BeezUPCommonChannelId'), require('./BeezUPCommonMarketplaceAccountId'), require('./BeezUPCommonMarketplaceBusinessCode'), require('./BeezUPCommonMarketplaceTechnicalCode'), require('./BeezUPCommonStoreId'), require('./MarketplaceChannelCatalogLinks'), require('./MarketplaceChannelCatalogLovLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.MarketplaceChannelCatalog = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.BeezUPCommonChannelCatalogId, root.BeezUpApi.BeezUPCommonChannelId, root.BeezUpApi.BeezUPCommonMarketplaceAccountId, root.BeezUpApi.BeezUPCommonMarketplaceBusinessCode, root.BeezUpApi.BeezUPCommonMarketplaceTechnicalCode, root.BeezUpApi.BeezUPCommonStoreId, root.BeezUpApi.MarketplaceChannelCatalogLinks, root.BeezUpApi.MarketplaceChannelCatalogLovLinks);
  }
}(this, function(ApiClient, BeezUPCommonChannelCatalogId, BeezUPCommonChannelId, BeezUPCommonMarketplaceAccountId, BeezUPCommonMarketplaceBusinessCode, BeezUPCommonMarketplaceTechnicalCode, BeezUPCommonStoreId, MarketplaceChannelCatalogLinks, MarketplaceChannelCatalogLovLinks) {
  'use strict';




  /**
   * The MarketplaceChannelCatalog model module.
   * @module model/MarketplaceChannelCatalog
   * @version 2.0
   */

  /**
   * Constructs a new <code>MarketplaceChannelCatalog</code>.
   * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
   * @alias module:model/MarketplaceChannelCatalog
   * @class
   * @param marketplaceTechnicalCode {module:model/BeezUPCommonMarketplaceTechnicalCode} 
   * @param marketplaceBusinessCode {module:model/BeezUPCommonMarketplaceBusinessCode} 
   * @param marketplaceMarketPlaceId {String} The marketplace identifier in the marketplace
   * @param marketplaceIsoCountryCodeAlpha2 {String} The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)
   * @param beezUPChannelId {module:model/BeezUPCommonChannelId} 
   * @param beezUPChannelCatalogId {module:model/BeezUPCommonChannelCatalogId} 
   * @param beezUPStoreId {module:model/BeezUPCommonStoreId} 
   * @param beezUPStoreName {String} The store name
   * @param lovLinks {module:model/MarketplaceChannelCatalogLovLinks} 
   * @param links {module:model/MarketplaceChannelCatalogLinks} 
   */
  var exports = function(marketplaceTechnicalCode, marketplaceBusinessCode, marketplaceMarketPlaceId, marketplaceIsoCountryCodeAlpha2, beezUPChannelId, beezUPChannelCatalogId, beezUPStoreId, beezUPStoreName, lovLinks, links) {
    var _this = this;

    _this['marketplaceTechnicalCode'] = marketplaceTechnicalCode;
    _this['marketplaceBusinessCode'] = marketplaceBusinessCode;
    _this['marketplaceMarketPlaceId'] = marketplaceMarketPlaceId;
    _this['marketplaceIsoCountryCodeAlpha2'] = marketplaceIsoCountryCodeAlpha2;
    _this['beezUPChannelId'] = beezUPChannelId;
    _this['beezUPChannelCatalogId'] = beezUPChannelCatalogId;
    _this['beezUPStoreId'] = beezUPStoreId;
    _this['beezUPStoreName'] = beezUPStoreName;


    _this['lovLinks'] = lovLinks;
    _this['links'] = links;
  };

  /**
   * Constructs a <code>MarketplaceChannelCatalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketplaceChannelCatalog} obj Optional instance to populate.
   * @return {module:model/MarketplaceChannelCatalog} The populated <code>MarketplaceChannelCatalog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marketplaceTechnicalCode')) {
        obj['marketplaceTechnicalCode'] = BeezUPCommonMarketplaceTechnicalCode.constructFromObject(data['marketplaceTechnicalCode']);
      }
      if (data.hasOwnProperty('marketplaceBusinessCode')) {
        obj['marketplaceBusinessCode'] = BeezUPCommonMarketplaceBusinessCode.constructFromObject(data['marketplaceBusinessCode']);
      }
      if (data.hasOwnProperty('marketplaceMarketPlaceId')) {
        obj['marketplaceMarketPlaceId'] = ApiClient.convertToType(data['marketplaceMarketPlaceId'], 'String');
      }
      if (data.hasOwnProperty('marketplaceIsoCountryCodeAlpha2')) {
        obj['marketplaceIsoCountryCodeAlpha2'] = ApiClient.convertToType(data['marketplaceIsoCountryCodeAlpha2'], 'String');
      }
      if (data.hasOwnProperty('beezUPChannelId')) {
        obj['beezUPChannelId'] = BeezUPCommonChannelId.constructFromObject(data['beezUPChannelId']);
      }
      if (data.hasOwnProperty('beezUPChannelCatalogId')) {
        obj['beezUPChannelCatalogId'] = BeezUPCommonChannelCatalogId.constructFromObject(data['beezUPChannelCatalogId']);
      }
      if (data.hasOwnProperty('beezUPStoreId')) {
        obj['beezUPStoreId'] = BeezUPCommonStoreId.constructFromObject(data['beezUPStoreId']);
      }
      if (data.hasOwnProperty('beezUPStoreName')) {
        obj['beezUPStoreName'] = ApiClient.convertToType(data['beezUPStoreName'], 'String');
      }
      if (data.hasOwnProperty('marketplaceMerchantIdentifiers')) {
        obj['marketplaceMerchantIdentifiers'] = ApiClient.convertToType(data['marketplaceMerchantIdentifiers'], {'String': 'String'});
      }
      if (data.hasOwnProperty('marketplaceAccountId')) {
        obj['marketplaceAccountId'] = BeezUPCommonMarketplaceAccountId.constructFromObject(data['marketplaceAccountId']);
      }
      if (data.hasOwnProperty('lovLinks')) {
        obj['lovLinks'] = MarketplaceChannelCatalogLovLinks.constructFromObject(data['lovLinks']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = MarketplaceChannelCatalogLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BeezUPCommonMarketplaceTechnicalCode} marketplaceTechnicalCode
   */
  exports.prototype['marketplaceTechnicalCode'] = undefined;
  /**
   * @member {module:model/BeezUPCommonMarketplaceBusinessCode} marketplaceBusinessCode
   */
  exports.prototype['marketplaceBusinessCode'] = undefined;
  /**
   * The marketplace identifier in the marketplace
   * @member {String} marketplaceMarketPlaceId
   */
  exports.prototype['marketplaceMarketPlaceId'] = undefined;
  /**
   * The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)
   * @member {String} marketplaceIsoCountryCodeAlpha2
   */
  exports.prototype['marketplaceIsoCountryCodeAlpha2'] = undefined;
  /**
   * @member {module:model/BeezUPCommonChannelId} beezUPChannelId
   */
  exports.prototype['beezUPChannelId'] = undefined;
  /**
   * @member {module:model/BeezUPCommonChannelCatalogId} beezUPChannelCatalogId
   */
  exports.prototype['beezUPChannelCatalogId'] = undefined;
  /**
   * @member {module:model/BeezUPCommonStoreId} beezUPStoreId
   */
  exports.prototype['beezUPStoreId'] = undefined;
  /**
   * The store name
   * @member {String} beezUPStoreName
   */
  exports.prototype['beezUPStoreName'] = undefined;
  /**
   * The marketplace merchant identifier list
   * @member {Object.<String, String>} marketplaceMerchantIdentifiers
   */
  exports.prototype['marketplaceMerchantIdentifiers'] = undefined;
  /**
   * @member {module:model/BeezUPCommonMarketplaceAccountId} marketplaceAccountId
   */
  exports.prototype['marketplaceAccountId'] = undefined;
  /**
   * @member {module:model/MarketplaceChannelCatalogLovLinks} lovLinks
   */
  exports.prototype['lovLinks'] = undefined;
  /**
   * @member {module:model/MarketplaceChannelCatalogLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));

