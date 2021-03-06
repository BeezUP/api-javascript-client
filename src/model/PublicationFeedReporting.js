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
    define(['ApiClient', 'model/FeedType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeedType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.PublicationFeedReporting = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.FeedType);
  }
}(this, function(ApiClient, FeedType) {
  'use strict';




  /**
   * The PublicationFeedReporting model module.
   * @module model/PublicationFeedReporting
   * @version 2.0
   */

  /**
   * Constructs a new <code>PublicationFeedReporting</code>.
   * Publication feed reporting
   * @alias module:model/PublicationFeedReporting
   * @class
   * @param feedType {module:model/FeedType} 
   * @param startUtcDate {Date} The feed publication start time (UTC timezone)
   * @param processingStatus {String} The processing status
   */
  var exports = function(feedType, startUtcDate, processingStatus) {
    var _this = this;

    _this['feedType'] = feedType;
    _this['startUtcDate'] = startUtcDate;

    _this['processingStatus'] = processingStatus;









  };

  /**
   * Constructs a <code>PublicationFeedReporting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicationFeedReporting} obj Optional instance to populate.
   * @return {module:model/PublicationFeedReporting} The populated <code>PublicationFeedReporting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('feedType')) {
        obj['feedType'] = FeedType.constructFromObject(data['feedType']);
      }
      if (data.hasOwnProperty('startUtcDate')) {
        obj['startUtcDate'] = ApiClient.convertToType(data['startUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('endUtcDate')) {
        obj['endUtcDate'] = ApiClient.convertToType(data['endUtcDate'], 'Date');
      }
      if (data.hasOwnProperty('processingStatus')) {
        obj['processingStatus'] = ApiClient.convertToType(data['processingStatus'], 'String');
      }
      if (data.hasOwnProperty('exportedProducts')) {
        obj['exportedProducts'] = ApiClient.convertToType(data['exportedProducts'], 'Number');
      }
      if (data.hasOwnProperty('transmittedItems')) {
        obj['transmittedItems'] = ApiClient.convertToType(data['transmittedItems'], 'Number');
      }
      if (data.hasOwnProperty('publishedItems')) {
        obj['publishedItems'] = ApiClient.convertToType(data['publishedItems'], 'Number');
      }
      if (data.hasOwnProperty('publishedItemsWithWarning')) {
        obj['publishedItemsWithWarning'] = ApiClient.convertToType(data['publishedItemsWithWarning'], 'Number');
      }
      if (data.hasOwnProperty('failedItems')) {
        obj['failedItems'] = ApiClient.convertToType(data['failedItems'], 'Number');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('htmlReportUrl')) {
        obj['htmlReportUrl'] = ApiClient.convertToType(data['htmlReportUrl'], 'String');
      }
      if (data.hasOwnProperty('htmlReportGenerationErrorMessage')) {
        obj['htmlReportGenerationErrorMessage'] = ApiClient.convertToType(data['htmlReportGenerationErrorMessage'], 'String');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FeedType} feedType
   */
  exports.prototype['feedType'] = undefined;
  /**
   * The feed publication start time (UTC timezone)
   * @member {Date} startUtcDate
   */
  exports.prototype['startUtcDate'] = undefined;
  /**
   * The feed publication end time (UTC timezone)
   * @member {Date} endUtcDate
   */
  exports.prototype['endUtcDate'] = undefined;
  /**
   * The processing status
   * @member {String} processingStatus
   */
  exports.prototype['processingStatus'] = undefined;
  /**
   * The product count downloaded from BeezUP Export
   * @member {Number} exportedProducts
   */
  exports.prototype['exportedProducts'] = undefined;
  /**
   * The item count (products or offers) sent to the marketplace
   * @member {Number} transmittedItems
   */
  exports.prototype['transmittedItems'] = undefined;
  /**
   * The item count (products or offers) the marketplace flagged as successful
   * @member {Number} publishedItems
   */
  exports.prototype['publishedItems'] = undefined;
  /**
   * The item count (products or offers) the marketplace flagged as successful with warnings
   * @member {Number} publishedItemsWithWarning
   */
  exports.prototype['publishedItemsWithWarning'] = undefined;
  /**
   * The item count (products or offers) the marketplace flagged as failed
   * @member {Number} failedItems
   */
  exports.prototype['failedItems'] = undefined;
  /**
   * The error message
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * The Url for the Html Report generated
   * @member {String} htmlReportUrl
   */
  exports.prototype['htmlReportUrl'] = undefined;
  /**
   * The error message if the Html Report generation failed
   * @member {String} htmlReportGenerationErrorMessage
   */
  exports.prototype['htmlReportGenerationErrorMessage'] = undefined;
  /**
   * Indicates if the publication is completed or not
   * @member {Boolean} completed
   */
  exports.prototype['completed'] = undefined;



  return exports;
}));


