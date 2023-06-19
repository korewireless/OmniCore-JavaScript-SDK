/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.1
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Policy model module.
 * @module model/Policy
 * @version 1.8.1
 */
class Policy {
    /**
     * Constructs a new <code>Policy</code>.
     * @alias module:model/Policy
     * @param connect {Boolean} 
     * @param publishState {Boolean} 
     * @param publishEvents {Boolean} 
     * @param publishEventsRegex {String} 
     * @param publishLoopback {Boolean} 
     * @param subscribeCommand {Boolean} 
     * @param subscribeCommandRegex {String} 
     * @param subscribeBroadcast {Boolean} 
     * @param subscribeBroadcastRegex {String} 
     * @param subscribeConfig {Boolean} 
     */
    constructor(connect, publishState, publishEvents, publishEventsRegex, publishLoopback, subscribeCommand, subscribeCommandRegex, subscribeBroadcast, subscribeBroadcastRegex, subscribeConfig) { 
        
        Policy.initialize(this, connect, publishState, publishEvents, publishEventsRegex, publishLoopback, subscribeCommand, subscribeCommandRegex, subscribeBroadcast, subscribeBroadcastRegex, subscribeConfig);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, connect, publishState, publishEvents, publishEventsRegex, publishLoopback, subscribeCommand, subscribeCommandRegex, subscribeBroadcast, subscribeBroadcastRegex, subscribeConfig) { 
        obj['Connect'] = connect;
        obj['PublishState'] = publishState;
        obj['PublishEvents'] = publishEvents;
        obj['PublishEventsRegex'] = publishEventsRegex;
        obj['PublishLoopback'] = publishLoopback;
        obj['SubscribeCommand'] = subscribeCommand;
        obj['SubscribeCommandRegex'] = subscribeCommandRegex;
        obj['SubscribeBroadcast'] = subscribeBroadcast;
        obj['SubscribeBroadcastRegex'] = subscribeBroadcastRegex;
        obj['SubscribeConfig'] = subscribeConfig;
    }

    /**
     * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Policy} obj Optional instance to populate.
     * @return {module:model/Policy} The populated <code>Policy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Policy();

            if (data.hasOwnProperty('Connect')) {
                obj['Connect'] = ApiClient.convertToType(data['Connect'], 'Boolean');
            }
            if (data.hasOwnProperty('PublishState')) {
                obj['PublishState'] = ApiClient.convertToType(data['PublishState'], 'Boolean');
            }
            if (data.hasOwnProperty('PublishEvents')) {
                obj['PublishEvents'] = ApiClient.convertToType(data['PublishEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('PublishEventsRegex')) {
                obj['PublishEventsRegex'] = ApiClient.convertToType(data['PublishEventsRegex'], 'String');
            }
            if (data.hasOwnProperty('PublishLoopback')) {
                obj['PublishLoopback'] = ApiClient.convertToType(data['PublishLoopback'], 'Boolean');
            }
            if (data.hasOwnProperty('SubscribeCommand')) {
                obj['SubscribeCommand'] = ApiClient.convertToType(data['SubscribeCommand'], 'Boolean');
            }
            if (data.hasOwnProperty('SubscribeCommandRegex')) {
                obj['SubscribeCommandRegex'] = ApiClient.convertToType(data['SubscribeCommandRegex'], 'String');
            }
            if (data.hasOwnProperty('SubscribeBroadcast')) {
                obj['SubscribeBroadcast'] = ApiClient.convertToType(data['SubscribeBroadcast'], 'Boolean');
            }
            if (data.hasOwnProperty('SubscribeBroadcastRegex')) {
                obj['SubscribeBroadcastRegex'] = ApiClient.convertToType(data['SubscribeBroadcastRegex'], 'String');
            }
            if (data.hasOwnProperty('SubscribeConfig')) {
                obj['SubscribeConfig'] = ApiClient.convertToType(data['SubscribeConfig'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Policy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Policy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Policy.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['PublishEventsRegex'] && !(typeof data['PublishEventsRegex'] === 'string' || data['PublishEventsRegex'] instanceof String)) {
            throw new Error("Expected the field `PublishEventsRegex` to be a primitive type in the JSON string but got " + data['PublishEventsRegex']);
        }
        // ensure the json data is a string
        if (data['SubscribeCommandRegex'] && !(typeof data['SubscribeCommandRegex'] === 'string' || data['SubscribeCommandRegex'] instanceof String)) {
            throw new Error("Expected the field `SubscribeCommandRegex` to be a primitive type in the JSON string but got " + data['SubscribeCommandRegex']);
        }
        // ensure the json data is a string
        if (data['SubscribeBroadcastRegex'] && !(typeof data['SubscribeBroadcastRegex'] === 'string' || data['SubscribeBroadcastRegex'] instanceof String)) {
            throw new Error("Expected the field `SubscribeBroadcastRegex` to be a primitive type in the JSON string but got " + data['SubscribeBroadcastRegex']);
        }

        return true;
    }


}

Policy.RequiredProperties = ["Connect", "PublishState", "PublishEvents", "PublishEventsRegex", "PublishLoopback", "SubscribeCommand", "SubscribeCommandRegex", "SubscribeBroadcast", "SubscribeBroadcastRegex", "SubscribeConfig"];

/**
 * @member {Boolean} Connect
 */
Policy.prototype['Connect'] = undefined;

/**
 * @member {Boolean} PublishState
 */
Policy.prototype['PublishState'] = undefined;

/**
 * @member {Boolean} PublishEvents
 */
Policy.prototype['PublishEvents'] = undefined;

/**
 * @member {String} PublishEventsRegex
 */
Policy.prototype['PublishEventsRegex'] = undefined;

/**
 * @member {Boolean} PublishLoopback
 */
Policy.prototype['PublishLoopback'] = undefined;

/**
 * @member {Boolean} SubscribeCommand
 */
Policy.prototype['SubscribeCommand'] = undefined;

/**
 * @member {String} SubscribeCommandRegex
 */
Policy.prototype['SubscribeCommandRegex'] = undefined;

/**
 * @member {Boolean} SubscribeBroadcast
 */
Policy.prototype['SubscribeBroadcast'] = undefined;

/**
 * @member {String} SubscribeBroadcastRegex
 */
Policy.prototype['SubscribeBroadcastRegex'] = undefined;

/**
 * @member {Boolean} SubscribeConfig
 */
Policy.prototype['SubscribeConfig'] = undefined;






export default Policy;

