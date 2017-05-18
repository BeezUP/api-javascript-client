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
    instance = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
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

  describe('GetChannelCatalogProductInfoListRequest', function() {
    it('should create an instance of GetChannelCatalogProductInfoListRequest', function() {
      // uncomment below and update the code to test GetChannelCatalogProductInfoListRequest
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be.a(BeezUpApi.GetChannelCatalogProductInfoListRequest);
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property overrided (base name: "overrided")', function() {
      // uncomment below and update the code to test the property overrided
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property categoryMapped (base name: "categoryMapped")', function() {
      // uncomment below and update the code to test the property categoryMapped
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property excluded (base name: "excluded")', function() {
      // uncomment below and update the code to test the property excluded
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new BeezUpApi.GetChannelCatalogProductInfoListRequest();
      //expect(instance).to.be();
    });

  });

}));
