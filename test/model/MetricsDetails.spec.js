/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.1
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
    instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
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

  describe('MetricsDetails', function() {
    it('should create an instance of MetricsDetails', function() {
      // uncomment below and update the code to test MetricsDetails
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.MetricsDetails);
    });

    it('should have the property noOfMessagesFor30Minutes (base name: "NoOfMessagesFor30Minutes")', function() {
      // uncomment below and update the code to test the property noOfMessagesFor30Minutes
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfMessagesFor48Hours (base name: "NoOfMessagesFor48Hours")', function() {
      // uncomment below and update the code to test the property noOfMessagesFor48Hours
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property billableBytesReceived (base name: "billableBytesReceived")', function() {
      // uncomment below and update the code to test the property billableBytesReceived
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property billableBytesSent (base name: "billableBytesSent")', function() {
      // uncomment below and update the code to test the property billableBytesSent
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property billableMessageSize (base name: "billableMessageSize")', function() {
      // uncomment below and update the code to test the property billableMessageSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property bytesReceived (base name: "bytesReceived")', function() {
      // uncomment below and update the code to test the property bytesReceived
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property bytesSent (base name: "bytesSent")', function() {
      // uncomment below and update the code to test the property bytesSent
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property messageSize (base name: "messageSize")', function() {
      // uncomment below and update the code to test the property messageSize
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfAckMessages (base name: "noOfAckMessages")', function() {
      // uncomment below and update the code to test the property noOfAckMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfCommandMessages (base name: "noOfCommandMessages")', function() {
      // uncomment below and update the code to test the property noOfCommandMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfConfigMessages (base name: "noOfConfigMessages")', function() {
      // uncomment below and update the code to test the property noOfConfigMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfDeviceConnectionsFailed (base name: "noOfDeviceConnectionsFailed")', function() {
      // uncomment below and update the code to test the property noOfDeviceConnectionsFailed
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfDevices (base name: "noOfDevices")', function() {
      // uncomment below and update the code to test the property noOfDevices
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfDisConnections (base name: "noOfDisConnections")', function() {
      // uncomment below and update the code to test the property noOfDisConnections
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfEventMessages (base name: "noOfEventMessages")', function() {
      // uncomment below and update the code to test the property noOfEventMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfGatewayConnectionsFailed (base name: "noOfGatewayConnectionsFailed")', function() {
      // uncomment below and update the code to test the property noOfGatewayConnectionsFailed
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfGateways (base name: "noOfGateways")', function() {
      // uncomment below and update the code to test the property noOfGateways
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfLoopBackMessages (base name: "noOfLoopBackMessages")', function() {
      // uncomment below and update the code to test the property noOfLoopBackMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfMessages (base name: "noOfMessages")', function() {
      // uncomment below and update the code to test the property noOfMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfPublishErrors (base name: "noOfPublishErrors")', function() {
      // uncomment below and update the code to test the property noOfPublishErrors
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfRegistries (base name: "noOfRegistries")', function() {
      // uncomment below and update the code to test the property noOfRegistries
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfStateMessages (base name: "noOfStateMessages")', function() {
      // uncomment below and update the code to test the property noOfStateMessages
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfSubscribe (base name: "noOfSubscribe")', function() {
      // uncomment below and update the code to test the property noOfSubscribe
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfSuccessfulConnections (base name: "noOfSuccessfulConnections")', function() {
      // uncomment below and update the code to test the property noOfSuccessfulConnections
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property noOfUnSubscribe (base name: "noOfUnSubscribe")', function() {
      // uncomment below and update the code to test the property noOfUnSubscribe
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new OmniCoreModelAndStateManagementApi.MetricsDetails();
      //expect(instance).to.be();
    });

  });

}));
