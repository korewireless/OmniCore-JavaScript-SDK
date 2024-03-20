/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.13
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TcpUdpPortDetail model module.
 * @module model/TcpUdpPortDetail
 * @version 1.8.13
 */
class TcpUdpPortDetail {
    /**
     * Constructs a new <code>TcpUdpPortDetail</code>.
     * @alias module:model/TcpUdpPortDetail
     * @param enabled {Boolean} Indicates if the port is enabled
     */
    constructor(enabled) { 
        
        TcpUdpPortDetail.initialize(this, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled) { 
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>TcpUdpPortDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TcpUdpPortDetail} obj Optional instance to populate.
     * @return {module:model/TcpUdpPortDetail} The populated <code>TcpUdpPortDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TcpUdpPortDetail();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TcpUdpPortDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TcpUdpPortDetail</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TcpUdpPortDetail.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

TcpUdpPortDetail.RequiredProperties = ["enabled"];

/**
 * Indicates if the port is enabled
 * @member {Boolean} enabled
 */
TcpUdpPortDetail.prototype['enabled'] = undefined;

/**
 * The port number
 * @member {Number} port
 */
TcpUdpPortDetail.prototype['port'] = undefined;






export default TcpUdpPortDetail;

