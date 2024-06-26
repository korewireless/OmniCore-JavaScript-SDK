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

import ApiClient from '../ApiClient';

/**
 * The OperationMetrics model module.
 * @module model/OperationMetrics
 * @version 1.8.21
 */
class OperationMetrics {
    /**
     * Constructs a new <code>OperationMetrics</code>.
     * @alias module:model/OperationMetrics
     */
    constructor() { 
        
        OperationMetrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationMetrics} obj Optional instance to populate.
     * @return {module:model/OperationMetrics} The populated <code>OperationMetrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationMetrics();

            if (data.hasOwnProperty('noOfFiles')) {
                obj['noOfFiles'] = ApiClient.convertToType(data['noOfFiles'], 'Number');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('noofoperations')) {
                obj['noofoperations'] = ApiClient.convertToType(data['noofoperations'], 'Number');
            }
            if (data.hasOwnProperty('updatedon')) {
                obj['updatedon'] = ApiClient.convertToType(data['updatedon'], 'String');
            }
            if (data.hasOwnProperty('registryid')) {
                obj['registryid'] = ApiClient.convertToType(data['registryid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationMetrics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationMetrics</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }
        // ensure the json data is a string
        if (data['updatedon'] && !(typeof data['updatedon'] === 'string' || data['updatedon'] instanceof String)) {
            throw new Error("Expected the field `updatedon` to be a primitive type in the JSON string but got " + data['updatedon']);
        }
        // ensure the json data is a string
        if (data['registryid'] && !(typeof data['registryid'] === 'string' || data['registryid'] instanceof String)) {
            throw new Error("Expected the field `registryid` to be a primitive type in the JSON string but got " + data['registryid']);
        }

        return true;
    }


}



/**
 * @member {Number} noOfFiles
 */
OperationMetrics.prototype['noOfFiles'] = undefined;

/**
 * @member {Number} fileSize
 */
OperationMetrics.prototype['fileSize'] = undefined;

/**
 * @member {String} operation
 */
OperationMetrics.prototype['operation'] = undefined;

/**
 * @member {Number} noofoperations
 */
OperationMetrics.prototype['noofoperations'] = undefined;

/**
 * @member {String} updatedon
 */
OperationMetrics.prototype['updatedon'] = undefined;

/**
 * @member {String} registryid
 */
OperationMetrics.prototype['registryid'] = undefined;






export default OperationMetrics;

