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


import ApiClient from "../ApiClient";
import AuditResult from '../model/AuditResult';
import Configurations from '../model/Configurations';
import CreateConfiguration from '../model/CreateConfiguration';
import CreateVaultKeyBody from '../model/CreateVaultKeyBody';
import EnableEncryptionBody from '../model/EnableEncryptionBody';
import FileDetails from '../model/FileDetails';
import FolderData from '../model/FolderData';
import Frame from '../model/Frame';
import GenericErrorResponse from '../model/GenericErrorResponse';
import GetExportsResponse from '../model/GetExportsResponse';
import GetKeysResponse from '../model/GetKeysResponse';
import GetReplaysResponse from '../model/GetReplaysResponse';
import MetricsResponse from '../model/MetricsResponse';
import ReplayBody from '../model/ReplayBody';
import SetRetentionBody from '../model/SetRetentionBody';
import StartExportBody from '../model/StartExportBody';
import VaultStatus from '../model/VaultStatus';

/**
* Vault service.
* @module api/VaultApi
* @version 1.8.21
*/
export default class VaultApi {

    /**
    * Constructs a new VaultApi. 
    * @alias module:api/VaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createVaultConfiguration operation.
     * @callback module:api/VaultApi~createVaultConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create vault configuration
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateConfiguration} opts.createConfiguration application/json
     * @param {module:api/VaultApi~createVaultConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    createVaultConfiguration(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['createConfiguration'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling createVaultConfiguration");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/configurations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createVaultKey operation.
     * @callback module:api/VaultApi~createVaultKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Vault Key
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateVaultKeyBody} opts.createVaultKeyBody application/json
     * @param {module:api/VaultApi~createVaultKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    createVaultKey(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['createVaultKeyBody'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling createVaultKey");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/encryptionkeys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConfiguration operation.
     * @callback module:api/VaultApi~deleteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Configuration
     * @param {String} subscriptionid Subscription ID
     * @param {String} configid config id
     * @param {module:api/VaultApi~deleteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    deleteConfiguration(subscriptionid, configid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling deleteConfiguration");
      }
      // verify the required parameter 'configid' is set
      if (configid === undefined || configid === null) {
        throw new Error("Missing the required parameter 'configid' when calling deleteConfiguration");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'configid': configid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/configurations/{configid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVaultKey operation.
     * @callback module:api/VaultApi~deleteVaultKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Vault Key
     * @param {String} subscriptionid Subscription ID
     * @param {String} keyid key id
     * @param {module:api/VaultApi~deleteVaultKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    deleteVaultKey(subscriptionid, keyid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling deleteVaultKey");
      }
      // verify the required parameter 'keyid' is set
      if (keyid === undefined || keyid === null) {
        throw new Error("Missing the required parameter 'keyid' when calling deleteVaultKey");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'keyid': keyid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/encryptionkeys/{keyid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the enableEncryption operation.
     * @callback module:api/VaultApi~enableEncryptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable Encryption
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/EnableEncryptionBody} opts.enableEncryptionBody application/json
     * @param {module:api/VaultApi~enableEncryptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    enableEncryption(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['enableEncryptionBody'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling enableEncryption");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/encryption', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExports operation.
     * @callback module:api/VaultApi~getExportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetExportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Exports
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getExportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetExportsResponse}
     */
    getExports(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getExports");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = GetExportsResponse;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/exports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRegistryData operation.
     * @callback module:api/VaultApi~getRegistryDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FolderData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault folder data
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getRegistryDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FolderData}
     */
    getRegistryData(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getRegistryData");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = FolderData;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/folders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplays operation.
     * @callback module:api/VaultApi~getReplaysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReplaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Replays
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getReplaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetReplaysResponse}
     */
    getReplays(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getReplays");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = GetReplaysResponse;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/replays', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultAudit operation.
     * @callback module:api/VaultApi~getVaultAuditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault Audit
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page Number
     * @param {Number} opts.pageSize Page Size
     * @param {module:api/VaultApi~getVaultAuditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditResult}
     */
    getVaultAudit(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultAudit");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
      };
      let queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AuditResult;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/audit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultConfigurations operation.
     * @callback module:api/VaultApi~getVaultConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Configurations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault configurations
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getVaultConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Configurations}
     */
    getVaultConfigurations(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultConfigurations");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Configurations;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/configurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultFiles operation.
     * @callback module:api/VaultApi~getVaultFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault files
     * @param {String} subscriptionid Subscription ID
     * @param {String} registryid registry ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.fileType file type
     * @param {module:api/VaultApi~getVaultFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileDetails}
     */
    getVaultFiles(subscriptionid, registryid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultFiles");
      }
      // verify the required parameter 'registryid' is set
      if (registryid === undefined || registryid === null) {
        throw new Error("Missing the required parameter 'registryid' when calling getVaultFiles");
      }

      let pathParams = {
        'subscriptionid': subscriptionid,
        'registryid': registryid
      };
      let queryParams = {
        'fileType': opts['fileType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileDetails;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/registry/{registryid}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultKeys operation.
     * @callback module:api/VaultApi~getVaultKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetKeysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Vault Keys
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getVaultKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetKeysResponse}
     */
    getVaultKeys(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultKeys");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = GetKeysResponse;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/encryptionkeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultMetrics operation.
     * @callback module:api/VaultApi~getVaultMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetricsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault metrics
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime start time
     * @param {String} opts.endTime end time
     * @param {module:api/VaultApi~getVaultMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetricsResponse}
     */
    getVaultMetrics(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultMetrics");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
      };
      let queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricsResponse;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVaultStatus operation.
     * @callback module:api/VaultApi~getVaultStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VaultStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vault status
     * @param {String} subscriptionid Subscription ID
     * @param {module:api/VaultApi~getVaultStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VaultStatus}
     */
    getVaultStatus(subscriptionid, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling getVaultStatus");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = VaultStatus;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRetention operation.
     * @callback module:api/VaultApi~setRetentionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Retention Period
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/SetRetentionBody} opts.setRetentionBody application/json
     * @param {module:api/VaultApi~setRetentionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    setRetention(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['setRetentionBody'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling setRetention");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/retention', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startExport operation.
     * @callback module:api/VaultApi~startExportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Frame} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start Export
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/StartExportBody} opts.startExportBody application/json
     * @param {module:api/VaultApi~startExportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Frame}
     */
    startExport(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['startExportBody'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling startExport");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = Frame;
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/exports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startReplay operation.
     * @callback module:api/VaultApi~startReplayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start Replay
     * @param {String} subscriptionid Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ReplayBody} opts.replayBody application/json
     * @param {module:api/VaultApi~startReplayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    startReplay(subscriptionid, opts, callback) {
      opts = opts || {};
      let postBody = opts['replayBody'];
      // verify the required parameter 'subscriptionid' is set
      if (subscriptionid === undefined || subscriptionid === null) {
        throw new Error("Missing the required parameter 'subscriptionid' when calling startReplay");
      }

      let pathParams = {
        'subscriptionid': subscriptionid
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/vault/subscriptions/{subscriptionid}/replays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
