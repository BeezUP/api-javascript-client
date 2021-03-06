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
    instance = new BeezUpApi.ImportationReporting();
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

  describe('ImportationReporting', function() {
    it('should create an instance of ImportationReporting', function() {
      // uncomment below and update the code to test ImportationReporting
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be.a(BeezUpApi.ImportationReporting);
    });

    it('should have the property stepName (base name: "stepName")', function() {
      // uncomment below and update the code to test the property stepName
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property totalProductCount (base name: "totalProductCount")', function() {
      // uncomment below and update the code to test the property totalProductCount
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property totalProductErrorCount (base name: "totalProductErrorCount")', function() {
      // uncomment below and update the code to test the property totalProductErrorCount
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property totalProductSuccessCount (base name: "totalProductSuccessCount")', function() {
      // uncomment below and update the code to test the property totalProductSuccessCount
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateUtcDate (base name: "lastUpdateUtcDate")', function() {
      // uncomment below and update the code to test the property lastUpdateUtcDate
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property autoImported (base name: "autoImported")', function() {
      // uncomment below and update the code to test the property autoImported
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property beginUtcDate (base name: "beginUtcDate")', function() {
      // uncomment below and update the code to test the property beginUtcDate
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property endUtcDate (base name: "endUtcDate")', function() {
      // uncomment below and update the code to test the property endUtcDate
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property inputConfigurationUrl (base name: "inputConfigurationUrl")', function() {
      // uncomment below and update the code to test the property inputConfigurationUrl
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instane = new BeezUpApi.ImportationReporting();
      //expect(instance).to.be();
    });

  });

}));
