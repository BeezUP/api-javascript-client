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
    define(['ApiClient', 'model/ContractTerminationReason', 'model/ContractTerminationReasonType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContractTerminationReason'), require('./ContractTerminationReasonType'));
  } else {
    // Browser globals (root is window)
    if (!root.BeezUpApi) {
      root.BeezUpApi = {};
    }
    root.BeezUpApi.TerminateContract = factory(root.BeezUpApi.ApiClient, root.BeezUpApi.ContractTerminationReason, root.BeezUpApi.ContractTerminationReasonType);
  }
}(this, function(ApiClient, ContractTerminationReason, ContractTerminationReasonType) {
  'use strict';




  /**
   * The TerminateContract model module.
   * @module model/TerminateContract
   * @version 2.0
   */

  /**
   * Constructs a new <code>TerminateContract</code>.
   * The contract termination info
   * @alias module:model/TerminateContract
   * @class
   * @param contractTerminationReasonType {module:model/ContractTerminationReasonType} 
   */
  var exports = function(contractTerminationReasonType) {
    var _this = this;

    _this['contractTerminationReasonType'] = contractTerminationReasonType;

  };

  /**
   * Constructs a <code>TerminateContract</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TerminateContract} obj Optional instance to populate.
   * @return {module:model/TerminateContract} The populated <code>TerminateContract</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contractTerminationReasonType')) {
        obj['contractTerminationReasonType'] = ContractTerminationReasonType.constructFromObject(data['contractTerminationReasonType']);
      }
      if (data.hasOwnProperty('contractTerminationReason')) {
        obj['contractTerminationReason'] = ContractTerminationReason.constructFromObject(data['contractTerminationReason']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ContractTerminationReasonType} contractTerminationReasonType
   */
  exports.prototype['contractTerminationReasonType'] = undefined;
  /**
   * @member {module:model/ContractTerminationReason} contractTerminationReason
   */
  exports.prototype['contractTerminationReason'] = undefined;



  return exports;
}));


