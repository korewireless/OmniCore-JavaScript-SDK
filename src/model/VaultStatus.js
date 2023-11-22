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
import VaultStatusDetails from './VaultStatusDetails';

/**
 * The VaultStatus model module.
 * @module model/VaultStatus
 * @version 1.8.6
 */
class VaultStatus {
    /**
     * Constructs a new <code>VaultStatus</code>.
     * @alias module:model/VaultStatus
     */
    constructor() { 
        
        VaultStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultStatus} obj Optional instance to populate.
     * @return {module:model/VaultStatus} The populated <code>VaultStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultStatus();

            if (data.hasOwnProperty('details')) {
                obj['details'] = VaultStatusDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VaultStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VaultStatus</code>.
     */
    static validateJSON(data) {
        // validate the optional field `details`
        if (data['details']) { // data not null
          VaultStatusDetails.validateJSON(data['details']);
        }

        return true;
    }


}



/**
 * @member {module:model/VaultStatusDetails} details
 */
VaultStatus.prototype['details'] = undefined;






export default VaultStatus;

