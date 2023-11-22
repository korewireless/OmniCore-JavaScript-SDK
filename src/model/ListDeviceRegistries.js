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
import DeviceRegistry from './DeviceRegistry';

/**
 * The ListDeviceRegistries model module.
 * @module model/ListDeviceRegistries
 * @version 1.8.6
 */
class ListDeviceRegistries {
    /**
     * Constructs a new <code>ListDeviceRegistries</code>.
     * @alias module:model/ListDeviceRegistries
     * @param deviceRegistries {Array.<module:model/DeviceRegistry>} 
     */
    constructor(deviceRegistries) { 
        
        ListDeviceRegistries.initialize(this, deviceRegistries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deviceRegistries) { 
        obj['deviceRegistries'] = deviceRegistries;
    }

    /**
     * Constructs a <code>ListDeviceRegistries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDeviceRegistries} obj Optional instance to populate.
     * @return {module:model/ListDeviceRegistries} The populated <code>ListDeviceRegistries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDeviceRegistries();

            if (data.hasOwnProperty('deviceRegistries')) {
                obj['deviceRegistries'] = ApiClient.convertToType(data['deviceRegistries'], [DeviceRegistry]);
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
     * Validates the JSON data with respect to <code>ListDeviceRegistries</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListDeviceRegistries</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListDeviceRegistries.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['deviceRegistries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deviceRegistries'])) {
                throw new Error("Expected the field `deviceRegistries` to be an array in the JSON data but got " + data['deviceRegistries']);
            }
            // validate the optional field `deviceRegistries` (array)
            for (const item of data['deviceRegistries']) {
                DeviceRegistry.validateJsonObject(item);
            };
        }

        return true;
    }


}

ListDeviceRegistries.RequiredProperties = ["deviceRegistries"];

/**
 * @member {Array.<module:model/DeviceRegistry>} deviceRegistries
 */
ListDeviceRegistries.prototype['deviceRegistries'] = undefined;

/**
 * @member {Number} pageNumber
 */
ListDeviceRegistries.prototype['pageNumber'] = undefined;

/**
 * @member {Number} pageSize
 */
ListDeviceRegistries.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalCount
 */
ListDeviceRegistries.prototype['totalCount'] = undefined;






export default ListDeviceRegistries;

