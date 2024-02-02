/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.10
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MetricsLogs model module.
 * @module model/MetricsLogs
 * @version 1.8.10
 */
class MetricsLogs {
    /**
     * Constructs a new <code>MetricsLogs</code>.
     * @alias module:model/MetricsLogs
     */
    constructor() { 
        
        MetricsLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetricsLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricsLogs} obj Optional instance to populate.
     * @return {module:model/MetricsLogs} The populated <code>MetricsLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricsLogs();

            if (data.hasOwnProperty('noOfFiles')) {
                obj['noOfFiles'] = ApiClient.convertToType(data['noOfFiles'], 'Number');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('noofoperations')) {
                obj['noofoperations'] = ApiClient.convertToType(data['noofoperations'], 'Number');
            }
            if (data.hasOwnProperty('updatedon')) {
                obj['updatedon'] = ApiClient.convertToType(data['updatedon'], 'String');
            }
            if (data.hasOwnProperty('replayFileSize')) {
                obj['replayFileSize'] = ApiClient.convertToType(data['replayFileSize'], 'Number');
            }
            if (data.hasOwnProperty('exportFileSize')) {
                obj['exportFileSize'] = ApiClient.convertToType(data['exportFileSize'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MetricsLogs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetricsLogs</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['updatedon'] && !(typeof data['updatedon'] === 'string' || data['updatedon'] instanceof String)) {
            throw new Error("Expected the field `updatedon` to be a primitive type in the JSON string but got " + data['updatedon']);
        }

        return true;
    }


}



/**
 * @member {Number} noOfFiles
 */
MetricsLogs.prototype['noOfFiles'] = undefined;

/**
 * @member {Number} fileSize
 */
MetricsLogs.prototype['fileSize'] = undefined;

/**
 * @member {Number} noofoperations
 */
MetricsLogs.prototype['noofoperations'] = undefined;

/**
 * @member {String} updatedon
 */
MetricsLogs.prototype['updatedon'] = undefined;

/**
 * @member {Number} replayFileSize
 */
MetricsLogs.prototype['replayFileSize'] = undefined;

/**
 * @member {Number} exportFileSize
 */
MetricsLogs.prototype['exportFileSize'] = undefined;






export default MetricsLogs;

