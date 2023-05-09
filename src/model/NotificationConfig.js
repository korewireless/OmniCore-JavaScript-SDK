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
import Bool from './Bool';

/**
 * The NotificationConfig model module.
 * @module model/NotificationConfig
 * @version 1.0
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
            if (data.hasOwnProperty('isGcpPubSub')) {
                obj['isGcpPubSub'] = ApiClient.convertToType(data['isGcpPubSub'], Bool);
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

        return true;
    }


}



/**
 * PubsubTopicName: A Topic name. For example, `projects/myProject/topics/deviceEvents`.
 * @member {String} pubsubTopicName
 */
NotificationConfig.prototype['pubsubTopicName'] = undefined;

/**
 * Describe whether the topic is Gcp pubsub topic or Omni topic
 * @member {module:model/Bool} isGcpPubSub
 */
NotificationConfig.prototype['isGcpPubSub'] = undefined;






export default NotificationConfig;

