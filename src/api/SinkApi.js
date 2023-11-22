/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.6
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GenericErrorResponse from '../model/GenericErrorResponse';
import ListSinks from '../model/ListSinks';
import Sink from '../model/Sink';

/**
* Sink service.
* @module api/SinkApi
* @version 1.8.6
*/
export default class SinkApi {

    /**
    * Constructs a new SinkApi. 
    * @alias module:api/SinkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSink operation.
     * @callback module:api/SinkApi~createSinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Sink
     * @param {String} subscriptionId Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Sink} opts.sink 
     * @param {module:api/SinkApi~createSinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sink}
     */
    createSink(subscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['sink'];
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling createSink");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
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
      let returnType = Sink;
      return this.apiClient.callApi(
        '/omnicore/subscriptions/{subscriptionId}/sinks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSink operation.
     * @callback module:api/SinkApi~deleteSinkCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Sink
     * @param {String} subscriptionId Subscription ID
     * @param {String} sinkId Sink ID
     * @param {module:api/SinkApi~deleteSinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deleteSink(subscriptionId, sinkId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteSink");
      }
      // verify the required parameter 'sinkId' is set
      if (sinkId === undefined || sinkId === null) {
        throw new Error("Missing the required parameter 'sinkId' when calling deleteSink");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'sinkId': sinkId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/omnicore/subscriptions/{subscriptionId}/sinks/{sinkId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getASink operation.
     * @callback module:api/SinkApi~getASinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get A Sink
     * @param {String} subscriptionId Subscription ID
     * @param {String} sinkId Sink ID
     * @param {module:api/SinkApi~getASinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sink}
     */
    getASink(subscriptionId, sinkId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getASink");
      }
      // verify the required parameter 'sinkId' is set
      if (sinkId === undefined || sinkId === null) {
        throw new Error("Missing the required parameter 'sinkId' when calling getASink");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'sinkId': sinkId
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
      let returnType = Sink;
      return this.apiClient.callApi(
        '/omnicore/subscriptions/{subscriptionId}/sinks/{sinkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSinks operation.
     * @callback module:api/SinkApi~getSinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListSinks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sinks
     * Get Sinks
     * @param {String} subscriptionId Subscription ID
     * @param {module:api/SinkApi~getSinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListSinks}
     */
    getSinks(subscriptionId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSinks");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
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
      let returnType = ListSinks;
      return this.apiClient.callApi(
        '/omnicore/subscriptions/{subscriptionId}/sinks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
