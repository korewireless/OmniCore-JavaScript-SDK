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
import VaultEncryptionKey from './VaultEncryptionKey';

/**
 * The GetKeysResponse model module.
 * @module model/GetKeysResponse
 * @version 1.8.20
 */
class GetKeysResponse {
    /**
     * Constructs a new <code>GetKeysResponse</code>.
     * @alias module:model/GetKeysResponse
     */
    constructor() { 
        
        GetKeysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetKeysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetKeysResponse} obj Optional instance to populate.
     * @return {module:model/GetKeysResponse} The populated <code>GetKeysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetKeysResponse();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [VaultEncryptionKey]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetKeysResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetKeysResponse</code>.
     */
    static validateJSON(data) {
        if (data['details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['details'])) {
                throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
            }
            // validate the optional field `details` (array)
            for (const item of data['details']) {
                VaultEncryptionKey.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/VaultEncryptionKey>} details
 */
GetKeysResponse.prototype['details'] = undefined;






export default GetKeysResponse;

