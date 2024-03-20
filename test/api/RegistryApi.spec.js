/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.14
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
    instance = new OmniCoreModelAndStateManagementApi.RegistryApi();
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

  describe('RegistryApi', function() {
    describe('createRegistry', function() {
      it('should call createRegistry successfully', function(done) {
        //uncomment below and update the code to test createRegistry
        //instance.createRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRegistry', function() {
      it('should call deleteRegistry successfully', function(done) {
        //uncomment below and update the code to test deleteRegistry
        //instance.deleteRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegistries', function() {
      it('should call getRegistries successfully', function(done) {
        //uncomment below and update the code to test getRegistries
        //instance.getRegistries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegistry', function() {
      it('should call getRegistry successfully', function(done) {
        //uncomment below and update the code to test getRegistry
        //instance.getRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendBroadcastToDevices', function() {
      it('should call sendBroadcastToDevices successfully', function(done) {
        //uncomment below and update the code to test sendBroadcastToDevices
        //instance.sendBroadcastToDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRegistry', function() {
      it('should call updateRegistry successfully', function(done) {
        //uncomment below and update the code to test updateRegistry
        //instance.updateRegistry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
