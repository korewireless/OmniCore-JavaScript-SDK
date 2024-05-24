/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.20
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Config model module.
 * @module model/Config
 * @version 1.8.20
 */
class Config {
    /**
     * Constructs a new <code>Config</code>.
     * @alias module:model/Config
     * @param connectionParameter {String} 
     */
    constructor(connectionParameter) { 
        
        Config.initialize(this, connectionParameter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, connectionParameter) { 
        obj['connectionParameter'] = connectionParameter;
    }

    /**
     * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config} obj Optional instance to populate.
     * @return {module:model/Config} The populated <code>Config</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Config();

            if (data.hasOwnProperty('connectionParameter')) {
                obj['connectionParameter'] = ApiClient.convertToType(data['connectionParameter'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Config</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Config</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Config.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['connectionParameter'] && !(typeof data['connectionParameter'] === 'string' || data['connectionParameter'] instanceof String)) {
            throw new Error("Expected the field `connectionParameter` to be a primitive type in the JSON string but got " + data['connectionParameter']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['externalId'] && !(typeof data['externalId'] === 'string' || data['externalId'] instanceof String)) {
            throw new Error("Expected the field `externalId` to be a primitive type in the JSON string but got " + data['externalId']);
        }

        return true;
    }


}

Config.RequiredProperties = ["connectionParameter"];

/**
 * @member {String} connectionParameter
 */
Config.prototype['connectionParameter'] = undefined;

/**
 * @member {String} region
 */
Config.prototype['region'] = undefined;

/**
 * @member {String} externalId
 */
Config.prototype['externalId'] = undefined;






export default Config;

