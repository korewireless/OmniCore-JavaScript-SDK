/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.13
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
    instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
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

  describe('ListDevicesOnlineResponse', function() {
    it('should create an instance of ListDevicesOnlineResponse', function() {
      // uncomment below and update the code to test ListDevicesOnlineResponse
      //var instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse);
    });

    it('should have the property devices (base name: "devices")', function() {
      // uncomment below and update the code to test the property devices
      //var instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "pageNumber")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instance = new OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse();
      //expect(instance).to.be();
    });

  });

}));
