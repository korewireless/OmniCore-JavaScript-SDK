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
    instance = new OmniCoreModelAndStateManagementApi.MetricsData();
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

  describe('MetricsData', function() {
    it('should create an instance of MetricsData', function() {
      // uncomment below and update the code to test MetricsData
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsData();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.MetricsData);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsData();
      //expect(instance).to.be();
    });

    it('should have the property totalExportSize (base name: "TotalExportSize")', function() {
      // uncomment below and update the code to test the property totalExportSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsData();
      //expect(instance).to.be();
    });

    it('should have the property totalReplaySize (base name: "TotalReplaySize")', function() {
      // uncomment below and update the code to test the property totalReplaySize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsData();
      //expect(instance).to.be();
    });

  });

}));
