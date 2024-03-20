/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.17
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OmniCoreModelAndStateManagementApi);
  }
}(this, function(expect, OmniCoreModelAndStateManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OmniCoreModelAndStateManagementApi.Sink();
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

  describe('Sink', function() {
    it('should create an instance of Sink', function() {
      // uncomment below and update the code to test Sink
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.Sink);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property sink (base name: "sink")', function() {
      // uncomment below and update the code to test the property sink
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property createdon (base name: "createdon")', function() {
      // uncomment below and update the code to test the property createdon
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

    it('should have the property updatedon (base name: "updatedon")', function() {
      // uncomment below and update the code to test the property updatedon
      //var instance = new OmniCoreModelAndStateManagementApi.Sink();
      //expect(instance).to.be();
    });

  });

}));
