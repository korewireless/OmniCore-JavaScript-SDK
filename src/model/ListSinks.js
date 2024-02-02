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
import Sink from './Sink';

/**
 * The ListSinks model module.
 * @module model/ListSinks
 * @version 1.8.10
 */
class ListSinks {
    /**
     * Constructs a new <code>ListSinks</code>.
     * @alias module:model/ListSinks
     */
    constructor() { 
        
        ListSinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSinks} obj Optional instance to populate.
     * @return {module:model/ListSinks} The populated <code>ListSinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSinks();

            if (data.hasOwnProperty('sinks')) {
                obj['sinks'] = ApiClient.convertToType(data['sinks'], [Sink]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListSinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListSinks</code>.
     */
    static validateJSON(data) {
        if (data['sinks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sinks'])) {
                throw new Error("Expected the field `sinks` to be an array in the JSON data but got " + data['sinks']);
            }
            // validate the optional field `sinks` (array)
            for (const item of data['sinks']) {
                Sink.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Sink>} sinks
 */
ListSinks.prototype['sinks'] = undefined;






export default ListSinks;

