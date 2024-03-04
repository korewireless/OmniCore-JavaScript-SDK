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

/**
 * The StartExportBody model module.
 * @module model/StartExportBody
 * @version 1.8.12
 */
class StartExportBody {
    /**
     * Constructs a new <code>StartExportBody</code>.
     * @alias module:model/StartExportBody
     */
    constructor() { 
        
        StartExportBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StartExportBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StartExportBody} obj Optional instance to populate.
     * @return {module:model/StartExportBody} The populated <code>StartExportBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartExportBody();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartExportBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartExportBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
        }

        return true;
    }


}



/**
 * @member {String} source
 */
StartExportBody.prototype['source'] = undefined;

/**
 * @member {String} destination
 */
StartExportBody.prototype['destination'] = undefined;






export default StartExportBody;

