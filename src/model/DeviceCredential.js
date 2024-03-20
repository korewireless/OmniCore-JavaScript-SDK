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
import PublicKeyCredential from './PublicKeyCredential';

/**
 * The DeviceCredential model module.
 * @module model/DeviceCredential
 * @version 1.8.18
 */
class DeviceCredential {
    /**
     * Constructs a new <code>DeviceCredential</code>.
     * @alias module:model/DeviceCredential
     */
    constructor() { 
        
        DeviceCredential.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceCredential} obj Optional instance to populate.
     * @return {module:model/DeviceCredential} The populated <code>DeviceCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceCredential();

            if (data.hasOwnProperty('expirationTime')) {
                obj['expirationTime'] = ApiClient.convertToType(data['expirationTime'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = PublicKeyCredential.constructFromObject(data['publicKey']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceCredential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceCredential</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['expirationTime'] && !(typeof data['expirationTime'] === 'string' || data['expirationTime'] instanceof String)) {
            throw new Error("Expected the field `expirationTime` to be a primitive type in the JSON string but got " + data['expirationTime']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `publicKey`
        if (data['publicKey']) { // data not null
          PublicKeyCredential.validateJSON(data['publicKey']);
        }

        return true;
    }


}



/**
 * ExpirationTime: [Optional] The time at which this credential becomes invalid. This credential will be ignored for new client authentication requests after this timestamp; however, it will not be automatically deleted.
 * @member {String} expirationTime
 */
DeviceCredential.prototype['expirationTime'] = undefined;

/**
 * @member {String} id
 */
DeviceCredential.prototype['id'] = undefined;

/**
 * @member {module:model/PublicKeyCredential} publicKey
 */
DeviceCredential.prototype['publicKey'] = undefined;






export default DeviceCredential;

