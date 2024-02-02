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
 * The DeviceConfiguration model module.
 * @module model/DeviceConfiguration
 * @version 1.8.10
 */
class DeviceConfiguration {
    /**
     * Constructs a new <code>DeviceConfiguration</code>.
     * @alias module:model/DeviceConfiguration
     * @param binaryData {String} Base64 Encoded Config String
     */
    constructor(binaryData) { 
        
        DeviceConfiguration.initialize(this, binaryData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, binaryData) { 
        obj['binaryData'] = binaryData;
    }

    /**
     * Constructs a <code>DeviceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceConfiguration} obj Optional instance to populate.
     * @return {module:model/DeviceConfiguration} The populated <code>DeviceConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceConfiguration();

            if (data.hasOwnProperty('binaryData')) {
                obj['binaryData'] = ApiClient.convertToType(data['binaryData'], 'String');
            }
            if (data.hasOwnProperty('subfolder')) {
                obj['subfolder'] = ApiClient.convertToType(data['subfolder'], 'String');
            }
            if (data.hasOwnProperty('versionToUpdate')) {
                obj['versionToUpdate'] = ApiClient.convertToType(data['versionToUpdate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceConfiguration</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceConfiguration.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['binaryData'] && !(typeof data['binaryData'] === 'string' || data['binaryData'] instanceof String)) {
            throw new Error("Expected the field `binaryData` to be a primitive type in the JSON string but got " + data['binaryData']);
        }
        // ensure the json data is a string
        if (data['subfolder'] && !(typeof data['subfolder'] === 'string' || data['subfolder'] instanceof String)) {
            throw new Error("Expected the field `subfolder` to be a primitive type in the JSON string but got " + data['subfolder']);
        }
        // ensure the json data is a string
        if (data['versionToUpdate'] && !(typeof data['versionToUpdate'] === 'string' || data['versionToUpdate'] instanceof String)) {
            throw new Error("Expected the field `versionToUpdate` to be a primitive type in the JSON string but got " + data['versionToUpdate']);
        }

        return true;
    }


}

DeviceConfiguration.RequiredProperties = ["binaryData"];

/**
 * Base64 Encoded Config String
 * @member {String} binaryData
 */
DeviceConfiguration.prototype['binaryData'] = undefined;

/**
 * @member {String} subfolder
 */
DeviceConfiguration.prototype['subfolder'] = undefined;

/**
 * @member {String} versionToUpdate
 */
DeviceConfiguration.prototype['versionToUpdate'] = undefined;






export default DeviceConfiguration;

