/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventNotificationConfig model module.
 * @module model/EventNotificationConfig
 * @version 1.0
 */
class EventNotificationConfig {
    /**
     * Constructs a new <code>EventNotificationConfig</code>.
     * @alias module:model/EventNotificationConfig
     */
    constructor() { 
        
        EventNotificationConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventNotificationConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventNotificationConfig} obj Optional instance to populate.
     * @return {module:model/EventNotificationConfig} The populated <code>EventNotificationConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventNotificationConfig();

            if (data.hasOwnProperty('pubsubTopicName')) {
                obj['pubsubTopicName'] = ApiClient.convertToType(data['pubsubTopicName'], 'String');
            }
            if (data.hasOwnProperty('subfolderMatches')) {
                obj['subfolderMatches'] = ApiClient.convertToType(data['subfolderMatches'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventNotificationConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventNotificationConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pubsubTopicName'] && !(typeof data['pubsubTopicName'] === 'string' || data['pubsubTopicName'] instanceof String)) {
            throw new Error("Expected the field `pubsubTopicName` to be a primitive type in the JSON string but got " + data['pubsubTopicName']);
        }
        // ensure the json data is a string
        if (data['subfolderMatches'] && !(typeof data['subfolderMatches'] === 'string' || data['subfolderMatches'] instanceof String)) {
            throw new Error("Expected the field `subfolderMatches` to be a primitive type in the JSON string but got " + data['subfolderMatches']);
        }

        return true;
    }


}



/**
 * PubsubTopicName: A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.
 * @member {String} pubsubTopicName
 */
EventNotificationConfig.prototype['pubsubTopicName'] = undefined;

/**
 * SubfolderMatches: If the subfolder name matches this string exactly, this configuration will be used. The string must not include the leading '/' character. If empty, all strings are matched. This field is used only for telemetry events; subfolders are not supported for state changes.
 * @member {String} subfolderMatches
 */
EventNotificationConfig.prototype['subfolderMatches'] = undefined;






export default EventNotificationConfig;

