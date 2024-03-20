/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.15
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
 * @version 1.8.15
 */
class Config {
    /**
     * Constructs a new <code>Config</code>.
     * @alias module:model/Config
     */
    constructor() { 
        
        Config.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Config</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Config</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['connectionParameter'] && !(typeof data['connectionParameter'] === 'string' || data['connectionParameter'] instanceof String)) {
            throw new Error("Expected the field `connectionParameter` to be a primitive type in the JSON string but got " + data['connectionParameter']);
        }

        return true;
    }


}



/**
 * @member {String} connectionParameter
 */
Config.prototype['connectionParameter'] = undefined;






export default Config;

