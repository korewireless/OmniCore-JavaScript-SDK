/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.15
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
    instance = new OmniCoreModelAndStateManagementApi.Device();
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

  describe('Device', function() {
    it('should create an instance of Device', function() {
      // uncomment below and update the code to test Device
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.Device);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property numId (base name: "numId")', function() {
      // uncomment below and update the code to test the property numId
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property registry (base name: "registry")', function() {
      // uncomment below and update the code to test the property registry
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property blocked (base name: "blocked")', function() {
      // uncomment below and update the code to test the property blocked
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property capresent (base name: "capresent")', function() {
      // uncomment below and update the code to test the property capresent
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updatedOn")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property credentials (base name: "credentials")', function() {
      // uncomment below and update the code to test the property credentials
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property gateway (base name: "gateway")', function() {
      // uncomment below and update the code to test the property gateway
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property gatewayConfig (base name: "gatewayConfig")', function() {
      // uncomment below and update the code to test the property gatewayConfig
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property isGateway (base name: "isGateway")', function() {
      // uncomment below and update the code to test the property isGateway
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property deviceErrors (base name: "deviceErrors")', function() {
      // uncomment below and update the code to test the property deviceErrors
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property clientOnline (base name: "clientOnline")', function() {
      // uncomment below and update the code to test the property clientOnline
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastConfigAckTime (base name: "lastConfigAckTime")', function() {
      // uncomment below and update the code to test the property lastConfigAckTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastConfigSendTime (base name: "lastConfigSendTime")', function() {
      // uncomment below and update the code to test the property lastConfigSendTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastErrorStatus (base name: "lastErrorStatus")', function() {
      // uncomment below and update the code to test the property lastErrorStatus
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastErrorTime (base name: "lastErrorTime")', function() {
      // uncomment below and update the code to test the property lastErrorTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastEventTime (base name: "lastEventTime")', function() {
      // uncomment below and update the code to test the property lastEventTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastHeartbeatTime (base name: "lastHeartbeatTime")', function() {
      // uncomment below and update the code to test the property lastHeartbeatTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastStateTime (base name: "lastStateTime")', function() {
      // uncomment below and update the code to test the property lastStateTime
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property logLevel (base name: "logLevel")', function() {
      // uncomment below and update the code to test the property logLevel
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instance = new OmniCoreModelAndStateManagementApi.Device();
      //expect(instance).to.be();
    });

  });

}));
