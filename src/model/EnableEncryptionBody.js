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
 * The EnableEncryptionBody model module.
 * @module model/EnableEncryptionBody
 * @version 1.8.21
 */
class EnableEncryptionBody {
    /**
     * Constructs a new <code>EnableEncryptionBody</code>.
     * @alias module:model/EnableEncryptionBody
     */
    constructor() { 
        
        EnableEncryptionBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnableEncryptionBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableEncryptionBody} obj Optional instance to populate.
     * @return {module:model/EnableEncryptionBody} The populated <code>EnableEncryptionBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnableEncryptionBody();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('isEncrypted')) {
                obj['isEncrypted'] = ApiClient.convertToType(data['isEncrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('encryptionKeyId')) {
                obj['encryptionKeyId'] = ApiClient.convertToType(data['encryptionKeyId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnableEncryptionBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnableEncryptionBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }

        return true;
    }


}



/**
 * @member {String} action
 */
EnableEncryptionBody.prototype['action'] = undefined;

/**
 * @member {Boolean} isEncrypted
 */
EnableEncryptionBody.prototype['isEncrypted'] = undefined;

/**
 * @member {Number} encryptionKeyId
 */
EnableEncryptionBody.prototype['encryptionKeyId'] = undefined;






export default EnableEncryptionBody;

