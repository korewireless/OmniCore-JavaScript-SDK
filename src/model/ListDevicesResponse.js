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
import Device from './Device';

/**
 * The ListDevicesResponse model module.
 * @module model/ListDevicesResponse
 * @version 1.8.6
 */
class ListDevicesResponse {
    /**
     * Constructs a new <code>ListDevicesResponse</code>.
     * @alias module:model/ListDevicesResponse
     * @param devices {Array.<module:model/Device>} 
     */
    constructor(devices) { 
        
        ListDevicesResponse.initialize(this, devices);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, devices) { 
        obj['devices'] = devices;
    }

    /**
     * Constructs a <code>ListDevicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDevicesResponse} obj Optional instance to populate.
     * @return {module:model/ListDevicesResponse} The populated <code>ListDevicesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDevicesResponse();

            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [Device]);
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListDevicesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListDevicesResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListDevicesResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['devices']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['devices'])) {
                throw new Error("Expected the field `devices` to be an array in the JSON data but got " + data['devices']);
            }
            // validate the optional field `devices` (array)
            for (const item of data['devices']) {
                Device.validateJsonObject(item);
            };
        }

        return true;
    }


}

ListDevicesResponse.RequiredProperties = ["devices"];

/**
 * @member {Array.<module:model/Device>} devices
 */
ListDevicesResponse.prototype['devices'] = undefined;

/**
 * @member {Number} pageNumber
 */
ListDevicesResponse.prototype['pageNumber'] = undefined;

/**
 * @member {Number} pageSize
 */
ListDevicesResponse.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalCount
 */
ListDevicesResponse.prototype['totalCount'] = undefined;






export default ListDevicesResponse;

