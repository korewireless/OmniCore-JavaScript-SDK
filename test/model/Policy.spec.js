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
    instance = new OmniCoreModelAndStateManagementApi.Policy();
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

  describe('Policy', function() {
    it('should create an instance of Policy', function() {
      // uncomment below and update the code to test Policy
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be.a(OmniCoreModelAndStateManagementApi.Policy);
    });

    it('should have the property connect (base name: "Connect")', function() {
      // uncomment below and update the code to test the property connect
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property publishState (base name: "PublishState")', function() {
      // uncomment below and update the code to test the property publishState
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property publishEvents (base name: "PublishEvents")', function() {
      // uncomment below and update the code to test the property publishEvents
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property publishEventsRegex (base name: "PublishEventsRegex")', function() {
      // uncomment below and update the code to test the property publishEventsRegex
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property publishLoopback (base name: "PublishLoopback")', function() {
      // uncomment below and update the code to test the property publishLoopback
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property subscribeCommand (base name: "SubscribeCommand")', function() {
      // uncomment below and update the code to test the property subscribeCommand
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property subscribeCommandRegex (base name: "SubscribeCommandRegex")', function() {
      // uncomment below and update the code to test the property subscribeCommandRegex
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property subscribeBroadcast (base name: "SubscribeBroadcast")', function() {
      // uncomment below and update the code to test the property subscribeBroadcast
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property subscribeBroadcastRegex (base name: "SubscribeBroadcastRegex")', function() {
      // uncomment below and update the code to test the property subscribeBroadcastRegex
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property subscribeConfig (base name: "SubscribeConfig")', function() {
      // uncomment below and update the code to test the property subscribeConfig
      //var instance = new OmniCoreModelAndStateManagementApi.Policy();
      //expect(instance).to.be();
    });

  });

}));
