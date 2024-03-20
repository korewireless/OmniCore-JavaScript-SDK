/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.14
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BindRequest model module.
 * @module model/BindRequest
 * @version 1.8.14
 */
class BindRequest {
    /**
     * Constructs a new <code>BindRequest</code>.
     * @alias module:model/BindRequest
     * @param deviceId {String} 
     * @param gatewayId {String} 
     */
    constructor(deviceId, gatewayId) { 
        
        BindRequest.initialize(this, deviceId, gatewayId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deviceId, gatewayId) { 
        obj['deviceId'] = deviceId;
        obj['gatewayId'] = gatewayId;
    }

    /**
     * Constructs a <code>BindRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BindRequest} obj Optional instance to populate.
     * @return {module:model/BindRequest} The populated <code>BindRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BindRequest();

            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('gatewayId')) {
                obj['gatewayId'] = ApiClient.convertToType(data['gatewayId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BindRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BindRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BindRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['deviceId'] && !(typeof data['deviceId'] === 'string' || data['deviceId'] instanceof String)) {
            throw new Error("Expected the field `deviceId` to be a primitive type in the JSON string but got " + data['deviceId']);
        }
        // ensure the json data is a string
        if (data['gatewayId'] && !(typeof data['gatewayId'] === 'string' || data['gatewayId'] instanceof String)) {
            throw new Error("Expected the field `gatewayId` to be a primitive type in the JSON string but got " + data['gatewayId']);
        }

        return true;
    }


}

BindRequest.RequiredProperties = ["deviceId", "gatewayId"];

/**
 * @member {String} deviceId
 */
BindRequest.prototype['deviceId'] = undefined;

/**
 * @member {String} gatewayId
 */
BindRequest.prototype['gatewayId'] = undefined;






export default BindRequest;

