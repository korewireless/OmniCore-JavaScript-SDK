/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BindRequest from '../model/BindRequest';
import BindRequestIdsGateway from '../model/BindRequestIdsGateway';
import BlockCommunicationBody from '../model/BlockCommunicationBody';
import Device from '../model/Device';
import DeviceCommand from '../model/DeviceCommand';
import DeviceConfig from '../model/DeviceConfig';
import DeviceConfiguration from '../model/DeviceConfiguration';
import GenericErrorResponse from '../model/GenericErrorResponse';
import Info from '../model/Info';
import ListDeviceConfigVersionsResponse from '../model/ListDeviceConfigVersionsResponse';
import ListDeviceStatesResponse from '../model/ListDeviceStatesResponse';
import ListDevicesResponse from '../model/ListDevicesResponse';

/**
* Device service.
* @module api/DeviceApi
* @version 1.0
*/
export default class DeviceApi {

    /**
    * Constructs a new DeviceApi. 
    * @alias module:api/DeviceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bindDevice operation.
     * @callback module:api/DeviceApi~bindDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bind  a device to a gateway under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/BindRequest} device application/json
     * @param {module:api/DeviceApi~bindDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    bindDevice(subscriptionId, registryId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling bindDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling bindDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling bindDevice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/bindDeviceToGateway', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bindDevices operation.
     * @callback module:api/DeviceApi~bindDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bind devices to a gateway under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/BindRequestIdsGateway} device application/json
     * @param {module:api/DeviceApi~bindDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    bindDevices(subscriptionId, registryId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling bindDevices");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling bindDevices");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling bindDevices");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/bindDevicesToGateway', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the blockDeviceCommuncation operation.
     * @callback module:api/DeviceApi~blockDeviceCommuncationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Blocks All Communication From A Device
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {module:model/BlockCommunicationBody} device application/json
     * @param {module:api/DeviceApi~blockDeviceCommuncationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    blockDeviceCommuncation(subscriptionid, registryId, deviceId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling blockDeviceCommuncation");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling blockDeviceCommuncation");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling blockDeviceCommuncation");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling blockDeviceCommuncation");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/communication', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDevice operation.
     * @callback module:api/DeviceApi~createDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a device under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/Device} device application/json
     * @param {module:api/DeviceApi~createDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    createDevice(subscriptionId, registryId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling createDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling createDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling createDevice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Device;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDevice operation.
     * @callback module:api/DeviceApi~deleteDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a device under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {module:api/DeviceApi~deleteDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    deleteDevice(subscriptionId, registryId, deviceId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling deleteDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling deleteDevice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfig operation.
     * @callback module:api/DeviceApi~getConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDeviceConfigVersionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Configs Of Devices
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
     * @param {module:api/DeviceApi~getConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDeviceConfigVersionsResponse}
     */
    getConfig(subscriptionid, registryId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getConfig");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling getConfig");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getConfig");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
        'numVersions': opts['numVersions']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDeviceConfigVersionsResponse;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/configVersions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevice operation.
     * @callback module:api/DeviceApi~getDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a device under a registry
     * @param {String} registryId Registry ID
     * @param {String} subscriptionId Subscription ID
     * @param {String} deviceId Device ID
     * @param {module:api/DeviceApi~getDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    getDevice(registryId, subscriptionId, deviceId, callback) {
      let postBody = null;
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling getDevice");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDevice");
      }

      let pathParams = {
        'registryId': registryId,
        'subscriptionId': subscriptionId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Device;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevices operation.
     * @callback module:api/DeviceApi~getDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDevicesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all devices under a registry
     * @param {String} registryId Registry ID
     * @param {String} subscriptionId Subscription ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page Number
     * @param {Number} opts.pageSize The maximum number of devices to return in the response. If this value is zero, the service will select a default size. 
     * @param {String} opts.fieldMask The fields of the Device resource to be returned to the response. The fields id and numId are always returned, along with any other fields specified. A comma-separated list of fully qualified names of fields. Example: 
     * @param {Array.<String>} opts.deviceIds A list of device string IDs. For example, ['device0', 'device12']. If empty, this field is ignored. Maximum IDs: 10,000
     * @param {Array.<String>} opts.deviceNumIds A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.
     * @param {String} opts.gatewayListOptionsAssociationsDeviceId If set, returns only the gateways with which the specified device is associated. The device ID can be numeric (num_id) or the user-defined string (id). For example, if 456 is specified, returns only the gateways to which the device with num_id 456 is bound.
     * @param {String} opts.gatewayListOptionsAssociationsGatewayId If set, only devices associated with the specified gateway are returned. The gateway ID can be numeric (num_id) or the user-defined string (id). For example, if 123 is specified, only devices bound to the gateway with num_id 123 are returned
     * @param {String} opts.gatewayListOptionsGatewayType If GATEWAY is specified, only gateways are returned. If NON_GATEWAY is specified, only non-gateway devices are returned. If GATEWAY_TYPE_UNSPECIFIED is specified, all devices are returned.
     * @param {module:api/DeviceApi~getDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDevicesResponse}
     */
    getDevices(registryId, subscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling getDevices");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getDevices");
      }

      let pathParams = {
        'registryId': registryId,
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize'],
        'fieldMask': opts['fieldMask'],
        'deviceIds': this.apiClient.buildCollectionParam(opts['deviceIds'], 'csv'),
        'deviceNumIds': this.apiClient.buildCollectionParam(opts['deviceNumIds'], 'csv'),
        'gatewayListOptions.associationsDeviceId': opts['gatewayListOptionsAssociationsDeviceId'],
        'gatewayListOptions.associationsGatewayId': opts['gatewayListOptionsAssociationsGatewayId'],
        'gatewayListOptions.gatewayType': opts['gatewayListOptionsGatewayType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDevicesResponse;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStates operation.
     * @callback module:api/DeviceApi~getStatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDeviceStatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get States Of Devices
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.numStates The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
     * @param {module:api/DeviceApi~getStatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDeviceStatesResponse}
     */
    getStates(subscriptionid, registryId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getStates");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling getStates");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getStates");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
        'numStates': opts['numStates']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDeviceStatesResponse;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendCommandToDevice operation.
     * @callback module:api/DeviceApi~sendCommandToDeviceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send A Command To A Device
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {module:model/DeviceCommand} device application/json
     * @param {module:api/DeviceApi~sendCommandToDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    sendCommandToDevice(subscriptionid, registryId, deviceId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling sendCommandToDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling sendCommandToDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling sendCommandToDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling sendCommandToDevice");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/sendCommandToDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unBindDevice operation.
     * @callback module:api/DeviceApi~unBindDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UnBind  a device from a gateway under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/BindRequest} device application/json
     * @param {module:api/DeviceApi~unBindDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    unBindDevice(subscriptionId, registryId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling unBindDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling unBindDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling unBindDevice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/unbindDeviceFromGateway', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unBindDevices operation.
     * @callback module:api/DeviceApi~unBindDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * UnBind devices from a gateway under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/BindRequestIdsGateway} device application/json
     * @param {module:api/DeviceApi~unBindDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    unBindDevices(subscriptionId, registryId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling unBindDevices");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling unBindDevices");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling unBindDevices");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/unbindDevicesFromGateway', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConfigurationToDevice operation.
     * @callback module:api/DeviceApi~updateConfigurationToDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update A Configuration Of A Device
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {module:model/DeviceConfiguration} device application/json
     * @param {module:api/DeviceApi~updateConfigurationToDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceConfig}
     */
    updateConfigurationToDevice(subscriptionid, registryId, deviceId, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling updateConfigurationToDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling updateConfigurationToDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling updateConfigurationToDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling updateConfigurationToDevice");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceConfig;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/updateConfigurationToDevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDevice operation.
     * @callback module:api/DeviceApi~updateDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify device under a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {String} deviceId Device ID
     * @param {module:model/String} updateMask Required. Only updates the device fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: credentials,logLevel, blocked,policy and metadata
     * @param {module:model/Device} device application/json
     * @param {module:api/DeviceApi~updateDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    updateDevice(subscriptionId, registryId, deviceId, updateMask, device, callback) {
      let postBody = device;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling updateDevice");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling updateDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling updateDevice");
      }
      // verify the required parameter 'updateMask' is set
      if (updateMask === undefined || updateMask === null) {
        throw new Error("Missing the required parameter 'updateMask' when calling updateDevice");
      }
      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling updateDevice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId,
        'deviceId': deviceId
      };
      let queryParams = {
        'updateMask': updateMask
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Device;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
