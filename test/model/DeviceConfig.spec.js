/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.3
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
    instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
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

  describe('DeviceConfig', function() {
    it('should create an instance of DeviceConfig', function() {
      // uncomment below and update the code to test DeviceConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.DeviceConfig);
    });

    it('should have the property acknowledged (base name: "acknowledged")', function() {
      // uncomment below and update the code to test the property acknowledged
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be();
    });

    it('should have the property binaryData (base name: "binaryData")', function() {
      // uncomment below and update the code to test the property binaryData
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be();
    });

    it('should have the property cloudUpdateTime (base name: "cloudUpdateTime")', function() {
      // uncomment below and update the code to test the property cloudUpdateTime
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be();
    });

    it('should have the property deviceAckTime (base name: "deviceAckTime")', function() {
      // uncomment below and update the code to test the property deviceAckTime
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceConfig();
      //expect(instance).to.be();
    });

  });

}));
