/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.4
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PublicKeyCredential model module.
 * @module model/PublicKeyCredential
 * @version 1.8.4
 */
class PublicKeyCredential {
    /**
     * Constructs a new <code>PublicKeyCredential</code>.
     * @alias module:model/PublicKeyCredential
     * @param format {module:model/PublicKeyCredential.FormatEnum} Format: The format of the key.  Possible values:   \"UNSPECIFIED_PUBLIC_KEY_FORMAT\" - The format has not been specified. This is an invalid default value and must not be used.   \"RSA_PEM\" - An RSA public key encoded in base64, and wrapped by `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`. This can be used to verify `RS256` signatures in JWT tokens ([RFC7518]( https://www.ietf.org/rfc/rfc7518.txt)).   \"RSA_X509_PEM\" - As RSA_PEM, but wrapped in an X.509v3 certificate ([RFC5280]( https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.   \"ES256_PEM\" - Public key for the ECDSA algorithm using P-256 and SHA-256, encoded in base64, and wrapped by `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`. This can be used to verify JWT tokens with the `ES256` algorithm ([RFC7518](https://www.ietf.org/rfc/rfc7518.txt)). This curve is defined in [OpenSSL](https://www.openssl.org/) as the `prime256v1` curve.   \"ES256_X509_PEM\" - As ES256_PEM, but wrapped in an X.509v3 certificate ([RFC5280]( https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
     */
    constructor(format) { 
        
        PublicKeyCredential.initialize(this, format);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, format) { 
        obj['format'] = format;
    }

    /**
     * Constructs a <code>PublicKeyCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKeyCredential} obj Optional instance to populate.
     * @return {module:model/PublicKeyCredential} The populated <code>PublicKeyCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicKeyCredential();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PublicKeyCredential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublicKeyCredential</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PublicKeyCredential.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}

PublicKeyCredential.RequiredProperties = ["format"];

/**
 * Format: The format of the key.  Possible values:   \"UNSPECIFIED_PUBLIC_KEY_FORMAT\" - The format has not been specified. This is an invalid default value and must not be used.   \"RSA_PEM\" - An RSA public key encoded in base64, and wrapped by `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`. This can be used to verify `RS256` signatures in JWT tokens ([RFC7518]( https://www.ietf.org/rfc/rfc7518.txt)).   \"RSA_X509_PEM\" - As RSA_PEM, but wrapped in an X.509v3 certificate ([RFC5280]( https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.   \"ES256_PEM\" - Public key for the ECDSA algorithm using P-256 and SHA-256, encoded in base64, and wrapped by `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`. This can be used to verify JWT tokens with the `ES256` algorithm ([RFC7518](https://www.ietf.org/rfc/rfc7518.txt)). This curve is defined in [OpenSSL](https://www.openssl.org/) as the `prime256v1` curve.   \"ES256_X509_PEM\" - As ES256_PEM, but wrapped in an X.509v3 certificate ([RFC5280]( https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
 * @member {module:model/PublicKeyCredential.FormatEnum} format
 */
PublicKeyCredential.prototype['format'] = undefined;

/**
 * Key: The key data.
 * @member {String} key
 */
PublicKeyCredential.prototype['key'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
PublicKeyCredential['FormatEnum'] = {

    /**
     * value: "RSA_PEM"
     * @const
     */
    "RSA_PEM": "RSA_PEM",

    /**
     * value: "ES256_PEM"
     * @const
     */
    "ES256_PEM": "ES256_PEM",

    /**
     * value: "RSA_X509_PEM"
     * @const
     */
    "RSA_X509_PEM": "RSA_X509_PEM",

    /**
     * value: "ES256_X509_PEM"
     * @const
     */
    "ES256_X509_PEM": "ES256_X509_PEM"
};



export default PublicKeyCredential;

