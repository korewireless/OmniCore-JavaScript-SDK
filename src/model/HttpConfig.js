/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HttpConfig model module.
 * @module model/HttpConfig
 * @version 1.0
 */
class HttpConfig {
    /**
     * Constructs a new <code>HttpConfig</code>.
     * @alias module:model/HttpConfig
     */
    constructor() { 
        
        HttpConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HttpConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HttpConfig} obj Optional instance to populate.
     * @return {module:model/HttpConfig} The populated <code>HttpConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpConfig();

            if (data.hasOwnProperty('httpEnabledState')) {
                obj['httpEnabledState'] = ApiClient.convertToType(data['httpEnabledState'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HttpConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HttpConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['httpEnabledState'] && !(typeof data['httpEnabledState'] === 'string' || data['httpEnabledState'] instanceof String)) {
            throw new Error("Expected the field `httpEnabledState` to be a primitive type in the JSON string but got " + data['httpEnabledState']);
        }

        return true;
    }


}



/**
 * HttpEnabledState: If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.  Possible values:   \"HTTP_STATE_UNSPECIFIED\" - No HTTP state specified. If not specified, DeviceService will be enabled by default.   \"HTTP_ENABLED\" - Enables DeviceService (HTTP) service for the registry.   \"HTTP_DISABLED\" - Disables DeviceService (HTTP) service for the registry.
 * @member {module:model/HttpConfig.HttpEnabledStateEnum} httpEnabledState
 */
HttpConfig.prototype['httpEnabledState'] = undefined;





/**
 * Allowed values for the <code>httpEnabledState</code> property.
 * @enum {String}
 * @readonly
 */
HttpConfig['HttpEnabledStateEnum'] = {

    /**
     * value: "HTTP_ENABLED"
     * @const
     */
    "ENABLED": "HTTP_ENABLED",

    /**
     * value: "HTTP_DISABLED"
     * @const
     */
    "DISABLED": "HTTP_DISABLED",

    /**
     * value: "HTTP_STATE_UNSPECIFIED"
     * @const
     */
    "STATE_UNSPECIFIED": "HTTP_STATE_UNSPECIFIED"
};



export default HttpConfig;

