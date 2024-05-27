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

/**
 * The X509CertificateDetails model module.
 * @module model/X509CertificateDetails
 * @version 1.8.21
 */
class X509CertificateDetails {
    /**
     * Constructs a new <code>X509CertificateDetails</code>.
     * @alias module:model/X509CertificateDetails
     */
    constructor() { 
        
        X509CertificateDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>X509CertificateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/X509CertificateDetails} obj Optional instance to populate.
     * @return {module:model/X509CertificateDetails} The populated <code>X509CertificateDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new X509CertificateDetails();

            if (data.hasOwnProperty('expiryTime')) {
                obj['expiryTime'] = ApiClient.convertToType(data['expiryTime'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('publicKeyType')) {
                obj['publicKeyType'] = ApiClient.convertToType(data['publicKeyType'], 'String');
            }
            if (data.hasOwnProperty('signatureAlgorithm')) {
                obj['signatureAlgorithm'] = ApiClient.convertToType(data['signatureAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>X509CertificateDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>X509CertificateDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['expiryTime'] && !(typeof data['expiryTime'] === 'string' || data['expiryTime'] instanceof String)) {
            throw new Error("Expected the field `expiryTime` to be a primitive type in the JSON string but got " + data['expiryTime']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['publicKeyType'] && !(typeof data['publicKeyType'] === 'string' || data['publicKeyType'] instanceof String)) {
            throw new Error("Expected the field `publicKeyType` to be a primitive type in the JSON string but got " + data['publicKeyType']);
        }
        // ensure the json data is a string
        if (data['signatureAlgorithm'] && !(typeof data['signatureAlgorithm'] === 'string' || data['signatureAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `signatureAlgorithm` to be a primitive type in the JSON string but got " + data['signatureAlgorithm']);
        }
        // ensure the json data is a string
        if (data['startTime'] && !(typeof data['startTime'] === 'string' || data['startTime'] instanceof String)) {
            throw new Error("Expected the field `startTime` to be a primitive type in the JSON string but got " + data['startTime']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }

        return true;
    }


}



/**
 * ExpiryTime: The time the certificate becomes invalid.
 * @member {String} expiryTime
 */
X509CertificateDetails.prototype['expiryTime'] = undefined;

/**
 * Issuer: The entity that signed the certificate.
 * @member {String} issuer
 */
X509CertificateDetails.prototype['issuer'] = undefined;

/**
 * PublicKeyType: The type of public key in the certificate.
 * @member {String} publicKeyType
 */
X509CertificateDetails.prototype['publicKeyType'] = undefined;

/**
 * SignatureAlgorithm: The algorithm used to sign the certificate.
 * @member {String} signatureAlgorithm
 */
X509CertificateDetails.prototype['signatureAlgorithm'] = undefined;

/**
 * StartTime: The time the certificate becomes valid.
 * @member {String} startTime
 */
X509CertificateDetails.prototype['startTime'] = undefined;

/**
 * Subject: The entity the certificate and public key belong to.
 * @member {String} subject
 */
X509CertificateDetails.prototype['subject'] = undefined;






export default X509CertificateDetails;

