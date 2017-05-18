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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BeezUpApi);
  }
}(this, function(expect, BeezUpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BeezUpApi.Rule();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Rule', function() {
    it('should create an instance of Rule', function() {
      // uncomment below and update the code to test Rule
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be.a(BeezUpApi.Rule);
    });

    it('should have the property ruleId (base name: "ruleId")', function() {
      // uncomment below and update the code to test the property ruleId
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property ruleName (base name: "ruleName")', function() {
      // uncomment below and update the code to test the property ruleName
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property lastExecutionStatus (base name: "lastExecutionStatus")', function() {
      // uncomment below and update the code to test the property lastExecutionStatus
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property lastExecutionUtcDate (base name: "lastExecutionUtcDate")', function() {
      // uncomment below and update the code to test the property lastExecutionUtcDate
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property actionName (base name: "actionName")', function() {
      // uncomment below and update the code to test the property actionName
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property reportFilterId (base name: "reportFilterId")', function() {
      // uncomment below and update the code to test the property reportFilterId
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property validityStartUtcDate (base name: "validityStartUtcDate")', function() {
      // uncomment below and update the code to test the property validityStartUtcDate
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property validityEndUtcDate (base name: "validityEndUtcDate")', function() {
      // uncomment below and update the code to test the property validityEndUtcDate
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new BeezUpApi.Rule();
      //expect(instance).to.be();
    });

  });

}));