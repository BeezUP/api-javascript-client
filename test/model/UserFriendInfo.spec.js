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
    instance = new BeezUpApi.UserFriendInfo();
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

  describe('UserFriendInfo', function() {
    it('should create an instance of UserFriendInfo', function() {
      // uncomment below and update the code to test UserFriendInfo
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be.a(BeezUpApi.UserFriendInfo);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property profilePictureUrl (base name: "profilePictureUrl")', function() {
      // uncomment below and update the code to test the property profilePictureUrl
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property countryIsoCodeAlpha3 (base name: "countryIsoCodeAlpha3")', function() {
      // uncomment below and update the code to test the property countryIsoCodeAlpha3
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

    it('should have the property whatIDo (base name: "whatIDo")', function() {
      // uncomment below and update the code to test the property whatIDo
      //var instane = new BeezUpApi.UserFriendInfo();
      //expect(instance).to.be();
    });

  });

}));
