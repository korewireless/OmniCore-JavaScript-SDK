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

import ApiClient from '../ApiClient';

/**
 * The DeviceState model module.
 * @module model/DeviceState
 * @version 1.8.18
 */
class DeviceState {
    /**
     * Constructs a new <code>DeviceState</code>.
     * @alias module:model/DeviceState
     */
    constructor() { 
        
        DeviceState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceState} obj Optional instance to populate.
     * @return {module:model/DeviceState} The populated <code>DeviceState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceState();

            if (data.hasOwnProperty('binaryData')) {
                obj['binaryData'] = ApiClient.convertToType(data['binaryData'], 'String');
            }
            if (data.hasOwnProperty('updateTime')) {
                obj['updateTime'] = ApiClient.convertToType(data['updateTime'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceState</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['binaryData'] && !(typeof data['binaryData'] === 'string' || data['binaryData'] instanceof String)) {
            throw new Error("Expected the field `binaryData` to be a primitive type in the JSON string but got " + data['binaryData']);
        }
        // ensure the json data is a string
        if (data['updateTime'] && !(typeof data['updateTime'] === 'string' || data['updateTime'] instanceof String)) {
            throw new Error("Expected the field `updateTime` to be a primitive type in the JSON string but got " + data['updateTime']);
        }

        return true;
    }


}



/**
 * Base64 Encoded State String
 * @member {String} binaryData
 */
DeviceState.prototype['binaryData'] = undefined;

/**
 * @member {String} updateTime
 */
DeviceState.prototype['updateTime'] = undefined;






export default DeviceState;

