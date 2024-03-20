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
 * The DeviceOnline model module.
 * @module model/DeviceOnline
 * @version 1.8.14
 */
class DeviceOnline {
    /**
     * Constructs a new <code>DeviceOnline</code>.
     * @alias module:model/DeviceOnline
     * @param id {String} 
     */
    constructor(id) { 
        
        DeviceOnline.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>DeviceOnline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceOnline} obj Optional instance to populate.
     * @return {module:model/DeviceOnline} The populated <code>DeviceOnline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceOnline();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('registry')) {
                obj['registry'] = ApiClient.convertToType(data['registry'], 'String');
            }
            if (data.hasOwnProperty('clientOnline')) {
                obj['clientOnline'] = ApiClient.convertToType(data['clientOnline'], 'Boolean');
            }
            if (data.hasOwnProperty('lastHeartbeatTime')) {
                obj['lastHeartbeatTime'] = ApiClient.convertToType(data['lastHeartbeatTime'], 'String');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceOnline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceOnline</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceOnline.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['registry'] && !(typeof data['registry'] === 'string' || data['registry'] instanceof String)) {
            throw new Error("Expected the field `registry` to be a primitive type in the JSON string but got " + data['registry']);
        }
        // ensure the json data is a string
        if (data['lastHeartbeatTime'] && !(typeof data['lastHeartbeatTime'] === 'string' || data['lastHeartbeatTime'] instanceof String)) {
            throw new Error("Expected the field `lastHeartbeatTime` to be a primitive type in the JSON string but got " + data['lastHeartbeatTime']);
        }
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
        }

        return true;
    }


}

DeviceOnline.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
DeviceOnline.prototype['id'] = undefined;

/**
 * @member {String} registry
 */
DeviceOnline.prototype['registry'] = undefined;

/**
 * @member {Boolean} clientOnline
 */
DeviceOnline.prototype['clientOnline'] = undefined;

/**
 * @member {String} lastHeartbeatTime
 */
DeviceOnline.prototype['lastHeartbeatTime'] = undefined;

/**
 * @member {String} subscription
 */
DeviceOnline.prototype['subscription'] = undefined;






export default DeviceOnline;

