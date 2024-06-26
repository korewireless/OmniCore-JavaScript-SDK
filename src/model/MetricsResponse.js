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
import MetricsResponseDetails from './MetricsResponseDetails';

/**
 * The MetricsResponse model module.
 * @module model/MetricsResponse
 * @version 1.8.21
 */
class MetricsResponse {
    /**
     * Constructs a new <code>MetricsResponse</code>.
     * @alias module:model/MetricsResponse
     */
    constructor() { 
        
        MetricsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricsResponse} obj Optional instance to populate.
     * @return {module:model/MetricsResponse} The populated <code>MetricsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricsResponse();

            if (data.hasOwnProperty('details')) {
                obj['details'] = MetricsResponseDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MetricsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetricsResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `details`
        if (data['details']) { // data not null
          MetricsResponseDetails.validateJSON(data['details']);
        }

        return true;
    }


}



/**
 * @member {module:model/MetricsResponseDetails} details
 */
MetricsResponse.prototype['details'] = undefined;






export default MetricsResponse;

