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

/**
 * The VaultStatusDetails model module.
 * @module model/VaultStatusDetails
 * @version 1.8.6
 */
class VaultStatusDetails {
    /**
     * Constructs a new <code>VaultStatusDetails</code>.
     * @alias module:model/VaultStatusDetails
     */
    constructor() { 
        
        VaultStatusDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultStatusDetails} obj Optional instance to populate.
     * @return {module:model/VaultStatusDetails} The populated <code>VaultStatusDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultStatusDetails();

            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = ApiClient.convertToType(data['storageType'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isCreated')) {
                obj['isCreated'] = ApiClient.convertToType(data['isCreated'], 'Boolean');
            }
            if (data.hasOwnProperty('updatedon')) {
                obj['updatedon'] = ApiClient.convertToType(data['updatedon'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('MqttId')) {
                obj['MqttId'] = ApiClient.convertToType(data['MqttId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VaultStatusDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VaultStatusDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }
        // ensure the json data is a string
        if (data['storageType'] && !(typeof data['storageType'] === 'string' || data['storageType'] instanceof String)) {
            throw new Error("Expected the field `storageType` to be a primitive type in the JSON string but got " + data['storageType']);
        }
        // ensure the json data is a string
        if (data['updatedon'] && !(typeof data['updatedon'] === 'string' || data['updatedon'] instanceof String)) {
            throw new Error("Expected the field `updatedon` to be a primitive type in the JSON string but got " + data['updatedon']);
        }
        // ensure the json data is a string
        if (data['createdOn'] && !(typeof data['createdOn'] === 'string' || data['createdOn'] instanceof String)) {
            throw new Error("Expected the field `createdOn` to be a primitive type in the JSON string but got " + data['createdOn']);
        }
        // ensure the json data is a string
        if (data['MqttId'] && !(typeof data['MqttId'] === 'string' || data['MqttId'] instanceof String)) {
            throw new Error("Expected the field `MqttId` to be a primitive type in the JSON string but got " + data['MqttId']);
        }

        return true;
    }


}



/**
 * @member {String} subscriptionId
 */
VaultStatusDetails.prototype['subscriptionId'] = undefined;

/**
 * @member {String} storageType
 */
VaultStatusDetails.prototype['storageType'] = undefined;

/**
 * @member {Boolean} isEnabled
 */
VaultStatusDetails.prototype['isEnabled'] = undefined;

/**
 * @member {Boolean} isCreated
 */
VaultStatusDetails.prototype['isCreated'] = undefined;

/**
 * @member {String} updatedon
 */
VaultStatusDetails.prototype['updatedon'] = undefined;

/**
 * @member {String} createdOn
 */
VaultStatusDetails.prototype['createdOn'] = undefined;

/**
 * @member {String} MqttId
 */
VaultStatusDetails.prototype['MqttId'] = undefined;






export default VaultStatusDetails;

