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
    instance = new BeezUpApi.ReportByCategory();
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

  describe('ReportByCategory', function() {
    it('should create an instance of ReportByCategory', function() {
      // uncomment below and update the code to test ReportByCategory
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be.a(BeezUpApi.ReportByCategory);
    });

    it('should have the property catalogCategoryId (base name: "catalogCategoryId")', function() {
      // uncomment below and update the code to test the property catalogCategoryId
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property catalogCategoryPath (base name: "catalogCategoryPath")', function() {
      // uncomment below and update the code to test the property catalogCategoryPath
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property enabledProductCount (base name: "enabledProductCount")', function() {
      // uncomment below and update the code to test the property enabledProductCount
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property catalogProductCount (base name: "catalogProductCount")', function() {
      // uncomment below and update the code to test the property catalogProductCount
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property clickCount (base name: "clickCount")', function() {
      // uncomment below and update the code to test the property clickCount
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property orderCount (base name: "orderCount")', function() {
      // uncomment below and update the code to test the property orderCount
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property turnOver (base name: "turnOver")', function() {
      // uncomment below and update the code to test the property turnOver
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property margin (base name: "margin")', function() {
      // uncomment below and update the code to test the property margin
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property performanceIndicator (base name: "performanceIndicator")', function() {
      // uncomment below and update the code to test the property performanceIndicator
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new BeezUpApi.ReportByCategory();
      //expect(instance).to.be();
    });

  });

}));
