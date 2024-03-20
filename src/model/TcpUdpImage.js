/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.15
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TcpUdpImage model module.
 * @module model/TcpUdpImage
 * @version 1.8.15
 */
class TcpUdpImage {
    /**
     * Constructs a new <code>TcpUdpImage</code>.
     * @alias module:model/TcpUdpImage
     * @param valid {Boolean} Indicates if the image is valid
     */
    constructor(valid) { 
        
        TcpUdpImage.initialize(this, valid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, valid) { 
        obj['valid'] = valid;
    }

    /**
     * Constructs a <code>TcpUdpImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TcpUdpImage} obj Optional instance to populate.
     * @return {module:model/TcpUdpImage} The populated <code>TcpUdpImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TcpUdpImage();

            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('storageKey')) {
                obj['storageKey'] = ApiClient.convertToType(data['storageKey'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TcpUdpImage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TcpUdpImage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TcpUdpImage.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contentType'] && !(typeof data['contentType'] === 'string' || data['contentType'] instanceof String)) {
            throw new Error("Expected the field `contentType` to be a primitive type in the JSON string but got " + data['contentType']);
        }
        // ensure the json data is a string
        if (data['storageKey'] && !(typeof data['storageKey'] === 'string' || data['storageKey'] instanceof String)) {
            throw new Error("Expected the field `storageKey` to be a primitive type in the JSON string but got " + data['storageKey']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }

        return true;
    }


}

TcpUdpImage.RequiredProperties = ["valid"];

/**
 * Indicates if the image is valid
 * @member {Boolean} valid
 */
TcpUdpImage.prototype['valid'] = undefined;

/**
 * The content type of the image
 * @member {String} contentType
 */
TcpUdpImage.prototype['contentType'] = undefined;

/**
 * The storage key of the image
 * @member {String} storageKey
 */
TcpUdpImage.prototype['storageKey'] = undefined;

/**
 * The link to the image
 * @member {String} link
 */
TcpUdpImage.prototype['link'] = undefined;

/**
 * The binary data of the image
 * @member {File} data
 */
TcpUdpImage.prototype['data'] = undefined;






export default TcpUdpImage;

