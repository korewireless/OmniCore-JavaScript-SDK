/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BindRequest from './model/BindRequest';
import BindRequestIdsGateway from './model/BindRequestIdsGateway';
import BlockCommunicationBody from './model/BlockCommunicationBody';
import Device from './model/Device';
import DeviceCommand from './model/DeviceCommand';
import DeviceConfig from './model/DeviceConfig';
import DeviceConfiguration from './model/DeviceConfiguration';
import DeviceCredential from './model/DeviceCredential';
import DeviceRegistry from './model/DeviceRegistry';
import DeviceState from './model/DeviceState';
import ErrorFrame from './model/ErrorFrame';
import ErrorStatus from './model/ErrorStatus';
import EventNotificationConfig from './model/EventNotificationConfig';
import GatewayConfig from './model/GatewayConfig';
import GenericErrorResponse from './model/GenericErrorResponse';
import HttpConfig from './model/HttpConfig';
import Info from './model/Info';
import ListDeviceConfigVersionsResponse from './model/ListDeviceConfigVersionsResponse';
import ListDeviceRegistries from './model/ListDeviceRegistries';
import ListDeviceStatesResponse from './model/ListDeviceStatesResponse';
import ListDevicesResponse from './model/ListDevicesResponse';
import LogLevel from './model/LogLevel';
import MqttConfig from './model/MqttConfig';
import NotificationConfig from './model/NotificationConfig';
import PublicKeyCertificate from './model/PublicKeyCertificate';
import PublicKeyCredential from './model/PublicKeyCredential';
import RegistryCredential from './model/RegistryCredential';
import X509CertificateDetails from './model/X509CertificateDetails';
import DeviceApi from './api/DeviceApi';
import RegistryApi from './api/RegistryApi';


/**
* This is an OmniCore Model and State Management server..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OmniCoreModelAndStateManagementApi = require('index'); // See note below*.
* var xxxSvc = new OmniCoreModelAndStateManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OmniCoreModelAndStateManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OmniCoreModelAndStateManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OmniCoreModelAndStateManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BindRequest model constructor.
     * @property {module:model/BindRequest}
     */
    BindRequest,

    /**
     * The BindRequestIdsGateway model constructor.
     * @property {module:model/BindRequestIdsGateway}
     */
    BindRequestIdsGateway,

    /**
     * The BlockCommunicationBody model constructor.
     * @property {module:model/BlockCommunicationBody}
     */
    BlockCommunicationBody,

    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device,

    /**
     * The DeviceCommand model constructor.
     * @property {module:model/DeviceCommand}
     */
    DeviceCommand,

    /**
     * The DeviceConfig model constructor.
     * @property {module:model/DeviceConfig}
     */
    DeviceConfig,

    /**
     * The DeviceConfiguration model constructor.
     * @property {module:model/DeviceConfiguration}
     */
    DeviceConfiguration,

    /**
     * The DeviceCredential model constructor.
     * @property {module:model/DeviceCredential}
     */
    DeviceCredential,

    /**
     * The DeviceRegistry model constructor.
     * @property {module:model/DeviceRegistry}
     */
    DeviceRegistry,

    /**
     * The DeviceState model constructor.
     * @property {module:model/DeviceState}
     */
    DeviceState,

    /**
     * The ErrorFrame model constructor.
     * @property {module:model/ErrorFrame}
     */
    ErrorFrame,

    /**
     * The ErrorStatus model constructor.
     * @property {module:model/ErrorStatus}
     */
    ErrorStatus,

    /**
     * The EventNotificationConfig model constructor.
     * @property {module:model/EventNotificationConfig}
     */
    EventNotificationConfig,

    /**
     * The GatewayConfig model constructor.
     * @property {module:model/GatewayConfig}
     */
    GatewayConfig,

    /**
     * The GenericErrorResponse model constructor.
     * @property {module:model/GenericErrorResponse}
     */
    GenericErrorResponse,

    /**
     * The HttpConfig model constructor.
     * @property {module:model/HttpConfig}
     */
    HttpConfig,

    /**
     * The Info model constructor.
     * @property {module:model/Info}
     */
    Info,

    /**
     * The ListDeviceConfigVersionsResponse model constructor.
     * @property {module:model/ListDeviceConfigVersionsResponse}
     */
    ListDeviceConfigVersionsResponse,

    /**
     * The ListDeviceRegistries model constructor.
     * @property {module:model/ListDeviceRegistries}
     */
    ListDeviceRegistries,

    /**
     * The ListDeviceStatesResponse model constructor.
     * @property {module:model/ListDeviceStatesResponse}
     */
    ListDeviceStatesResponse,

    /**
     * The ListDevicesResponse model constructor.
     * @property {module:model/ListDevicesResponse}
     */
    ListDevicesResponse,

    /**
     * The LogLevel model constructor.
     * @property {module:model/LogLevel}
     */
    LogLevel,

    /**
     * The MqttConfig model constructor.
     * @property {module:model/MqttConfig}
     */
    MqttConfig,

    /**
     * The NotificationConfig model constructor.
     * @property {module:model/NotificationConfig}
     */
    NotificationConfig,

    /**
     * The PublicKeyCertificate model constructor.
     * @property {module:model/PublicKeyCertificate}
     */
    PublicKeyCertificate,

    /**
     * The PublicKeyCredential model constructor.
     * @property {module:model/PublicKeyCredential}
     */
    PublicKeyCredential,

    /**
     * The RegistryCredential model constructor.
     * @property {module:model/RegistryCredential}
     */
    RegistryCredential,

    /**
     * The X509CertificateDetails model constructor.
     * @property {module:model/X509CertificateDetails}
     */
    X509CertificateDetails,

    /**
    * The DeviceApi service constructor.
    * @property {module:api/DeviceApi}
    */
    DeviceApi,

    /**
    * The RegistryApi service constructor.
    * @property {module:api/RegistryApi}
    */
    RegistryApi
};
