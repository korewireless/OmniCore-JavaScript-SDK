/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.12
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeviceConfig from './DeviceConfig';
import DeviceCredential from './DeviceCredential';
import DeviceState from './DeviceState';
import ErrorStatus from './ErrorStatus';
import GatewayConfig from './GatewayConfig';
import LogLevel from './LogLevel';
import Policy from './Policy';

/**
 * The CustomOnboard model module.
 * @module model/CustomOnboard
 * @version 1.8.12
 */
class CustomOnboard {
    /**
     * Constructs a new <code>CustomOnboard</code>.
     * @alias module:model/CustomOnboard
     * @param id {String} 
     */
    constructor(id) { 
        
        CustomOnboard.initialize(this, id);
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
     * Constructs a <code>CustomOnboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomOnboard} obj Optional instance to populate.
     * @return {module:model/CustomOnboard} The populated <code>CustomOnboard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomOnboard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('numId')) {
                obj['numId'] = ApiClient.convertToType(data['numId'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('registry')) {
                obj['registry'] = ApiClient.convertToType(data['registry'], 'String');
            }
            if (data.hasOwnProperty('blocked')) {
                obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
            }
            if (data.hasOwnProperty('capresent')) {
                obj['capresent'] = ApiClient.convertToType(data['capresent'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [DeviceCredential]);
            }
            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = ApiClient.convertToType(data['gateway'], ['String']);
            }
            if (data.hasOwnProperty('gatewayConfig')) {
                obj['gatewayConfig'] = GatewayConfig.constructFromObject(data['gatewayConfig']);
            }
            if (data.hasOwnProperty('isGateway')) {
                obj['isGateway'] = ApiClient.convertToType(data['isGateway'], 'Boolean');
            }
            if (data.hasOwnProperty('deviceErrors')) {
                obj['deviceErrors'] = ApiClient.convertToType(data['deviceErrors'], 'String');
            }
            if (data.hasOwnProperty('clientOnline')) {
                obj['clientOnline'] = ApiClient.convertToType(data['clientOnline'], 'Boolean');
            }
            if (data.hasOwnProperty('lastConfigAckTime')) {
                obj['lastConfigAckTime'] = ApiClient.convertToType(data['lastConfigAckTime'], 'String');
            }
            if (data.hasOwnProperty('lastConfigSendTime')) {
                obj['lastConfigSendTime'] = ApiClient.convertToType(data['lastConfigSendTime'], 'String');
            }
            if (data.hasOwnProperty('lastErrorStatus')) {
                obj['lastErrorStatus'] = ErrorStatus.constructFromObject(data['lastErrorStatus']);
            }
            if (data.hasOwnProperty('lastErrorTime')) {
                obj['lastErrorTime'] = ApiClient.convertToType(data['lastErrorTime'], 'String');
            }
            if (data.hasOwnProperty('lastEventTime')) {
                obj['lastEventTime'] = ApiClient.convertToType(data['lastEventTime'], 'String');
            }
            if (data.hasOwnProperty('lastHeartbeatTime')) {
                obj['lastHeartbeatTime'] = ApiClient.convertToType(data['lastHeartbeatTime'], 'String');
            }
            if (data.hasOwnProperty('lastStateTime')) {
                obj['lastStateTime'] = ApiClient.convertToType(data['lastStateTime'], 'String');
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = LogLevel.constructFromObject(data['logLevel']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = DeviceConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = DeviceState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('policy')) {
                obj['policy'] = Policy.constructFromObject(data['policy']);
            }
            if (data.hasOwnProperty('customOnboardData')) {
                obj['customOnboardData'] = ApiClient.convertToType(data['customOnboardData'], 'String');
            }
            if (data.hasOwnProperty('isApprove')) {
                obj['isApprove'] = ApiClient.convertToType(data['isApprove'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomOnboard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomOnboard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomOnboard.RequiredProperties) {
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
        if (data['numId'] && !(typeof data['numId'] === 'string' || data['numId'] instanceof String)) {
            throw new Error("Expected the field `numId` to be a primitive type in the JSON string but got " + data['numId']);
        }
        // ensure the json data is a string
        if (data['parent'] && !(typeof data['parent'] === 'string' || data['parent'] instanceof String)) {
            throw new Error("Expected the field `parent` to be a primitive type in the JSON string but got " + data['parent']);
        }
        // ensure the json data is a string
        if (data['registry'] && !(typeof data['registry'] === 'string' || data['registry'] instanceof String)) {
            throw new Error("Expected the field `registry` to be a primitive type in the JSON string but got " + data['registry']);
        }
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
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
                DeviceCredential.validateJsonObject(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gateway'])) {
            throw new Error("Expected the field `gateway` to be an array in the JSON data but got " + data['gateway']);
        }
        // validate the optional field `gatewayConfig`
        if (data['gatewayConfig']) { // data not null
          GatewayConfig.validateJSON(data['gatewayConfig']);
        }
        // ensure the json data is a string
        if (data['deviceErrors'] && !(typeof data['deviceErrors'] === 'string' || data['deviceErrors'] instanceof String)) {
            throw new Error("Expected the field `deviceErrors` to be a primitive type in the JSON string but got " + data['deviceErrors']);
        }
        // ensure the json data is a string
        if (data['lastConfigAckTime'] && !(typeof data['lastConfigAckTime'] === 'string' || data['lastConfigAckTime'] instanceof String)) {
            throw new Error("Expected the field `lastConfigAckTime` to be a primitive type in the JSON string but got " + data['lastConfigAckTime']);
        }
        // ensure the json data is a string
        if (data['lastConfigSendTime'] && !(typeof data['lastConfigSendTime'] === 'string' || data['lastConfigSendTime'] instanceof String)) {
            throw new Error("Expected the field `lastConfigSendTime` to be a primitive type in the JSON string but got " + data['lastConfigSendTime']);
        }
        // validate the optional field `lastErrorStatus`
        if (data['lastErrorStatus']) { // data not null
          ErrorStatus.validateJSON(data['lastErrorStatus']);
        }
        // ensure the json data is a string
        if (data['lastErrorTime'] && !(typeof data['lastErrorTime'] === 'string' || data['lastErrorTime'] instanceof String)) {
            throw new Error("Expected the field `lastErrorTime` to be a primitive type in the JSON string but got " + data['lastErrorTime']);
        }
        // ensure the json data is a string
        if (data['lastEventTime'] && !(typeof data['lastEventTime'] === 'string' || data['lastEventTime'] instanceof String)) {
            throw new Error("Expected the field `lastEventTime` to be a primitive type in the JSON string but got " + data['lastEventTime']);
        }
        // ensure the json data is a string
        if (data['lastHeartbeatTime'] && !(typeof data['lastHeartbeatTime'] === 'string' || data['lastHeartbeatTime'] instanceof String)) {
            throw new Error("Expected the field `lastHeartbeatTime` to be a primitive type in the JSON string but got " + data['lastHeartbeatTime']);
        }
        // ensure the json data is a string
        if (data['lastStateTime'] && !(typeof data['lastStateTime'] === 'string' || data['lastStateTime'] instanceof String)) {
            throw new Error("Expected the field `lastStateTime` to be a primitive type in the JSON string but got " + data['lastStateTime']);
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          DeviceConfig.validateJSON(data['config']);
        }
        // validate the optional field `state`
        if (data['state']) { // data not null
          DeviceState.validateJSON(data['state']);
        }
        // validate the optional field `policy`
        if (data['policy']) { // data not null
          Policy.validateJSON(data['policy']);
        }
        // ensure the json data is a string
        if (data['customOnboardData'] && !(typeof data['customOnboardData'] === 'string' || data['customOnboardData'] instanceof String)) {
            throw new Error("Expected the field `customOnboardData` to be a primitive type in the JSON string but got " + data['customOnboardData']);
        }

        return true;
    }


}

CustomOnboard.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
CustomOnboard.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CustomOnboard.prototype['name'] = undefined;

/**
 * @member {String} numId
 */
CustomOnboard.prototype['numId'] = undefined;

/**
 * @member {String} parent
 */
CustomOnboard.prototype['parent'] = undefined;

/**
 * @member {String} registry
 */
CustomOnboard.prototype['registry'] = undefined;

/**
 * @member {Boolean} blocked
 */
CustomOnboard.prototype['blocked'] = undefined;

/**
 * @member {Boolean} capresent
 */
CustomOnboard.prototype['capresent'] = undefined;

/**
 * @member {String} subscription
 */
CustomOnboard.prototype['subscription'] = undefined;

/**
 * @member {String} createdOn
 */
CustomOnboard.prototype['createdOn'] = undefined;

/**
 * @member {String} updatedOn
 */
CustomOnboard.prototype['updatedOn'] = undefined;

/**
 * @member {Array.<module:model/DeviceCredential>} credentials
 */
CustomOnboard.prototype['credentials'] = undefined;

/**
 * @member {Array.<String>} gateway
 */
CustomOnboard.prototype['gateway'] = undefined;

/**
 * @member {module:model/GatewayConfig} gatewayConfig
 */
CustomOnboard.prototype['gatewayConfig'] = undefined;

/**
 * @member {Boolean} isGateway
 */
CustomOnboard.prototype['isGateway'] = undefined;

/**
 * @member {String} deviceErrors
 */
CustomOnboard.prototype['deviceErrors'] = undefined;

/**
 * @member {Boolean} clientOnline
 */
CustomOnboard.prototype['clientOnline'] = undefined;

/**
 * @member {String} lastConfigAckTime
 */
CustomOnboard.prototype['lastConfigAckTime'] = undefined;

/**
 * @member {String} lastConfigSendTime
 */
CustomOnboard.prototype['lastConfigSendTime'] = undefined;

/**
 * @member {module:model/ErrorStatus} lastErrorStatus
 */
CustomOnboard.prototype['lastErrorStatus'] = undefined;

/**
 * @member {String} lastErrorTime
 */
CustomOnboard.prototype['lastErrorTime'] = undefined;

/**
 * @member {String} lastEventTime
 */
CustomOnboard.prototype['lastEventTime'] = undefined;

/**
 * @member {String} lastHeartbeatTime
 */
CustomOnboard.prototype['lastHeartbeatTime'] = undefined;

/**
 * @member {String} lastStateTime
 */
CustomOnboard.prototype['lastStateTime'] = undefined;

/**
 * @member {module:model/LogLevel} logLevel
 */
CustomOnboard.prototype['logLevel'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CustomOnboard.prototype['metadata'] = undefined;

/**
 * @member {module:model/DeviceConfig} config
 */
CustomOnboard.prototype['config'] = undefined;

/**
 * @member {module:model/DeviceState} state
 */
CustomOnboard.prototype['state'] = undefined;

/**
 * @member {module:model/Policy} policy
 */
CustomOnboard.prototype['policy'] = undefined;

/**
 * @member {String} customOnboardData
 */
CustomOnboard.prototype['customOnboardData'] = undefined;

/**
 * @member {Boolean} isApprove
 */
CustomOnboard.prototype['isApprove'] = undefined;






export default CustomOnboard;

