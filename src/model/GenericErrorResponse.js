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
import ErrorFrame from './ErrorFrame';

/**
 * The GenericErrorResponse model module.
 * @module model/GenericErrorResponse
 * @version 1.8.6
 */
class GenericErrorResponse {
    /**
     * Constructs a new <code>GenericErrorResponse</code>.
     * @alias module:model/GenericErrorResponse
     * @param error {module:model/ErrorFrame} 
     */
    constructor(error) { 
        
        GenericErrorResponse.initialize(this, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error) { 
        obj['error'] = error;
    }

    /**
     * Constructs a <code>GenericErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericErrorResponse} obj Optional instance to populate.
     * @return {module:model/GenericErrorResponse} The populated <code>GenericErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericErrorResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ErrorFrame.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenericErrorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenericErrorResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GenericErrorResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          ErrorFrame.validateJSON(data['error']);
        }

        return true;
    }


}

GenericErrorResponse.RequiredProperties = ["error"];

/**
 * @member {module:model/ErrorFrame} error
 */
GenericErrorResponse.prototype['error'] = undefined;






export default GenericErrorResponse;

