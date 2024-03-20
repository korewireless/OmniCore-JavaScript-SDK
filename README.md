# omni_core_model_and_state_management_api

OmniCoreModelAndStateManagementApi - JavaScript client for omni_core_model_and_state_management_api
This is an OmniCore Model and State Management server.

- API version: 1.8.17
- Package version: 1.8.17
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://www.korewireless.com](http://www.korewireless.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install omni_core_model_and_state_management_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your omni_core_model_and_state_management_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/korewireless/OmniCore-JavaScript-SDK
then install it via:

```shell
    npm install korewireless/OmniCore-JavaScript-SDK --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OmniCoreModelAndStateManagementApi = require('omni_core_model_and_state_management_api');

var defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['x-api-key'] = "Token"
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new OmniCoreModelAndStateManagementApi.DeviceApi()
var subscriptionId = "subscriptionId_example"; // {String} Subscription ID
var registryId = "registryId_example"; // {String} Registry ID
var bind = new OmniCoreModelAndStateManagementApi.BindRequest(); // {BindRequest} application/json
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bindDevice(subscriptionId, registryId, bind, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.korewireless.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**bindDevice**](docs/DeviceApi.md#bindDevice) | **POST** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/bindDeviceToGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**bindDevices**](docs/DeviceApi.md#bindDevices) | **POST** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/bindDevicesToGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**blockDeviceCommuncation**](docs/DeviceApi.md#blockDeviceCommuncation) | **PUT** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/communication | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**createDevice**](docs/DeviceApi.md#createDevice) | **POST** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/devices | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**deleteDevice**](docs/DeviceApi.md#deleteDevice) | **DELETE** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getConfig**](docs/DeviceApi.md#getConfig) | **GET** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/configVersions | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getDevice**](docs/DeviceApi.md#getDevice) | **GET** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getDevices**](docs/DeviceApi.md#getDevices) | **GET** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/devices | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getDevicesLastSeen**](docs/DeviceApi.md#getDevicesLastSeen) | **GET** /omnicore/subscriptions/{subscriptionId}/devices | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getStates**](docs/DeviceApi.md#getStates) | **GET** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/states | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**sendCommandToDevice**](docs/DeviceApi.md#sendCommandToDevice) | **POST** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/sendCommandToDevice | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**unBindDevice**](docs/DeviceApi.md#unBindDevice) | **POST** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/unbindDeviceFromGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**unBindDevices**](docs/DeviceApi.md#unBindDevices) | **POST** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/unbindDevicesFromGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateConfigurationToDevice**](docs/DeviceApi.md#updateConfigurationToDevice) | **POST** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/updateConfigurationToDevice | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateCustomOnboardRequest**](docs/DeviceApi.md#updateCustomOnboardRequest) | **POST** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/updateCustomOnboardRequest | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateDevice**](docs/DeviceApi.md#updateDevice) | **PATCH** /omnicore/subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getMetrics) | **GET** /omnicore/subscriptions/{subscriptionId}/metrics | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**createRegistry**](docs/RegistryApi.md#createRegistry) | **POST** /omnicore/subscriptions/{subscriptionId}/registries | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**deleteRegistry**](docs/RegistryApi.md#deleteRegistry) | **DELETE** /omnicore/subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**getRegistries**](docs/RegistryApi.md#getRegistries) | **GET** /omnicore/subscriptions/{subscriptionId}/registries | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**getRegistry**](docs/RegistryApi.md#getRegistry) | **GET** /omnicore/subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**sendBroadcastToDevices**](docs/RegistryApi.md#sendBroadcastToDevices) | **POST** /omnicore/subscriptions/{subscriptionid}/registries/{registryId}/sendBroadcastToDevice | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**updateRegistry**](docs/RegistryApi.md#updateRegistry) | **PATCH** /omnicore/subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**createSink**](docs/SinkApi.md#createSink) | **POST** /omnicore/subscriptions/{subscriptionId}/sinks | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**deleteSink**](docs/SinkApi.md#deleteSink) | **DELETE** /omnicore/subscriptions/{subscriptionId}/sinks/{sinkId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**getASink**](docs/SinkApi.md#getASink) | **GET** /omnicore/subscriptions/{subscriptionId}/sinks/{sinkId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**getSinks**](docs/SinkApi.md#getSinks) | **GET** /omnicore/subscriptions/{subscriptionId}/sinks | Get All Sinks
*OmniCoreModelAndStateManagementApi.VaultApi* | [**createVaultConfiguration**](docs/VaultApi.md#createVaultConfiguration) | **POST** /vault/subscriptions/{subscriptionid}/configurations | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**createVaultKey**](docs/VaultApi.md#createVaultKey) | **POST** /vault/subscriptions/{subscriptionid}/encryptionkeys | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**deleteConfiguration**](docs/VaultApi.md#deleteConfiguration) | **DELETE** /vault/subscriptions/{subscriptionid}/configurations/{configid} | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**deleteVaultKey**](docs/VaultApi.md#deleteVaultKey) | **DELETE** /vault/subscriptions/{subscriptionid}/encryptionkeys/{keyid} | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**enableEncryption**](docs/VaultApi.md#enableEncryption) | **POST** /vault/subscriptions/{subscriptionid}/encryption | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getExports**](docs/VaultApi.md#getExports) | **GET** /vault/subscriptions/{subscriptionid}/exports | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getRegistryData**](docs/VaultApi.md#getRegistryData) | **GET** /vault/subscriptions/{subscriptionid}/folders | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getReplays**](docs/VaultApi.md#getReplays) | **GET** /vault/subscriptions/{subscriptionid}/replays | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultAudit**](docs/VaultApi.md#getVaultAudit) | **GET** /vault/subscriptions/{subscriptionid}/audit | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultConfigurations**](docs/VaultApi.md#getVaultConfigurations) | **GET** /vault/subscriptions/{subscriptionid}/configurations | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultFiles**](docs/VaultApi.md#getVaultFiles) | **GET** /vault/subscriptions/{subscriptionid}/registry/{registryid}/files | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultKeys**](docs/VaultApi.md#getVaultKeys) | **GET** /vault/subscriptions/{subscriptionid}/encryptionkeys | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultMetrics**](docs/VaultApi.md#getVaultMetrics) | **GET** /vault/subscriptions/{subscriptionid}/metrics | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**getVaultStatus**](docs/VaultApi.md#getVaultStatus) | **GET** /vault/subscriptions/{subscriptionid}/status | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**setRetention**](docs/VaultApi.md#setRetention) | **POST** /vault/subscriptions/{subscriptionid}/retention | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**startExport**](docs/VaultApi.md#startExport) | **POST** /vault/subscriptions/{subscriptionid}/exports | 
*OmniCoreModelAndStateManagementApi.VaultApi* | [**startReplay**](docs/VaultApi.md#startReplay) | **POST** /vault/subscriptions/{subscriptionid}/replays | 


## Documentation for Models

 - [OmniCoreModelAndStateManagementApi.Audit](docs/Audit.md)
 - [OmniCoreModelAndStateManagementApi.AuditResult](docs/AuditResult.md)
 - [OmniCoreModelAndStateManagementApi.BindRequest](docs/BindRequest.md)
 - [OmniCoreModelAndStateManagementApi.BindRequestIdsGateway](docs/BindRequestIdsGateway.md)
 - [OmniCoreModelAndStateManagementApi.BlockCommunicationBody](docs/BlockCommunicationBody.md)
 - [OmniCoreModelAndStateManagementApi.Config](docs/Config.md)
 - [OmniCoreModelAndStateManagementApi.Configurations](docs/Configurations.md)
 - [OmniCoreModelAndStateManagementApi.CreateConfiguration](docs/CreateConfiguration.md)
 - [OmniCoreModelAndStateManagementApi.CreateVaultKeyBody](docs/CreateVaultKeyBody.md)
 - [OmniCoreModelAndStateManagementApi.CustomOnboard](docs/CustomOnboard.md)
 - [OmniCoreModelAndStateManagementApi.Device](docs/Device.md)
 - [OmniCoreModelAndStateManagementApi.DeviceCommand](docs/DeviceCommand.md)
 - [OmniCoreModelAndStateManagementApi.DeviceConfig](docs/DeviceConfig.md)
 - [OmniCoreModelAndStateManagementApi.DeviceConfiguration](docs/DeviceConfiguration.md)
 - [OmniCoreModelAndStateManagementApi.DeviceCredential](docs/DeviceCredential.md)
 - [OmniCoreModelAndStateManagementApi.DeviceOnline](docs/DeviceOnline.md)
 - [OmniCoreModelAndStateManagementApi.DeviceRegistry](docs/DeviceRegistry.md)
 - [OmniCoreModelAndStateManagementApi.DeviceState](docs/DeviceState.md)
 - [OmniCoreModelAndStateManagementApi.DeviceTcpUdpModelDetails](docs/DeviceTcpUdpModelDetails.md)
 - [OmniCoreModelAndStateManagementApi.EnableEncryptionBody](docs/EnableEncryptionBody.md)
 - [OmniCoreModelAndStateManagementApi.ErrorFrame](docs/ErrorFrame.md)
 - [OmniCoreModelAndStateManagementApi.ErrorStatus](docs/ErrorStatus.md)
 - [OmniCoreModelAndStateManagementApi.EventNotificationConfig](docs/EventNotificationConfig.md)
 - [OmniCoreModelAndStateManagementApi.ExportDetail](docs/ExportDetail.md)
 - [OmniCoreModelAndStateManagementApi.FileDetail](docs/FileDetail.md)
 - [OmniCoreModelAndStateManagementApi.FileDetails](docs/FileDetails.md)
 - [OmniCoreModelAndStateManagementApi.Folder](docs/Folder.md)
 - [OmniCoreModelAndStateManagementApi.FolderData](docs/FolderData.md)
 - [OmniCoreModelAndStateManagementApi.Frame](docs/Frame.md)
 - [OmniCoreModelAndStateManagementApi.GatewayConfig](docs/GatewayConfig.md)
 - [OmniCoreModelAndStateManagementApi.GenericErrorResponse](docs/GenericErrorResponse.md)
 - [OmniCoreModelAndStateManagementApi.GetExportsResponse](docs/GetExportsResponse.md)
 - [OmniCoreModelAndStateManagementApi.GetKeysResponse](docs/GetKeysResponse.md)
 - [OmniCoreModelAndStateManagementApi.GetReplaysResponse](docs/GetReplaysResponse.md)
 - [OmniCoreModelAndStateManagementApi.HttpConfig](docs/HttpConfig.md)
 - [OmniCoreModelAndStateManagementApi.Info](docs/Info.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse](docs/ListDeviceConfigVersionsResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceRegistries](docs/ListDeviceRegistries.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceStatesResponse](docs/ListDeviceStatesResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListDevicesOnlineResponse](docs/ListDevicesOnlineResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListDevicesResponse](docs/ListDevicesResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListSinks](docs/ListSinks.md)
 - [OmniCoreModelAndStateManagementApi.LogLevel](docs/LogLevel.md)
 - [OmniCoreModelAndStateManagementApi.Metrics](docs/Metrics.md)
 - [OmniCoreModelAndStateManagementApi.MetricsData](docs/MetricsData.md)
 - [OmniCoreModelAndStateManagementApi.MetricsDetails](docs/MetricsDetails.md)
 - [OmniCoreModelAndStateManagementApi.MetricsLogs](docs/MetricsLogs.md)
 - [OmniCoreModelAndStateManagementApi.MetricsResponse](docs/MetricsResponse.md)
 - [OmniCoreModelAndStateManagementApi.MetricsResponseDetails](docs/MetricsResponseDetails.md)
 - [OmniCoreModelAndStateManagementApi.MqttConfig](docs/MqttConfig.md)
 - [OmniCoreModelAndStateManagementApi.NotificationConfig](docs/NotificationConfig.md)
 - [OmniCoreModelAndStateManagementApi.OperationMetrics](docs/OperationMetrics.md)
 - [OmniCoreModelAndStateManagementApi.Policy](docs/Policy.md)
 - [OmniCoreModelAndStateManagementApi.PublicKeyCertificate](docs/PublicKeyCertificate.md)
 - [OmniCoreModelAndStateManagementApi.PublicKeyCredential](docs/PublicKeyCredential.md)
 - [OmniCoreModelAndStateManagementApi.RegistryCredential](docs/RegistryCredential.md)
 - [OmniCoreModelAndStateManagementApi.Replay](docs/Replay.md)
 - [OmniCoreModelAndStateManagementApi.ReplayBody](docs/ReplayBody.md)
 - [OmniCoreModelAndStateManagementApi.SetRetentionBody](docs/SetRetentionBody.md)
 - [OmniCoreModelAndStateManagementApi.Sink](docs/Sink.md)
 - [OmniCoreModelAndStateManagementApi.StartExportBody](docs/StartExportBody.md)
 - [OmniCoreModelAndStateManagementApi.TcpUdpImage](docs/TcpUdpImage.md)
 - [OmniCoreModelAndStateManagementApi.TcpUdpModel](docs/TcpUdpModel.md)
 - [OmniCoreModelAndStateManagementApi.TcpUdpPortDetail](docs/TcpUdpPortDetail.md)
 - [OmniCoreModelAndStateManagementApi.VaultConfiguration](docs/VaultConfiguration.md)
 - [OmniCoreModelAndStateManagementApi.VaultEncryptionKey](docs/VaultEncryptionKey.md)
 - [OmniCoreModelAndStateManagementApi.VaultStatus](docs/VaultStatus.md)
 - [OmniCoreModelAndStateManagementApi.VaultStatusDetails](docs/VaultStatusDetails.md)
 - [OmniCoreModelAndStateManagementApi.X509CertificateDetails](docs/X509CertificateDetails.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)



### apiKey


- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

