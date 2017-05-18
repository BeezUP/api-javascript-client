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
    define(['ApiClient', 'model/PublicationFeedReporting', 'model/PublicationType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PublicationFeedReporting'), require('./PublicationType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.PublicationReporting = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.PublicationFeedReporting, root.BeezUpApi.PublicationType);
  }
}(this, function(ApiClient, PublicationFeedReporting, PublicationType) {
  'use strict';




  /**
   * The PublicationReporting model module.
   * @module model/PublicationReporting
   * @version 2.0
   */

  /**
   * Constructs a new <code>PublicationReporting</code>.
   * Model for a publication reporting, can have multiple feeds
   * @alias module:model/PublicationReporting
   * @class
   * @param publicationType {module:model/PublicationType} 
   * @param feeds {Array.<module:model/PublicationFeedReporting>} The feeds that were published
   */
  var exports = function(publicationType, feeds) {
    var _this = this;

    _this['publicationType'] = publicationType;
    _this['feeds'] = feeds;
  };

  /**
   * Constructs a <code>PublicationReporting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicationReporting} obj Optional instance to populate.
   * @return {module:model/PublicationReporting} The populated <code>PublicationReporting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('publicationType')) {
        obj['publicationType'] = PublicationType.constructFromObject(data['publicationType']);
      }
      if (data.hasOwnProperty('feeds')) {
        obj['feeds'] = ApiClient.convertToType(data['feeds'], [PublicationFeedReporting]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PublicationType} publicationType
   */
  exports.prototype['publicationType'] = undefined;
  /**
   * The feeds that were published
   * @member {Array.<module:model/PublicationFeedReporting>} feeds
   */
  exports.prototype['feeds'] = undefined;



  return exports;
}));


