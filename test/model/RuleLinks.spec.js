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
    instance = new BeezUpApi.RuleLinks();
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

  describe('RuleLinks', function() {
    it('should create an instance of RuleLinks', function() {
      // uncomment below and update the code to test RuleLinks
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be.a(BeezUpApi.RuleLinks);
    });

    it('should have the property self (base name: "self")', function() {
      // uncomment below and update the code to test the property self
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property moveup (base name: "moveup")', function() {
      // uncomment below and update the code to test the property moveup
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property movedown (base name: "movedown")', function() {
      // uncomment below and update the code to test the property movedown
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property enable (base name: "enable")', function() {
      // uncomment below and update the code to test the property enable
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property disable (base name: "disable")', function() {
      // uncomment below and update the code to test the property disable
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

    it('should have the property reportFilter (base name: "reportFilter")', function() {
      // uncomment below and update the code to test the property reportFilter
      //var instane = new BeezUpApi.RuleLinks();
      //expect(instance).to.be();
    });

  });

}));