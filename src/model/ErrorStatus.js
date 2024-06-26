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
 * The ErrorStatus model module.
 * @module model/ErrorStatus
 * @version 1.8.21
 */
class ErrorStatus {
    /**
     * Constructs a new <code>ErrorStatus</code>.
     * @alias module:model/ErrorStatus
     */
    constructor() { 
        
        ErrorStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorStatus} obj Optional instance to populate.
     * @return {module:model/ErrorStatus} The populated <code>ErrorStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorStatus();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {Number} code
 */
ErrorStatus.prototype['code'] = undefined;

/**
 * @member {String} details
 */
ErrorStatus.prototype['details'] = undefined;

/**
 * @member {String} message
 */
ErrorStatus.prototype['message'] = undefined;






export default ErrorStatus;

