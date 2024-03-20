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
import Audit from './Audit';

/**
 * The AuditResult model module.
 * @module model/AuditResult
 * @version 1.8.14
 */
class AuditResult {
    /**
     * Constructs a new <code>AuditResult</code>.
     * @alias module:model/AuditResult
     */
    constructor() { 
        
        AuditResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditResult} obj Optional instance to populate.
     * @return {module:model/AuditResult} The populated <code>AuditResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditResult();

            if (data.hasOwnProperty('audit')) {
                obj['audit'] = ApiClient.convertToType(data['audit'], [Audit]);
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuditResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuditResult</code>.
     */
    static validateJSON(data) {
        if (data['audit']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['audit'])) {
                throw new Error("Expected the field `audit` to be an array in the JSON data but got " + data['audit']);
            }
            // validate the optional field `audit` (array)
            for (const item of data['audit']) {
                Audit.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Audit>} audit
 */
AuditResult.prototype['audit'] = undefined;

/**
 * @member {Number} totalCount
 */
AuditResult.prototype['totalCount'] = undefined;

/**
 * @member {Number} pageNumber
 */
AuditResult.prototype['pageNumber'] = undefined;

/**
 * @member {Number} pageSize
 */
AuditResult.prototype['pageSize'] = undefined;






export default AuditResult;

