/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.19
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ExportDetail model module.
 * @module model/ExportDetail
 * @version 1.8.19
 */
class ExportDetail {
    /**
     * Constructs a new <code>ExportDetail</code>.
     * @alias module:model/ExportDetail
     */
    constructor() { 
        
        ExportDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportDetail} obj Optional instance to populate.
     * @return {module:model/ExportDetail} The populated <code>ExportDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportDetail();

            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('nooffiles')) {
                obj['nooffiles'] = ApiClient.convertToType(data['nooffiles'], 'Number');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('done')) {
                obj['done'] = ApiClient.convertToType(data['done'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportDetail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
        }
        // ensure the json data is a string
        if (data['createdOn'] && !(typeof data['createdOn'] === 'string' || data['createdOn'] instanceof String)) {
            throw new Error("Expected the field `createdOn` to be a primitive type in the JSON string but got " + data['createdOn']);
        }

        return true;
    }


}



/**
 * @member {String} subscription
 */
ExportDetail.prototype['subscription'] = undefined;

/**
 * @member {String} name
 */
ExportDetail.prototype['name'] = undefined;

/**
 * @member {String} source
 */
ExportDetail.prototype['source'] = undefined;

/**
 * @member {String} status
 */
ExportDetail.prototype['status'] = undefined;

/**
 * @member {String} destination
 */
ExportDetail.prototype['destination'] = undefined;

/**
 * @member {String} createdOn
 */
ExportDetail.prototype['createdOn'] = undefined;

/**
 * @member {Number} nooffiles
 */
ExportDetail.prototype['nooffiles'] = undefined;

/**
 * @member {Number} fileSize
 */
ExportDetail.prototype['fileSize'] = undefined;

/**
 * @member {Boolean} done
 */
ExportDetail.prototype['done'] = undefined;






export default ExportDetail;

