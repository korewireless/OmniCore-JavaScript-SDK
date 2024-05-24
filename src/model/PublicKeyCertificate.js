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
import X509CertificateDetails from './X509CertificateDetails';

/**
 * The PublicKeyCertificate model module.
 * @module model/PublicKeyCertificate
 * @version 1.8.19
 */
class PublicKeyCertificate {
    /**
     * Constructs a new <code>PublicKeyCertificate</code>.
     * @alias module:model/PublicKeyCertificate
     */
    constructor() { 
        
        PublicKeyCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublicKeyCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKeyCertificate} obj Optional instance to populate.
     * @return {module:model/PublicKeyCertificate} The populated <code>PublicKeyCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicKeyCertificate();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('x509Details')) {
                obj['x509Details'] = X509CertificateDetails.constructFromObject(data['x509Details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PublicKeyCertificate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublicKeyCertificate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['certificate'] && !(typeof data['certificate'] === 'string' || data['certificate'] instanceof String)) {
            throw new Error("Expected the field `certificate` to be a primitive type in the JSON string but got " + data['certificate']);
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // validate the optional field `x509Details`
        if (data['x509Details']) { // data not null
          X509CertificateDetails.validateJSON(data['x509Details']);
        }

        return true;
    }


}



/**
 * Certificate: The certificate data.
 * @member {String} certificate
 */
PublicKeyCertificate.prototype['certificate'] = undefined;

/**
 * Format: The certificate format.  Possible values:   \"UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT\" - The format has not been specified. This is an invalid default value and must not be used.   \"X509_CERTIFICATE_PEM\" - An X.509v3 certificate ([RFC5280](https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
 * @member {module:model/PublicKeyCertificate.FormatEnum} format
 */
PublicKeyCertificate.prototype['format'] = undefined;

/**
 * @member {module:model/X509CertificateDetails} x509Details
 */
PublicKeyCertificate.prototype['x509Details'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
PublicKeyCertificate['FormatEnum'] = {

    /**
     * value: "X509_CERTIFICATE_PEM"
     * @const
     */
    "X509_CERTIFICATE_PEM": "X509_CERTIFICATE_PEM"
};



export default PublicKeyCertificate;

