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
import MetricsData from './MetricsData';
import OperationMetrics from './OperationMetrics';

/**
 * The MetricsResponseDetails model module.
 * @module model/MetricsResponseDetails
 * @version 1.8.5
 */
class MetricsResponseDetails {
    /**
     * Constructs a new <code>MetricsResponseDetails</code>.
     * @alias module:model/MetricsResponseDetails
     */
    constructor() { 
        
        MetricsResponseDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetricsResponseDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricsResponseDetails} obj Optional instance to populate.
     * @return {module:model/MetricsResponseDetails} The populated <code>MetricsResponseDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricsResponseDetails();

            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('noOfFiles')) {
                obj['noOfFiles'] = ApiClient.convertToType(data['noOfFiles'], 'Number');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('noofoperations')) {
                obj['noofoperations'] = ApiClient.convertToType(data['noofoperations'], 'Number');
            }
            if (data.hasOwnProperty('noOfReplays')) {
                obj['noOfReplays'] = ApiClient.convertToType(data['noOfReplays'], 'Number');
            }
            if (data.hasOwnProperty('noOfExports')) {
                obj['noOfExports'] = ApiClient.convertToType(data['noOfExports'], 'Number');
            }
            if (data.hasOwnProperty('Operations')) {
                obj['Operations'] = ApiClient.convertToType(data['Operations'], [OperationMetrics]);
            }
            if (data.hasOwnProperty('detailsForTimePeriod')) {
                obj['detailsForTimePeriod'] = MetricsData.constructFromObject(data['detailsForTimePeriod']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MetricsResponseDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetricsResponseDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }
        if (data['Operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Operations'])) {
                throw new Error("Expected the field `Operations` to be an array in the JSON data but got " + data['Operations']);
            }
            // validate the optional field `Operations` (array)
            for (const item of data['Operations']) {
                OperationMetrics.validateJsonObject(item);
            };
        }
        // validate the optional field `detailsForTimePeriod`
        if (data['detailsForTimePeriod']) { // data not null
          MetricsData.validateJSON(data['detailsForTimePeriod']);
        }

        return true;
    }


}



/**
 * @member {String} subscriptionId
 */
MetricsResponseDetails.prototype['subscriptionId'] = undefined;

/**
 * @member {Number} noOfFiles
 */
MetricsResponseDetails.prototype['noOfFiles'] = undefined;

/**
 * @member {Number} fileSize
 */
MetricsResponseDetails.prototype['fileSize'] = undefined;

/**
 * @member {Number} noofoperations
 */
MetricsResponseDetails.prototype['noofoperations'] = undefined;

/**
 * @member {Number} noOfReplays
 */
MetricsResponseDetails.prototype['noOfReplays'] = undefined;

/**
 * @member {Number} noOfExports
 */
MetricsResponseDetails.prototype['noOfExports'] = undefined;

/**
 * @member {Array.<module:model/OperationMetrics>} Operations
 */
MetricsResponseDetails.prototype['Operations'] = undefined;

/**
 * @member {module:model/MetricsData} detailsForTimePeriod
 */
MetricsResponseDetails.prototype['detailsForTimePeriod'] = undefined;






export default MetricsResponseDetails;
