/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.12
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
    instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
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

  describe('DeviceRegistry', function() {
    it('should create an instance of DeviceRegistry', function() {
      // uncomment below and update the code to test DeviceRegistry
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.DeviceRegistry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property credentials (base name: "credentials")', function() {
      // uncomment below and update the code to test the property credentials
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property httpConfig (base name: "httpConfig")', function() {
      // uncomment below and update the code to test the property httpConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property mqttConfig (base name: "mqttConfig")', function() {
      // uncomment below and update the code to test the property mqttConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property logLevel (base name: "logLevel")', function() {
      // uncomment below and update the code to test the property logLevel
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property isNatsRoute (base name: "isNatsRoute")', function() {
      // uncomment below and update the code to test the property isNatsRoute
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property eventNotificationConfigs (base name: "eventNotificationConfigs")', function() {
      // uncomment below and update the code to test the property eventNotificationConfigs
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property logNotificationConfig (base name: "logNotificationConfig")', function() {
      // uncomment below and update the code to test the property logNotificationConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property stateNotificationConfig (base name: "stateNotificationConfig")', function() {
      // uncomment below and update the code to test the property stateNotificationConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property customOnboardNotificationConfig (base name: "customOnboardNotificationConfig")', function() {
      // uncomment below and update the code to test the property customOnboardNotificationConfig
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property customOnboardEnabled (base name: "customOnboardEnabled")', function() {
      // uncomment below and update the code to test the property customOnboardEnabled
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property numberOfDevices (base name: "numberOfDevices")', function() {
      // uncomment below and update the code to test the property numberOfDevices
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property numberOfGateways (base name: "numberOfGateways")', function() {
      // uncomment below and update the code to test the property numberOfGateways
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

    it('should have the property routeTarget (base name: "routeTarget")', function() {
      // uncomment below and update the code to test the property routeTarget
      //var instance = new OmniCoreModelAndStateManagementApi.DeviceRegistry();
      //expect(instance).to.be();
    });

  });

}));
