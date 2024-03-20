/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.18
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
    instance = new OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse();
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

  describe('ListDeviceConfigVersionsResponse', function() {
    it('should create an instance of ListDeviceConfigVersionsResponse', function() {
      // uncomment below and update the code to test ListDeviceConfigVersionsResponse
      //var instance = new OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse);
    });

    it('should have the property deviceConfigs (base name: "deviceConfigs")', function() {
      // uncomment below and update the code to test the property deviceConfigs
      //var instance = new OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse();
      //expect(instance).to.be();
    });

  });

}));
