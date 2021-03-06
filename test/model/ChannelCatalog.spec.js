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
    instance = new BeezUpApi.ChannelCatalog();
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

  describe('ChannelCatalog', function() {
    it('should create an instance of ChannelCatalog', function() {
      // uncomment below and update the code to test ChannelCatalog
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be.a(BeezUpApi.ChannelCatalog);
    });

    it('should have the property productCount (base name: "productCount")', function() {
      // uncomment below and update the code to test the property productCount
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property isMarketplace (base name: "isMarketplace")', function() {
      // uncomment below and update the code to test the property isMarketplace
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property channelCatalogId (base name: "channelCatalogId")', function() {
      // uncomment below and update the code to test the property channelCatalogId
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property generalSettings (base name: "generalSettings")', function() {
      // uncomment below and update the code to test the property generalSettings
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property costSettings (base name: "costSettings")', function() {
      // uncomment below and update the code to test the property costSettings
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property columnMappings (base name: "columnMappings")', function() {
      // uncomment below and update the code to test the property columnMappings
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property exclusionFilters (base name: "exclusionFilters")', function() {
      // uncomment below and update the code to test the property exclusionFilters
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property exportUrl (base name: "exportUrl")', function() {
      // uncomment below and update the code to test the property exportUrl
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new BeezUpApi.ChannelCatalog();
      //expect(instance).to.be();
    });

  });

}));
