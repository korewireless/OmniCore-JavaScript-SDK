/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.16
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
    instance = new OmniCoreModelAndStateManagementApi.Audit();
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

  describe('Audit', function() {
    it('should create an instance of Audit', function() {
      // uncomment below and update the code to test Audit
      //var instance = new OmniCoreModelAndStateManagementApi.Audit();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.Audit);
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new OmniCoreModelAndStateManagementApi.Audit();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new OmniCoreModelAndStateManagementApi.Audit();
      //expect(instance).to.be();
    });

    it('should have the property actor (base name: "actor")', function() {
      // uncomment below and update the code to test the property actor
      //var instance = new OmniCoreModelAndStateManagementApi.Audit();
      //expect(instance).to.be();
    });

    it('should have the property updatedon (base name: "updatedon")', function() {
      // uncomment below and update the code to test the property updatedon
      //var instance = new OmniCoreModelAndStateManagementApi.Audit();
      //expect(instance).to.be();
    });

  });

}));
