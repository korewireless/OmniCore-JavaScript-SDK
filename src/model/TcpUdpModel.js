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
import TcpUdpImage from './TcpUdpImage';
import TcpUdpPortDetail from './TcpUdpPortDetail';

/**
 * The TcpUdpModel model module.
 * @module model/TcpUdpModel
 * @version 1.8.19
 */
class TcpUdpModel {
    /**
     * Constructs a new <code>TcpUdpModel</code>.
     * @alias module:model/TcpUdpModel
     * @param image {module:model/TcpUdpImage} 
     * @param tcpDetails {module:model/TcpUdpPortDetail} 
     * @param udpDetails {module:model/TcpUdpPortDetail} 
     */
    constructor(image, tcpDetails, udpDetails) { 
        
        TcpUdpModel.initialize(this, image, tcpDetails, udpDetails);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, image, tcpDetails, udpDetails) { 
        obj['image'] = image;
        obj['tcpDetails'] = tcpDetails;
        obj['udpDetails'] = udpDetails;
    }

    /**
     * Constructs a <code>TcpUdpModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TcpUdpModel} obj Optional instance to populate.
     * @return {module:model/TcpUdpModel} The populated <code>TcpUdpModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TcpUdpModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('modelName')) {
                obj['modelName'] = ApiClient.convertToType(data['modelName'], 'String');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = TcpUdpImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('tcpDetails')) {
                obj['tcpDetails'] = TcpUdpPortDetail.constructFromObject(data['tcpDetails']);
            }
            if (data.hasOwnProperty('udpDetails')) {
                obj['udpDetails'] = TcpUdpPortDetail.constructFromObject(data['udpDetails']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TcpUdpModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TcpUdpModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TcpUdpModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['modelName'] && !(typeof data['modelName'] === 'string' || data['modelName'] instanceof String)) {
            throw new Error("Expected the field `modelName` to be a primitive type in the JSON string but got " + data['modelName']);
        }
        // ensure the json data is a string
        if (data['manufacturer'] && !(typeof data['manufacturer'] === 'string' || data['manufacturer'] instanceof String)) {
            throw new Error("Expected the field `manufacturer` to be a primitive type in the JSON string but got " + data['manufacturer']);
        }
        // validate the optional field `image`
        if (data['image']) { // data not null
          TcpUdpImage.validateJSON(data['image']);
        }
        // validate the optional field `tcpDetails`
        if (data['tcpDetails']) { // data not null
          TcpUdpPortDetail.validateJSON(data['tcpDetails']);
        }
        // validate the optional field `udpDetails`
        if (data['udpDetails']) { // data not null
          TcpUdpPortDetail.validateJSON(data['udpDetails']);
        }

        return true;
    }


}

TcpUdpModel.RequiredProperties = ["image", "tcpDetails", "udpDetails"];

/**
 * The ID of the TCP/UDP model
 * @member {Number} id
 */
TcpUdpModel.prototype['id'] = undefined;

/**
 * The name of the model
 * @member {String} modelName
 */
TcpUdpModel.prototype['modelName'] = undefined;

/**
 * The manufacturer of the model
 * @member {String} manufacturer
 */
TcpUdpModel.prototype['manufacturer'] = undefined;

/**
 * @member {module:model/TcpUdpImage} image
 */
TcpUdpModel.prototype['image'] = undefined;

/**
 * @member {module:model/TcpUdpPortDetail} tcpDetails
 */
TcpUdpModel.prototype['tcpDetails'] = undefined;

/**
 * @member {module:model/TcpUdpPortDetail} udpDetails
 */
TcpUdpModel.prototype['udpDetails'] = undefined;

/**
 * Additional metadata in raw JSON format
 * @member {Object} metadata
 */
TcpUdpModel.prototype['metadata'] = undefined;

/**
 * The creation timestamp of the model
 * @member {Date} createdAt
 */
TcpUdpModel.prototype['createdAt'] = undefined;

/**
 * The last update timestamp of the model
 * @member {Date} updatedAt
 */
TcpUdpModel.prototype['updatedAt'] = undefined;






export default TcpUdpModel;

