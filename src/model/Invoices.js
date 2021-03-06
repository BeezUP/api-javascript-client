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
    define(['ApiClient', 'model/Invoice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Invoice'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.Invoices = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.Invoice);
  }
}(this, function(ApiClient, Invoice) {
  'use strict';




  /**
   * The Invoices model module.
   * @module model/Invoices
   * @version 2.0
   */

  /**
   * Constructs a new <code>Invoices</code>.
   * @alias module:model/Invoices
   * @class
   * @param invoices {Array.<module:model/Invoice>} 
   */
  var exports = function(invoices) {
    var _this = this;

    _this['invoices'] = invoices;
  };

  /**
   * Constructs a <code>Invoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoices} obj Optional instance to populate.
   * @return {module:model/Invoices} The populated <code>Invoices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoices')) {
        obj['invoices'] = ApiClient.convertToType(data['invoices'], [Invoice]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Invoice>} invoices
   */
  exports.prototype['invoices'] = undefined;



  return exports;
}));


