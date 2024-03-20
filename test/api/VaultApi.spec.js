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
    instance = new OmniCoreModelAndStateManagementApi.VaultApi();
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

  describe('VaultApi', function() {
    describe('createVaultConfiguration', function() {
      it('should call createVaultConfiguration successfully', function(done) {
        //uncomment below and update the code to test createVaultConfiguration
        //instance.createVaultConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVaultKey', function() {
      it('should call createVaultKey successfully', function(done) {
        //uncomment below and update the code to test createVaultKey
        //instance.createVaultKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteConfiguration', function() {
      it('should call deleteConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteConfiguration
        //instance.deleteConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVaultKey', function() {
      it('should call deleteVaultKey successfully', function(done) {
        //uncomment below and update the code to test deleteVaultKey
        //instance.deleteVaultKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableEncryption', function() {
      it('should call enableEncryption successfully', function(done) {
        //uncomment below and update the code to test enableEncryption
        //instance.enableEncryption(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExports', function() {
      it('should call getExports successfully', function(done) {
        //uncomment below and update the code to test getExports
        //instance.getExports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegistryData', function() {
      it('should call getRegistryData successfully', function(done) {
        //uncomment below and update the code to test getRegistryData
        //instance.getRegistryData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplays', function() {
      it('should call getReplays successfully', function(done) {
        //uncomment below and update the code to test getReplays
        //instance.getReplays(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultAudit', function() {
      it('should call getVaultAudit successfully', function(done) {
        //uncomment below and update the code to test getVaultAudit
        //instance.getVaultAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultConfigurations', function() {
      it('should call getVaultConfigurations successfully', function(done) {
        //uncomment below and update the code to test getVaultConfigurations
        //instance.getVaultConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultFiles', function() {
      it('should call getVaultFiles successfully', function(done) {
        //uncomment below and update the code to test getVaultFiles
        //instance.getVaultFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultKeys', function() {
      it('should call getVaultKeys successfully', function(done) {
        //uncomment below and update the code to test getVaultKeys
        //instance.getVaultKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultMetrics', function() {
      it('should call getVaultMetrics successfully', function(done) {
        //uncomment below and update the code to test getVaultMetrics
        //instance.getVaultMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVaultStatus', function() {
      it('should call getVaultStatus successfully', function(done) {
        //uncomment below and update the code to test getVaultStatus
        //instance.getVaultStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRetention', function() {
      it('should call setRetention successfully', function(done) {
        //uncomment below and update the code to test setRetention
        //instance.setRetention(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startExport', function() {
      it('should call startExport successfully', function(done) {
        //uncomment below and update the code to test startExport
        //instance.startExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startReplay', function() {
      it('should call startReplay successfully', function(done) {
        //uncomment below and update the code to test startReplay
        //instance.startReplay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
