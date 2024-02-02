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
 * The CreateVaultKeyBody model module.
 * @module model/CreateVaultKeyBody
 * @version 1.8.10
 */
class CreateVaultKeyBody {
    /**
     * Constructs a new <code>CreateVaultKeyBody</code>.
     * @alias module:model/CreateVaultKeyBody
     */
    constructor() { 
        
        CreateVaultKeyBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateVaultKeyBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVaultKeyBody} obj Optional instance to populate.
     * @return {module:model/CreateVaultKeyBody} The populated <code>CreateVaultKeyBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateVaultKeyBody();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateVaultKeyBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateVaultKeyBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
CreateVaultKeyBody.prototype['name'] = undefined;

/**
 * @member {String} key
 */
CreateVaultKeyBody.prototype['key'] = undefined;






export default CreateVaultKeyBody;

