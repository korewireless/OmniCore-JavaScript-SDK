/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.17
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MetricsDetails model module.
 * @module model/MetricsDetails
 * @version 1.8.17
 */
class MetricsDetails {
    /**
     * Constructs a new <code>MetricsDetails</code>.
     * @alias module:model/MetricsDetails
     */
    constructor() { 
        
        MetricsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetricsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricsDetails} obj Optional instance to populate.
     * @return {module:model/MetricsDetails} The populated <code>MetricsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricsDetails();

            if (data.hasOwnProperty('NoOfMessagesFor30Minutes')) {
                obj['NoOfMessagesFor30Minutes'] = ApiClient.convertToType(data['NoOfMessagesFor30Minutes'], [Object]);
            }
            if (data.hasOwnProperty('NoOfMessagesFor48Hours')) {
                obj['NoOfMessagesFor48Hours'] = ApiClient.convertToType(data['NoOfMessagesFor48Hours'], [Object]);
            }
            if (data.hasOwnProperty('billableBytesReceived')) {
                obj['billableBytesReceived'] = ApiClient.convertToType(data['billableBytesReceived'], 'Number');
            }
            if (data.hasOwnProperty('billableBytesSent')) {
                obj['billableBytesSent'] = ApiClient.convertToType(data['billableBytesSent'], 'Number');
            }
            if (data.hasOwnProperty('billableMessageSize')) {
                obj['billableMessageSize'] = ApiClient.convertToType(data['billableMessageSize'], 'Number');
            }
            if (data.hasOwnProperty('bytesReceived')) {
                obj['bytesReceived'] = ApiClient.convertToType(data['bytesReceived'], 'Number');
            }
            if (data.hasOwnProperty('bytesSent')) {
                obj['bytesSent'] = ApiClient.convertToType(data['bytesSent'], 'Number');
            }
            if (data.hasOwnProperty('messageSize')) {
                obj['messageSize'] = ApiClient.convertToType(data['messageSize'], 'Number');
            }
            if (data.hasOwnProperty('noOfAckMessages')) {
                obj['noOfAckMessages'] = ApiClient.convertToType(data['noOfAckMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfCommandMessages')) {
                obj['noOfCommandMessages'] = ApiClient.convertToType(data['noOfCommandMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfConfigMessages')) {
                obj['noOfConfigMessages'] = ApiClient.convertToType(data['noOfConfigMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfDeviceConnectionsFailed')) {
                obj['noOfDeviceConnectionsFailed'] = ApiClient.convertToType(data['noOfDeviceConnectionsFailed'], 'Number');
            }
            if (data.hasOwnProperty('noOfDevices')) {
                obj['noOfDevices'] = ApiClient.convertToType(data['noOfDevices'], 'Number');
            }
            if (data.hasOwnProperty('noOfDisConnections')) {
                obj['noOfDisConnections'] = ApiClient.convertToType(data['noOfDisConnections'], 'Number');
            }
            if (data.hasOwnProperty('noOfEventMessages')) {
                obj['noOfEventMessages'] = ApiClient.convertToType(data['noOfEventMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfGatewayConnectionsFailed')) {
                obj['noOfGatewayConnectionsFailed'] = ApiClient.convertToType(data['noOfGatewayConnectionsFailed'], 'Number');
            }
            if (data.hasOwnProperty('noOfGateways')) {
                obj['noOfGateways'] = ApiClient.convertToType(data['noOfGateways'], 'Number');
            }
            if (data.hasOwnProperty('noOfLoopBackMessages')) {
                obj['noOfLoopBackMessages'] = ApiClient.convertToType(data['noOfLoopBackMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfMessages')) {
                obj['noOfMessages'] = ApiClient.convertToType(data['noOfMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfPublishErrors')) {
                obj['noOfPublishErrors'] = ApiClient.convertToType(data['noOfPublishErrors'], 'Number');
            }
            if (data.hasOwnProperty('noOfRegistries')) {
                obj['noOfRegistries'] = ApiClient.convertToType(data['noOfRegistries'], 'Number');
            }
            if (data.hasOwnProperty('noOfStateMessages')) {
                obj['noOfStateMessages'] = ApiClient.convertToType(data['noOfStateMessages'], 'Number');
            }
            if (data.hasOwnProperty('noOfSubscribe')) {
                obj['noOfSubscribe'] = ApiClient.convertToType(data['noOfSubscribe'], 'Number');
            }
            if (data.hasOwnProperty('noOfSuccessfulConnections')) {
                obj['noOfSuccessfulConnections'] = ApiClient.convertToType(data['noOfSuccessfulConnections'], 'Number');
            }
            if (data.hasOwnProperty('noOfUnSubscribe')) {
                obj['noOfUnSubscribe'] = ApiClient.convertToType(data['noOfUnSubscribe'], 'Number');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MetricsDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetricsDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['NoOfMessagesFor30Minutes'])) {
            throw new Error("Expected the field `NoOfMessagesFor30Minutes` to be an array in the JSON data but got " + data['NoOfMessagesFor30Minutes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['NoOfMessagesFor48Hours'])) {
            throw new Error("Expected the field `NoOfMessagesFor48Hours` to be an array in the JSON data but got " + data['NoOfMessagesFor48Hours']);
        }
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} NoOfMessagesFor30Minutes
 */
MetricsDetails.prototype['NoOfMessagesFor30Minutes'] = undefined;

/**
 * @member {Array.<Object>} NoOfMessagesFor48Hours
 */
MetricsDetails.prototype['NoOfMessagesFor48Hours'] = undefined;

/**
 * @member {Number} billableBytesReceived
 */
MetricsDetails.prototype['billableBytesReceived'] = undefined;

/**
 * @member {Number} billableBytesSent
 */
MetricsDetails.prototype['billableBytesSent'] = undefined;

/**
 * @member {Number} billableMessageSize
 */
MetricsDetails.prototype['billableMessageSize'] = undefined;

/**
 * @member {Number} bytesReceived
 */
MetricsDetails.prototype['bytesReceived'] = undefined;

/**
 * @member {Number} bytesSent
 */
MetricsDetails.prototype['bytesSent'] = undefined;

/**
 * @member {Number} messageSize
 */
MetricsDetails.prototype['messageSize'] = undefined;

/**
 * @member {Number} noOfAckMessages
 */
MetricsDetails.prototype['noOfAckMessages'] = undefined;

/**
 * @member {Number} noOfCommandMessages
 */
MetricsDetails.prototype['noOfCommandMessages'] = undefined;

/**
 * @member {Number} noOfConfigMessages
 */
MetricsDetails.prototype['noOfConfigMessages'] = undefined;

/**
 * @member {Number} noOfDeviceConnectionsFailed
 */
MetricsDetails.prototype['noOfDeviceConnectionsFailed'] = undefined;

/**
 * @member {Number} noOfDevices
 */
MetricsDetails.prototype['noOfDevices'] = undefined;

/**
 * @member {Number} noOfDisConnections
 */
MetricsDetails.prototype['noOfDisConnections'] = undefined;

/**
 * @member {Number} noOfEventMessages
 */
MetricsDetails.prototype['noOfEventMessages'] = undefined;

/**
 * @member {Number} noOfGatewayConnectionsFailed
 */
MetricsDetails.prototype['noOfGatewayConnectionsFailed'] = undefined;

/**
 * @member {Number} noOfGateways
 */
MetricsDetails.prototype['noOfGateways'] = undefined;

/**
 * @member {Number} noOfLoopBackMessages
 */
MetricsDetails.prototype['noOfLoopBackMessages'] = undefined;

/**
 * @member {Number} noOfMessages
 */
MetricsDetails.prototype['noOfMessages'] = undefined;

/**
 * @member {Number} noOfPublishErrors
 */
MetricsDetails.prototype['noOfPublishErrors'] = undefined;

/**
 * @member {Number} noOfRegistries
 */
MetricsDetails.prototype['noOfRegistries'] = undefined;

/**
 * @member {Number} noOfStateMessages
 */
MetricsDetails.prototype['noOfStateMessages'] = undefined;

/**
 * @member {Number} noOfSubscribe
 */
MetricsDetails.prototype['noOfSubscribe'] = undefined;

/**
 * @member {Number} noOfSuccessfulConnections
 */
MetricsDetails.prototype['noOfSuccessfulConnections'] = undefined;

/**
 * @member {Number} noOfUnSubscribe
 */
MetricsDetails.prototype['noOfUnSubscribe'] = undefined;

/**
 * @member {String} subscriptionId
 */
MetricsDetails.prototype['subscriptionId'] = undefined;






export default MetricsDetails;

