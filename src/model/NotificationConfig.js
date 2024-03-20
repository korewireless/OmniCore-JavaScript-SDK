/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.13
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NotificationConfig model module.
 * @module model/NotificationConfig
 * @version 1.8.13
 */
class NotificationConfig {
    /**
     * Constructs a new <code>NotificationConfig</code>.
     * @alias module:model/NotificationConfig
     */
    constructor() { 
        
        NotificationConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationConfig} obj Optional instance to populate.
     * @return {module:model/NotificationConfig} The populated <code>NotificationConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationConfig();

            if (data.hasOwnProperty('pubsubTopicName')) {
                obj['pubsubTopicName'] = ApiClient.convertToType(data['pubsubTopicName'], 'String');
            }
            if (data.hasOwnProperty('roleArn')) {
                obj['roleArn'] = ApiClient.convertToType(data['roleArn'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pubsubTopicName'] && !(typeof data['pubsubTopicName'] === 'string' || data['pubsubTopicName'] instanceof String)) {
            throw new Error("Expected the field `pubsubTopicName` to be a primitive type in the JSON string but got " + data['pubsubTopicName']);
        }
        // ensure the json data is a string
        if (data['roleArn'] && !(typeof data['roleArn'] === 'string' || data['roleArn'] instanceof String)) {
            throw new Error("Expected the field `roleArn` to be a primitive type in the JSON string but got " + data['roleArn']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['stream'] && !(typeof data['stream'] === 'string' || data['stream'] instanceof String)) {
            throw new Error("Expected the field `stream` to be a primitive type in the JSON string but got " + data['stream']);
        }

        return true;
    }


}



/**
 * PubsubTopicName: A Topic name. For example, `projects/myProject/topics/deviceEvents`.
 * @member {String} pubsubTopicName
 */
NotificationConfig.prototype['pubsubTopicName'] = undefined;

/**
 * @member {String} roleArn
 */
NotificationConfig.prototype['roleArn'] = undefined;

/**
 * @member {String} region
 */
NotificationConfig.prototype['region'] = undefined;

/**
 * @member {String} stream
 */
NotificationConfig.prototype['stream'] = undefined;






export default NotificationConfig;

