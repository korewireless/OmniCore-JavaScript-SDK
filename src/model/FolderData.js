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
import Folder from './Folder';

/**
 * The FolderData model module.
 * @module model/FolderData
 * @version 1.8.21
 */
class FolderData {
    /**
     * Constructs a new <code>FolderData</code>.
     * @alias module:model/FolderData
     */
    constructor() { 
        
        FolderData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FolderData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderData} obj Optional instance to populate.
     * @return {module:model/FolderData} The populated <code>FolderData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderData();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [Folder]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FolderData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FolderData</code>.
     */
    static validateJSON(data) {
        if (data['details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['details'])) {
                throw new Error("Expected the field `details` to be an array in the JSON data but got " + data['details']);
            }
            // validate the optional field `details` (array)
            for (const item of data['details']) {
                Folder.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Folder>} details
 */
FolderData.prototype['details'] = undefined;






export default FolderData;

