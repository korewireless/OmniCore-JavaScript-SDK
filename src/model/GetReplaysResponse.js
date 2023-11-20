/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.2
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Replay from './Replay';

/**
 * The GetReplaysResponse model module.
 * @module model/GetReplaysResponse
 * @version 1.8.2
 */
class GetReplaysResponse {
    /**
     * Constructs a new <code>GetReplaysResponse</code>.
     * @alias module:model/GetReplaysResponse
     */
    constructor() { 
        
        GetReplaysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReplaysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReplaysResponse} obj Optional instance to populate.
     * @return {module:model/GetReplaysResponse} The populated <code>GetReplaysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReplaysResponse();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [Replay]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetReplaysResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetReplaysResponse</code>.
     */
    static validateJSON(data) {
        if (data['details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['details'])) {
                throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
            }
            // validate the optional field `details` (array)
            for (const item of data['details']) {
                Replay.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Replay>} details
 */
GetReplaysResponse.prototype['details'] = undefined;






export default GetReplaysResponse;

