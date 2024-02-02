/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.10
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
    instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
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

  describe('VaultStatusDetails', function() {
    it('should create an instance of VaultStatusDetails', function() {
      // uncomment below and update the code to test VaultStatusDetails
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.VaultStatusDetails);
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property storageType (base name: "storageType")', function() {
      // uncomment below and update the code to test the property storageType
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property isCreated (base name: "isCreated")', function() {
      // uncomment below and update the code to test the property isCreated
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property updatedon (base name: "updatedon")', function() {
      // uncomment below and update the code to test the property updatedon
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property mqttId (base name: "MqttId")', function() {
      // uncomment below and update the code to test the property mqttId
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property retentionPeriod (base name: "retentionPeriod")', function() {
      // uncomment below and update the code to test the property retentionPeriod
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property encryptionKeyId (base name: "encryptionKeyId")', function() {
      // uncomment below and update the code to test the property encryptionKeyId
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

    it('should have the property isEncrypted (base name: "isEncrypted")', function() {
      // uncomment below and update the code to test the property isEncrypted
      //var instance = new OmniCoreModelAndStateManagementApi.VaultStatusDetails();
      //expect(instance).to.be();
    });

  });

}));
