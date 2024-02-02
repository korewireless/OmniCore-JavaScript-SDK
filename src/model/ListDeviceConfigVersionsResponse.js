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
import DeviceConfig from './DeviceConfig';

/**
 * The ListDeviceConfigVersionsResponse model module.
 * @module model/ListDeviceConfigVersionsResponse
 * @version 1.8.10
 */
class ListDeviceConfigVersionsResponse {
    /**
     * Constructs a new <code>ListDeviceConfigVersionsResponse</code>.
     * @alias module:model/ListDeviceConfigVersionsResponse
     */
    constructor() { 
        
        ListDeviceConfigVersionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDeviceConfigVersionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDeviceConfigVersionsResponse} obj Optional instance to populate.
     * @return {module:model/ListDeviceConfigVersionsResponse} The populated <code>ListDeviceConfigVersionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDeviceConfigVersionsResponse();

            if (data.hasOwnProperty('deviceConfigs')) {
                obj['deviceConfigs'] = ApiClient.convertToType(data['deviceConfigs'], [DeviceConfig]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListDeviceConfigVersionsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListDeviceConfigVersionsResponse</code>.
     */
    static validateJSON(data) {
        if (data['deviceConfigs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deviceConfigs'])) {
                throw new Error("Expected the field `deviceConfigs` to be an array in the JSON data but got " + data['deviceConfigs']);
            }
            // validate the optional field `deviceConfigs` (array)
            for (const item of data['deviceConfigs']) {
                DeviceConfig.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/DeviceConfig>} deviceConfigs
 */
ListDeviceConfigVersionsResponse.prototype['deviceConfigs'] = undefined;






export default ListDeviceConfigVersionsResponse;

