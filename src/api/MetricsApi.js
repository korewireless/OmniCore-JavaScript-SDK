/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.7
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GenericErrorResponse from '../model/GenericErrorResponse';
import Metrics from '../model/Metrics';

/**
* Metrics service.
* @module api/MetricsApi
* @version 1.8.7
*/
export default class MetricsApi {

    /**
    * Constructs a new MetricsApi. 
    * @alias module:api/MetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMetrics operation.
     * @callback module:api/MetricsApi~getMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get metrics
     * @param {String} subscriptionId Subscription ID
     * @param {module:api/MetricsApi~getMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metrics}
     */
    getMetrics(subscriptionId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getMetrics");
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
      let returnType = Metrics;
      return this.apiClient.callApi(
        '/omnicore/subscriptions/{subscriptionId}/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
