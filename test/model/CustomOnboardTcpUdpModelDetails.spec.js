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
    instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
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

  describe('CustomOnboardTcpUdpModelDetails', function() {
    it('should create an instance of CustomOnboardTcpUdpModelDetails', function() {
      // uncomment below and update the code to test CustomOnboardTcpUdpModelDetails
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property modelName (base name: "modelName")', function() {
      // uncomment below and update the code to test the property modelName
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property manufacturer (base name: "manufacturer")', function() {
      // uncomment below and update the code to test the property manufacturer
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property tcpDetails (base name: "tcpDetails")', function() {
      // uncomment below and update the code to test the property tcpDetails
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property udpDetails (base name: "udpDetails")', function() {
      // uncomment below and update the code to test the property udpDetails
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new OmniCoreModelAndStateManagementApi.CustomOnboardTcpUdpModelDetails();
      //expect(instance).to.be();
    });

  });

}));
