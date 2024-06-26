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
import VaultConfiguration from './VaultConfiguration';

/**
 * The Configurations model module.
 * @module model/Configurations
 * @version 1.8.21
 */
class Configurations {
    /**
     * Constructs a new <code>Configurations</code>.
     * @alias module:model/Configurations
     */
    constructor() { 
        
        Configurations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Configurations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Configurations} obj Optional instance to populate.
     * @return {module:model/Configurations} The populated <code>Configurations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Configurations();

            if (data.hasOwnProperty('Details')) {
                obj['Details'] = ApiClient.convertToType(data['Details'], [VaultConfiguration]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Configurations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Configurations</code>.
     */
    static validateJSON(data) {
        if (data['Details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Details'])) {
                throw new Error("Expected the field `Details` to be an array in the JSON data but got " + data['Details']);
            }
            // validate the optional field `Details` (array)
            for (const item of data['Details']) {
                VaultConfiguration.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/VaultConfiguration>} Details
 */
Configurations.prototype['Details'] = undefined;






export default Configurations;

