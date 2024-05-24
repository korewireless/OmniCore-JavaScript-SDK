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
import DeviceState from './DeviceState';

/**
 * The ListDeviceStatesResponse model module.
 * @module model/ListDeviceStatesResponse
 * @version 1.8.20
 */
class ListDeviceStatesResponse {
    /**
     * Constructs a new <code>ListDeviceStatesResponse</code>.
     * @alias module:model/ListDeviceStatesResponse
     */
    constructor() { 
        
        ListDeviceStatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDeviceStatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDeviceStatesResponse} obj Optional instance to populate.
     * @return {module:model/ListDeviceStatesResponse} The populated <code>ListDeviceStatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDeviceStatesResponse();

            if (data.hasOwnProperty('deviceStates')) {
                obj['deviceStates'] = ApiClient.convertToType(data['deviceStates'], [DeviceState]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListDeviceStatesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListDeviceStatesResponse</code>.
     */
    static validateJSON(data) {
        if (data['deviceStates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deviceStates'])) {
                throw new Error("Expected the field `deviceStates` to be an array in the JSON data but got " + data['deviceStates']);
            }
            // validate the optional field `deviceStates` (array)
            for (const item of data['deviceStates']) {
                DeviceState.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/DeviceState>} deviceStates
 */
ListDeviceStatesResponse.prototype['deviceStates'] = undefined;






export default ListDeviceStatesResponse;

