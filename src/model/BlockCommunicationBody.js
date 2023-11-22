/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.5
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BlockCommunicationBody model module.
 * @module model/BlockCommunicationBody
 * @version 1.8.5
 */
class BlockCommunicationBody {
    /**
     * Constructs a new <code>BlockCommunicationBody</code>.
     * @alias module:model/BlockCommunicationBody
     */
    constructor() { 
        
        BlockCommunicationBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockCommunicationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockCommunicationBody} obj Optional instance to populate.
     * @return {module:model/BlockCommunicationBody} The populated <code>BlockCommunicationBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockCommunicationBody();

            if (data.hasOwnProperty('isblocked')) {
                obj['isblocked'] = ApiClient.convertToType(data['isblocked'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlockCommunicationBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockCommunicationBody</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} isblocked
 */
BlockCommunicationBody.prototype['isblocked'] = undefined;






export default BlockCommunicationBody;

