/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.3
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
    instance = new OmniCoreModelAndStateManagementApi.DeviceApi();
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

  describe('DeviceApi', function() {
    describe('bindDevice', function() {
      it('should call bindDevice successfully', function(done) {
        //uncomment below and update the code to test bindDevice
        //instance.bindDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bindDevices', function() {
      it('should call bindDevices successfully', function(done) {
        //uncomment below and update the code to test bindDevices
        //instance.bindDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blockDeviceCommuncation', function() {
      it('should call blockDeviceCommuncation successfully', function(done) {
        //uncomment below and update the code to test blockDeviceCommuncation
        //instance.blockDeviceCommuncation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDevice', function() {
      it('should call createDevice successfully', function(done) {
        //uncomment below and update the code to test createDevice
        //instance.createDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDevice', function() {
      it('should call deleteDevice successfully', function(done) {
        //uncomment below and update the code to test deleteDevice
        //instance.deleteDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfig', function() {
      it('should call getConfig successfully', function(done) {
        //uncomment below and update the code to test getConfig
        //instance.getConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevice', function() {
      it('should call getDevice successfully', function(done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevices', function() {
      it('should call getDevices successfully', function(done) {
        //uncomment below and update the code to test getDevices
        //instance.getDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStates', function() {
      it('should call getStates successfully', function(done) {
        //uncomment below and update the code to test getStates
        //instance.getStates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendCommandToDevice', function() {
      it('should call sendCommandToDevice successfully', function(done) {
        //uncomment below and update the code to test sendCommandToDevice
        //instance.sendCommandToDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unBindDevice', function() {
      it('should call unBindDevice successfully', function(done) {
        //uncomment below and update the code to test unBindDevice
        //instance.unBindDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unBindDevices', function() {
      it('should call unBindDevices successfully', function(done) {
        //uncomment below and update the code to test unBindDevices
        //instance.unBindDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConfigurationToDevice', function() {
      it('should call updateConfigurationToDevice successfully', function(done) {
        //uncomment below and update the code to test updateConfigurationToDevice
        //instance.updateConfigurationToDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomOnboardRequest', function() {
      it('should call updateCustomOnboardRequest successfully', function(done) {
        //uncomment below and update the code to test updateCustomOnboardRequest
        //instance.updateCustomOnboardRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDevice', function() {
      it('should call updateDevice successfully', function(done) {
        //uncomment below and update the code to test updateDevice
        //instance.updateDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
