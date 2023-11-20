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
    instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
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

  describe('X509CertificateDetails', function() {
    it('should create an instance of X509CertificateDetails', function() {
      // uncomment below and update the code to test X509CertificateDetails
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.X509CertificateDetails);
    });

    it('should have the property expiryTime (base name: "expiryTime")', function() {
      // uncomment below and update the code to test the property expiryTime
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

    it('should have the property publicKeyType (base name: "publicKeyType")', function() {
      // uncomment below and update the code to test the property publicKeyType
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

    it('should have the property signatureAlgorithm (base name: "signatureAlgorithm")', function() {
      // uncomment below and update the code to test the property signatureAlgorithm
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new OmniCoreModelAndStateManagementApi.X509CertificateDetails();
      //expect(instance).to.be();
    });

  });

}));
