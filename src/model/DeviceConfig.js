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
 * The DeviceConfig model module.
 * @module model/DeviceConfig
 * @version 1.8.21
 */
class DeviceConfig {
    /**
     * Constructs a new <code>DeviceConfig</code>.
     * @alias module:model/DeviceConfig
     */
    constructor() { 
        
        DeviceConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceConfig} obj Optional instance to populate.
     * @return {module:model/DeviceConfig} The populated <code>DeviceConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceConfig();

            if (data.hasOwnProperty('acknowledged')) {
                obj['acknowledged'] = ApiClient.convertToType(data['acknowledged'], 'Boolean');
            }
            if (data.hasOwnProperty('binaryData')) {
                obj['binaryData'] = ApiClient.convertToType(data['binaryData'], 'String');
            }
            if (data.hasOwnProperty('cloudUpdateTime')) {
                obj['cloudUpdateTime'] = ApiClient.convertToType(data['cloudUpdateTime'], 'String');
            }
            if (data.hasOwnProperty('deviceAckTime')) {
                obj['deviceAckTime'] = ApiClient.convertToType(data['deviceAckTime'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['binaryData'] && !(typeof data['binaryData'] === 'string' || data['binaryData'] instanceof String)) {
            throw new Error("Expected the field `binaryData` to be a primitive type in the JSON string but got " + data['binaryData']);
        }
        // ensure the json data is a string
        if (data['cloudUpdateTime'] && !(typeof data['cloudUpdateTime'] === 'string' || data['cloudUpdateTime'] instanceof String)) {
            throw new Error("Expected the field `cloudUpdateTime` to be a primitive type in the JSON string but got " + data['cloudUpdateTime']);
        }
        // ensure the json data is a string
        if (data['deviceAckTime'] && !(typeof data['deviceAckTime'] === 'string' || data['deviceAckTime'] instanceof String)) {
            throw new Error("Expected the field `deviceAckTime` to be a primitive type in the JSON string but got " + data['deviceAckTime']);
        }

        return true;
    }


}



/**
 * @member {Boolean} acknowledged
 */
DeviceConfig.prototype['acknowledged'] = undefined;

/**
 * Base64 Encoded Comnfig String
 * @member {String} binaryData
 */
DeviceConfig.prototype['binaryData'] = undefined;

/**
 * @member {String} cloudUpdateTime
 */
DeviceConfig.prototype['cloudUpdateTime'] = undefined;

/**
 * @member {String} deviceAckTime
 */
DeviceConfig.prototype['deviceAckTime'] = undefined;

/**
 * @member {Number} version
 */
DeviceConfig.prototype['version'] = undefined;






export default DeviceConfig;

