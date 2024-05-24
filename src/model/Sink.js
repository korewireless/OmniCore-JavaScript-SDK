/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.20
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Config from './Config';

/**
 * The Sink model module.
 * @module model/Sink
 * @version 1.8.20
 */
class Sink {
    /**
     * Constructs a new <code>Sink</code>.
     * @alias module:model/Sink
     */
    constructor() { 
        
        Sink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sink} obj Optional instance to populate.
     * @return {module:model/Sink} The populated <code>Sink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sink();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
            if (data.hasOwnProperty('sink')) {
                obj['sink'] = ApiClient.convertToType(data['sink'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = Config.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('createdon')) {
                obj['createdon'] = ApiClient.convertToType(data['createdon'], 'String');
            }
            if (data.hasOwnProperty('updatedon')) {
                obj['updatedon'] = ApiClient.convertToType(data['updatedon'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sink</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sink</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
        }
        // ensure the json data is a string
        if (data['sink'] && !(typeof data['sink'] === 'string' || data['sink'] instanceof String)) {
            throw new Error("Expected the field `sink` to be a primitive type in the JSON string but got " + data['sink']);
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          Config.validateJSON(data['config']);
        }
        // ensure the json data is a string
        if (data['createdon'] && !(typeof data['createdon'] === 'string' || data['createdon'] instanceof String)) {
            throw new Error("Expected the field `createdon` to be a primitive type in the JSON string but got " + data['createdon']);
        }
        // ensure the json data is a string
        if (data['updatedon'] && !(typeof data['updatedon'] === 'string' || data['updatedon'] instanceof String)) {
            throw new Error("Expected the field `updatedon` to be a primitive type in the JSON string but got " + data['updatedon']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Sink.prototype['id'] = undefined;

/**
 * @member {String} subscription
 */
Sink.prototype['subscription'] = undefined;

/**
 * @member {module:model/Sink.SinkEnum} sink
 */
Sink.prototype['sink'] = undefined;

/**
 * @member {module:model/Config} config
 */
Sink.prototype['config'] = undefined;

/**
 * @member {Boolean} status
 */
Sink.prototype['status'] = undefined;

/**
 * @member {String} createdon
 */
Sink.prototype['createdon'] = undefined;

/**
 * @member {String} updatedon
 */
Sink.prototype['updatedon'] = undefined;





/**
 * Allowed values for the <code>sink</code> property.
 * @enum {String}
 * @readonly
 */
Sink['SinkEnum'] = {

    /**
     * value: "pubsub"
     * @const
     */
    "pubsub": "pubsub",

    /**
     * value: "kinesis"
     * @const
     */
    "kinesis": "kinesis",

    /**
     * value: "vista"
     * @const
     */
    "vista": "vista"
};



export default Sink;

