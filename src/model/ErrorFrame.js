/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.6
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorFrame model module.
 * @module model/ErrorFrame
 * @version 1.8.6
 */
class ErrorFrame {
    /**
     * Constructs a new <code>ErrorFrame</code>.
     * @alias module:model/ErrorFrame
     * @param code {Number} 
     * @param details {String} 
     * @param message {String} 
     * @param status {String} 
     */
    constructor(code, details, message, status) { 
        
        ErrorFrame.initialize(this, code, details, message, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, details, message, status) { 
        obj['code'] = code;
        obj['details'] = details;
        obj['message'] = message;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ErrorFrame</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorFrame} obj Optional instance to populate.
     * @return {module:model/ErrorFrame} The populated <code>ErrorFrame</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorFrame();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorFrame</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorFrame</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ErrorFrame.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

ErrorFrame.RequiredProperties = ["code", "details", "message", "status"];

/**
 * @member {Number} code
 */
ErrorFrame.prototype['code'] = undefined;

/**
 * @member {String} details
 */
ErrorFrame.prototype['details'] = undefined;

/**
 * @member {String} message
 */
ErrorFrame.prototype['message'] = undefined;

/**
 * @member {String} status
 */
ErrorFrame.prototype['status'] = undefined;






export default ErrorFrame;

