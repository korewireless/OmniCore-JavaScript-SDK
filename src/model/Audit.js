/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.20
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Audit model module.
 * @module model/Audit
 * @version 1.8.20
 */
class Audit {
    /**
     * Constructs a new <code>Audit</code>.
     * @alias module:model/Audit
     */
    constructor() { 
        
        Audit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Audit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Audit} obj Optional instance to populate.
     * @return {module:model/Audit} The populated <code>Audit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Audit();

            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = ApiClient.convertToType(data['actor'], 'String');
            }
            if (data.hasOwnProperty('updatedon')) {
                obj['updatedon'] = ApiClient.convertToType(data['updatedon'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Audit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Audit</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }
        // ensure the json data is a string
        if (data['actor'] && !(typeof data['actor'] === 'string' || data['actor'] instanceof String)) {
            throw new Error("Expected the field `actor` to be a primitive type in the JSON string but got " + data['actor']);
        }
        // ensure the json data is a string
        if (data['updatedon'] && !(typeof data['updatedon'] === 'string' || data['updatedon'] instanceof String)) {
            throw new Error("Expected the field `updatedon` to be a primitive type in the JSON string but got " + data['updatedon']);
        }

        return true;
    }


}



/**
 * @member {String} subscriptionId
 */
Audit.prototype['subscriptionId'] = undefined;

/**
 * @member {String} operation
 */
Audit.prototype['operation'] = undefined;

/**
 * @member {String} actor
 */
Audit.prototype['actor'] = undefined;

/**
 * @member {String} updatedon
 */
Audit.prototype['updatedon'] = undefined;






export default Audit;

