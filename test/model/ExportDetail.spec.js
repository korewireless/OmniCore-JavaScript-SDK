/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.21
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
    instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
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

  describe('ExportDetail', function() {
    it('should create an instance of ExportDetail', function() {
      // uncomment below and update the code to test ExportDetail
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.ExportDetail);
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property nooffiles (base name: "nooffiles")', function() {
      // uncomment below and update the code to test the property nooffiles
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "fileSize")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

    it('should have the property done (base name: "done")', function() {
      // uncomment below and update the code to test the property done
      //var instance = new OmniCoreModelAndStateManagementApi.ExportDetail();
      //expect(instance).to.be();
    });

  });

}));
