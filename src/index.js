/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.8.16
 * Contact: omnicoresupport@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Audit from './model/Audit';
import AuditResult from './model/AuditResult';
import BindRequest from './model/BindRequest';
import BindRequestIdsGateway from './model/BindRequestIdsGateway';
import BlockCommunicationBody from './model/BlockCommunicationBody';
import Config from './model/Config';
import Configurations from './model/Configurations';
import CreateConfiguration from './model/CreateConfiguration';
import CreateVaultKeyBody from './model/CreateVaultKeyBody';
import CustomOnboard from './model/CustomOnboard';
import CustomOnboardTcpUdpModelDetails from './model/CustomOnboardTcpUdpModelDetails';
import Device from './model/Device';
import DeviceCommand from './model/DeviceCommand';
import DeviceConfig from './model/DeviceConfig';
import DeviceConfiguration from './model/DeviceConfiguration';
import DeviceCredential from './model/DeviceCredential';
import DeviceOnline from './model/DeviceOnline';
import DeviceRegistry from './model/DeviceRegistry';
import DeviceState from './model/DeviceState';
import EnableEncryptionBody from './model/EnableEncryptionBody';
import ErrorFrame from './model/ErrorFrame';
import ErrorStatus from './model/ErrorStatus';
import EventNotificationConfig from './model/EventNotificationConfig';
import ExportDetail from './model/ExportDetail';
import FileDetail from './model/FileDetail';
import FileDetails from './model/FileDetails';
import Folder from './model/Folder';
import FolderData from './model/FolderData';
import Frame from './model/Frame';
import GatewayConfig from './model/GatewayConfig';
import GenericErrorResponse from './model/GenericErrorResponse';
import GetExportsResponse from './model/GetExportsResponse';
import GetKeysResponse from './model/GetKeysResponse';
import GetReplaysResponse from './model/GetReplaysResponse';
import HttpConfig from './model/HttpConfig';
import Info from './model/Info';
import ListDeviceConfigVersionsResponse from './model/ListDeviceConfigVersionsResponse';
import ListDeviceRegistries from './model/ListDeviceRegistries';
import ListDeviceStatesResponse from './model/ListDeviceStatesResponse';
import ListDevicesOnlineResponse from './model/ListDevicesOnlineResponse';
import ListDevicesResponse from './model/ListDevicesResponse';
import ListSinks from './model/ListSinks';
import LogLevel from './model/LogLevel';
import Metrics from './model/Metrics';
import MetricsData from './model/MetricsData';
import MetricsDetails from './model/MetricsDetails';
import MetricsLogs from './model/MetricsLogs';
import MetricsResponse from './model/MetricsResponse';
import MetricsResponseDetails from './model/MetricsResponseDetails';
import MqttConfig from './model/MqttConfig';
import NotificationConfig from './model/NotificationConfig';
import OperationMetrics from './model/OperationMetrics';
import Policy from './model/Policy';
import PublicKeyCertificate from './model/PublicKeyCertificate';
import PublicKeyCredential from './model/PublicKeyCredential';
import RegistryCredential from './model/RegistryCredential';
import Replay from './model/Replay';
import ReplayBody from './model/ReplayBody';
import SetRetentionBody from './model/SetRetentionBody';
import Sink from './model/Sink';
import StartExportBody from './model/StartExportBody';
import TcpUdpImage from './model/TcpUdpImage';
import TcpUdpModel from './model/TcpUdpModel';
import TcpUdpPortDetail from './model/TcpUdpPortDetail';
import VaultConfiguration from './model/VaultConfiguration';
import VaultEncryptionKey from './model/VaultEncryptionKey';
import VaultStatus from './model/VaultStatus';
import VaultStatusDetails from './model/VaultStatusDetails';
import X509CertificateDetails from './model/X509CertificateDetails';
import DeviceApi from './api/DeviceApi';
import MetricsApi from './api/MetricsApi';
import RegistryApi from './api/RegistryApi';
import SinkApi from './api/SinkApi';
import VaultApi from './api/VaultApi';


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
* @version 1.8.16
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Audit model constructor.
     * @property {module:model/Audit}
     */
    Audit,

    /**
     * The AuditResult model constructor.
     * @property {module:model/AuditResult}
     */
    AuditResult,

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
     * The Config model constructor.
     * @property {module:model/Config}
     */
    Config,

    /**
     * The Configurations model constructor.
     * @property {module:model/Configurations}
     */
    Configurations,

    /**
     * The CreateConfiguration model constructor.
     * @property {module:model/CreateConfiguration}
     */
    CreateConfiguration,

    /**
     * The CreateVaultKeyBody model constructor.
     * @property {module:model/CreateVaultKeyBody}
     */
    CreateVaultKeyBody,

    /**
     * The CustomOnboard model constructor.
     * @property {module:model/CustomOnboard}
     */
    CustomOnboard,

    /**
     * The CustomOnboardTcpUdpModelDetails model constructor.
     * @property {module:model/CustomOnboardTcpUdpModelDetails}
     */
    CustomOnboardTcpUdpModelDetails,

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
     * The DeviceOnline model constructor.
     * @property {module:model/DeviceOnline}
     */
    DeviceOnline,

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
     * The EnableEncryptionBody model constructor.
     * @property {module:model/EnableEncryptionBody}
     */
    EnableEncryptionBody,

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
     * The ExportDetail model constructor.
     * @property {module:model/ExportDetail}
     */
    ExportDetail,

    /**
     * The FileDetail model constructor.
     * @property {module:model/FileDetail}
     */
    FileDetail,

    /**
     * The FileDetails model constructor.
     * @property {module:model/FileDetails}
     */
    FileDetails,

    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder,

    /**
     * The FolderData model constructor.
     * @property {module:model/FolderData}
     */
    FolderData,

    /**
     * The Frame model constructor.
     * @property {module:model/Frame}
     */
    Frame,

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
     * The GetExportsResponse model constructor.
     * @property {module:model/GetExportsResponse}
     */
    GetExportsResponse,

    /**
     * The GetKeysResponse model constructor.
     * @property {module:model/GetKeysResponse}
     */
    GetKeysResponse,

    /**
     * The GetReplaysResponse model constructor.
     * @property {module:model/GetReplaysResponse}
     */
    GetReplaysResponse,

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
     * The ListDevicesOnlineResponse model constructor.
     * @property {module:model/ListDevicesOnlineResponse}
     */
    ListDevicesOnlineResponse,

    /**
     * The ListDevicesResponse model constructor.
     * @property {module:model/ListDevicesResponse}
     */
    ListDevicesResponse,

    /**
     * The ListSinks model constructor.
     * @property {module:model/ListSinks}
     */
    ListSinks,

    /**
     * The LogLevel model constructor.
     * @property {module:model/LogLevel}
     */
    LogLevel,

    /**
     * The Metrics model constructor.
     * @property {module:model/Metrics}
     */
    Metrics,

    /**
     * The MetricsData model constructor.
     * @property {module:model/MetricsData}
     */
    MetricsData,

    /**
     * The MetricsDetails model constructor.
     * @property {module:model/MetricsDetails}
     */
    MetricsDetails,

    /**
     * The MetricsLogs model constructor.
     * @property {module:model/MetricsLogs}
     */
    MetricsLogs,

    /**
     * The MetricsResponse model constructor.
     * @property {module:model/MetricsResponse}
     */
    MetricsResponse,

    /**
     * The MetricsResponseDetails model constructor.
     * @property {module:model/MetricsResponseDetails}
     */
    MetricsResponseDetails,

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
     * The OperationMetrics model constructor.
     * @property {module:model/OperationMetrics}
     */
    OperationMetrics,

    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy,

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
     * The Replay model constructor.
     * @property {module:model/Replay}
     */
    Replay,

    /**
     * The ReplayBody model constructor.
     * @property {module:model/ReplayBody}
     */
    ReplayBody,

    /**
     * The SetRetentionBody model constructor.
     * @property {module:model/SetRetentionBody}
     */
    SetRetentionBody,

    /**
     * The Sink model constructor.
     * @property {module:model/Sink}
     */
    Sink,

    /**
     * The StartExportBody model constructor.
     * @property {module:model/StartExportBody}
     */
    StartExportBody,

    /**
     * The TcpUdpImage model constructor.
     * @property {module:model/TcpUdpImage}
     */
    TcpUdpImage,

    /**
     * The TcpUdpModel model constructor.
     * @property {module:model/TcpUdpModel}
     */
    TcpUdpModel,

    /**
     * The TcpUdpPortDetail model constructor.
     * @property {module:model/TcpUdpPortDetail}
     */
    TcpUdpPortDetail,

    /**
     * The VaultConfiguration model constructor.
     * @property {module:model/VaultConfiguration}
     */
    VaultConfiguration,

    /**
     * The VaultEncryptionKey model constructor.
     * @property {module:model/VaultEncryptionKey}
     */
    VaultEncryptionKey,

    /**
     * The VaultStatus model constructor.
     * @property {module:model/VaultStatus}
     */
    VaultStatus,

    /**
     * The VaultStatusDetails model constructor.
     * @property {module:model/VaultStatusDetails}
     */
    VaultStatusDetails,

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
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The RegistryApi service constructor.
    * @property {module:api/RegistryApi}
    */
    RegistryApi,

    /**
    * The SinkApi service constructor.
    * @property {module:api/SinkApi}
    */
    SinkApi,

    /**
    * The VaultApi service constructor.
    * @property {module:api/VaultApi}
    */
    VaultApi
};
