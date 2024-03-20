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
    instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
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

  describe('MetricsLogs', function() {
    it('should create an instance of MetricsLogs', function() {
      // uncomment below and update the code to test MetricsLogs
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.MetricsLogs);
    });

    it('should have the property noOfFiles (base name: "noOfFiles")', function() {
      // uncomment below and update the code to test the property noOfFiles
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "fileSize")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

    it('should have the property noofoperations (base name: "noofoperations")', function() {
      // uncomment below and update the code to test the property noofoperations
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

    it('should have the property updatedon (base name: "updatedon")', function() {
      // uncomment below and update the code to test the property updatedon
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

    it('should have the property replayFileSize (base name: "replayFileSize")', function() {
      // uncomment below and update the code to test the property replayFileSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

    it('should have the property exportFileSize (base name: "exportFileSize")', function() {
      // uncomment below and update the code to test the property exportFileSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsLogs();
      //expect(instance).to.be();
    });

  });

}));
