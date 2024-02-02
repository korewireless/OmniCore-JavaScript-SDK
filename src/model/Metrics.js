/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.10
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MetricsDetails from './MetricsDetails';

/**
 * The Metrics model module.
 * @module model/Metrics
 * @version 1.8.10
 */
class Metrics {
    /**
     * Constructs a new <code>Metrics</code>.
     * @alias module:model/Metrics
     */
    constructor() { 
        
        Metrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metrics} obj Optional instance to populate.
     * @return {module:model/Metrics} The populated <code>Metrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metrics();

            if (data.hasOwnProperty('details')) {
                obj['details'] = MetricsDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Metrics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Metrics</code>.
     */
    static validateJSON(data) {
        // validate the optional field `details`
        if (data['details']) { // data not null
          MetricsDetails.validateJSON(data['details']);
        }

        return true;
    }


}



/**
 * @member {module:model/MetricsDetails} details
 */
Metrics.prototype['details'] = undefined;






export default Metrics;

