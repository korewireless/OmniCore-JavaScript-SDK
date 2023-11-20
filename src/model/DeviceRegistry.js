/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EventNotificationConfig from './EventNotificationConfig';
import HttpConfig from './HttpConfig';
import LogLevel from './LogLevel';
import MqttConfig from './MqttConfig';
import NotificationConfig from './NotificationConfig';
import RegistryCredential from './RegistryCredential';

/**
 * The DeviceRegistry model module.
 * @module model/DeviceRegistry
 * @version 1.8.3
 */
class DeviceRegistry {
    /**
     * Constructs a new <code>DeviceRegistry</code>.
     * @alias module:model/DeviceRegistry
     * @param id {String} 
     */
    constructor(id) { 
        
        DeviceRegistry.initialize(this, id);
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
     * Constructs a <code>DeviceRegistry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceRegistry} obj Optional instance to populate.
     * @return {module:model/DeviceRegistry} The populated <code>DeviceRegistry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceRegistry();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [RegistryCredential]);
            }
            if (data.hasOwnProperty('httpConfig')) {
                obj['httpConfig'] = HttpConfig.constructFromObject(data['httpConfig']);
            }
            if (data.hasOwnProperty('mqttConfig')) {
                obj['mqttConfig'] = MqttConfig.constructFromObject(data['mqttConfig']);
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = LogLevel.constructFromObject(data['logLevel']);
            }
            if (data.hasOwnProperty('isNatsRoute')) {
                obj['isNatsRoute'] = ApiClient.convertToType(data['isNatsRoute'], 'Boolean');
            }
            if (data.hasOwnProperty('eventNotificationConfigs')) {
                obj['eventNotificationConfigs'] = ApiClient.convertToType(data['eventNotificationConfigs'], [EventNotificationConfig]);
            }
            if (data.hasOwnProperty('logNotificationConfig')) {
                obj['logNotificationConfig'] = NotificationConfig.constructFromObject(data['logNotificationConfig']);
            }
            if (data.hasOwnProperty('stateNotificationConfig')) {
                obj['stateNotificationConfig'] = NotificationConfig.constructFromObject(data['stateNotificationConfig']);
            }
            if (data.hasOwnProperty('customOnboardNotificationConfig')) {
                obj['customOnboardNotificationConfig'] = NotificationConfig.constructFromObject(data['customOnboardNotificationConfig']);
            }
            if (data.hasOwnProperty('customOnboardEnabled')) {
                obj['customOnboardEnabled'] = ApiClient.convertToType(data['customOnboardEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('numberOfDevices')) {
                obj['numberOfDevices'] = ApiClient.convertToType(data['numberOfDevices'], 'Number');
            }
            if (data.hasOwnProperty('numberOfGateways')) {
                obj['numberOfGateways'] = ApiClient.convertToType(data['numberOfGateways'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceRegistry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceRegistry</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceRegistry.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent'] && !(typeof data['parent'] === 'string' || data['parent'] instanceof String)) {
            throw new Error("Expected the field `parent` to be a primitive type in the JSON string but got " + data['parent']);
        }
        // ensure the json data is a string
        if (data['createdOn'] && !(typeof data['createdOn'] === 'string' || data['createdOn'] instanceof String)) {
            throw new Error("Expected the field `createdOn` to be a primitive type in the JSON string but got " + data['createdOn']);
        }
        // ensure the json data is a string
        if (data['updatedOn'] && !(typeof data['updatedOn'] === 'string' || data['updatedOn'] instanceof String)) {
            throw new Error("Expected the field `updatedOn` to be a primitive type in the JSON string but got " + data['updatedOn']);
        }
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                RegistryCredential.validateJsonObject(item);
            };
        }
        // validate the optional field `httpConfig`
        if (data['httpConfig']) { // data not null
          HttpConfig.validateJSON(data['httpConfig']);
        }
        // validate the optional field `mqttConfig`
        if (data['mqttConfig']) { // data not null
          MqttConfig.validateJSON(data['mqttConfig']);
        }
        if (data['eventNotificationConfigs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['eventNotificationConfigs'])) {
                throw new Error("Expected the field `eventNotificationConfigs` to be an array in the JSON data but got " + data['eventNotificationConfigs']);
            }
            // validate the optional field `eventNotificationConfigs` (array)
            for (const item of data['eventNotificationConfigs']) {
                EventNotificationConfig.validateJsonObject(item);
            };
        }
        // validate the optional field `logNotificationConfig`
        if (data['logNotificationConfig']) { // data not null
          NotificationConfig.validateJSON(data['logNotificationConfig']);
        }
        // validate the optional field `stateNotificationConfig`
        if (data['stateNotificationConfig']) { // data not null
          NotificationConfig.validateJSON(data['stateNotificationConfig']);
        }
        // validate the optional field `customOnboardNotificationConfig`
        if (data['customOnboardNotificationConfig']) { // data not null
          NotificationConfig.validateJSON(data['customOnboardNotificationConfig']);
        }

        return true;
    }


}

DeviceRegistry.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
DeviceRegistry.prototype['id'] = undefined;

/**
 * @member {String} name
 */
DeviceRegistry.prototype['name'] = undefined;

/**
 * @member {String} parent
 */
DeviceRegistry.prototype['parent'] = undefined;

/**
 * @member {String} createdOn
 */
DeviceRegistry.prototype['createdOn'] = undefined;

/**
 * @member {String} updatedOn
 */
DeviceRegistry.prototype['updatedOn'] = undefined;

/**
 * @member {Array.<module:model/RegistryCredential>} credentials
 */
DeviceRegistry.prototype['credentials'] = undefined;

/**
 * @member {module:model/HttpConfig} httpConfig
 */
DeviceRegistry.prototype['httpConfig'] = undefined;

/**
 * @member {module:model/MqttConfig} mqttConfig
 */
DeviceRegistry.prototype['mqttConfig'] = undefined;

/**
 * @member {module:model/LogLevel} logLevel
 */
DeviceRegistry.prototype['logLevel'] = undefined;

/**
 * @member {Boolean} isNatsRoute
 */
DeviceRegistry.prototype['isNatsRoute'] = undefined;

/**
 * @member {Array.<module:model/EventNotificationConfig>} eventNotificationConfigs
 */
DeviceRegistry.prototype['eventNotificationConfigs'] = undefined;

/**
 * @member {module:model/NotificationConfig} logNotificationConfig
 */
DeviceRegistry.prototype['logNotificationConfig'] = undefined;

/**
 * @member {module:model/NotificationConfig} stateNotificationConfig
 */
DeviceRegistry.prototype['stateNotificationConfig'] = undefined;

/**
 * @member {module:model/NotificationConfig} customOnboardNotificationConfig
 */
DeviceRegistry.prototype['customOnboardNotificationConfig'] = undefined;

/**
 * @member {Boolean} customOnboardEnabled
 */
DeviceRegistry.prototype['customOnboardEnabled'] = undefined;

/**
 * @member {Number} numberOfDevices
 */
DeviceRegistry.prototype['numberOfDevices'] = undefined;

/**
 * @member {Number} numberOfGateways
 */
DeviceRegistry.prototype['numberOfGateways'] = undefined;






export default DeviceRegistry;

