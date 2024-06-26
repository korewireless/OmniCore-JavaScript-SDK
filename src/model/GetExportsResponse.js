/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.21
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ExportDetail from './ExportDetail';

/**
 * The GetExportsResponse model module.
 * @module model/GetExportsResponse
 * @version 1.8.21
 */
class GetExportsResponse {
    /**
     * Constructs a new <code>GetExportsResponse</code>.
     * @alias module:model/GetExportsResponse
     */
    constructor() { 
        
        GetExportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetExportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExportsResponse} obj Optional instance to populate.
     * @return {module:model/GetExportsResponse} The populated <code>GetExportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetExportsResponse();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [ExportDetail]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetExportsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExportsResponse</code>.
     */
    static validateJSON(data) {
        if (data['details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['details'])) {
                throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
            }
            // validate the optional field `details` (array)
            for (const item of data['details']) {
                ExportDetail.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ExportDetail>} details
 */
GetExportsResponse.prototype['details'] = undefined;






export default GetExportsResponse;

