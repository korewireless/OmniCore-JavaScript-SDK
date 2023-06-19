# omni_core_model_and_state_management_api

OmniCoreModelAndStateManagementApi - JavaScript client for omni_core_model_and_state_management_api
This is an OmniCore Model and State Management server.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.8.1
- Package version: 1.8.1
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

All URIs are relative to *https://api.korewireless.com/omnicore*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**bindDevice**](docs/DeviceApi.md#bindDevice) | **POST** /subscriptions/{subscriptionId}/registries/{registryId}/bindDeviceToGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**bindDevices**](docs/DeviceApi.md#bindDevices) | **POST** /subscriptions/{subscriptionId}/registries/{registryId}/bindDevicesToGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**blockDeviceCommuncation**](docs/DeviceApi.md#blockDeviceCommuncation) | **PUT** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/communication | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**createDevice**](docs/DeviceApi.md#createDevice) | **POST** /subscriptions/{subscriptionId}/registries/{registryId}/devices | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**deleteDevice**](docs/DeviceApi.md#deleteDevice) | **DELETE** /subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getConfig**](docs/DeviceApi.md#getConfig) | **GET** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/configVersions | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getDevice**](docs/DeviceApi.md#getDevice) | **GET** /subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getDevices**](docs/DeviceApi.md#getDevices) | **GET** /subscriptions/{subscriptionId}/registries/{registryId}/devices | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**getStates**](docs/DeviceApi.md#getStates) | **GET** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/states | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**sendCommandToDevice**](docs/DeviceApi.md#sendCommandToDevice) | **POST** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/sendCommandToDevice | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**unBindDevice**](docs/DeviceApi.md#unBindDevice) | **POST** /subscriptions/{subscriptionId}/registries/{registryId}/unbindDeviceFromGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**unBindDevices**](docs/DeviceApi.md#unBindDevices) | **POST** /subscriptions/{subscriptionId}/registries/{registryId}/unbindDevicesFromGateway | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateConfigurationToDevice**](docs/DeviceApi.md#updateConfigurationToDevice) | **POST** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/updateConfigurationToDevice | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateCustomOnboardRequest**](docs/DeviceApi.md#updateCustomOnboardRequest) | **POST** /subscriptions/{subscriptionid}/registries/{registryId}/devices/{deviceId}/updateCustomOnboardRequest | 
*OmniCoreModelAndStateManagementApi.DeviceApi* | [**updateDevice**](docs/DeviceApi.md#updateDevice) | **PATCH** /subscriptions/{subscriptionId}/registries/{registryId}/devices/{deviceId} | 
*OmniCoreModelAndStateManagementApi.MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getMetrics) | **GET** /subscriptions/{subscriptionId}/metrics | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**createRegistry**](docs/RegistryApi.md#createRegistry) | **POST** /subscriptions/{subscriptionId}/registries | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**deleteRegistry**](docs/RegistryApi.md#deleteRegistry) | **DELETE** /subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**getRegistries**](docs/RegistryApi.md#getRegistries) | **GET** /subscriptions/{subscriptionId}/registries | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**getRegistry**](docs/RegistryApi.md#getRegistry) | **GET** /subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**sendBroadcastToDevices**](docs/RegistryApi.md#sendBroadcastToDevices) | **POST** /subscriptions/{subscriptionid}/registries/{registryId}/sendBroadcastToDevice | 
*OmniCoreModelAndStateManagementApi.RegistryApi* | [**updateRegistry**](docs/RegistryApi.md#updateRegistry) | **PATCH** /subscriptions/{subscriptionId}/registries/{registryId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**createSink**](docs/SinkApi.md#createSink) | **POST** /subscriptions/{subscriptionId}/sinks | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**deleteSink**](docs/SinkApi.md#deleteSink) | **DELETE** /subscriptions/{subscriptionId}/sinks/{sinkId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**getASink**](docs/SinkApi.md#getASink) | **GET** /subscriptions/{subscriptionId}/sinks/{sinkId} | 
*OmniCoreModelAndStateManagementApi.SinkApi* | [**getSinks**](docs/SinkApi.md#getSinks) | **GET** /subscriptions/{subscriptionId}/sinks | Get All Sinks


## Documentation for Models

 - [OmniCoreModelAndStateManagementApi.BindRequest](docs/BindRequest.md)
 - [OmniCoreModelAndStateManagementApi.BindRequestIdsGateway](docs/BindRequestIdsGateway.md)
 - [OmniCoreModelAndStateManagementApi.BlockCommunicationBody](docs/BlockCommunicationBody.md)
 - [OmniCoreModelAndStateManagementApi.Config](docs/Config.md)
 - [OmniCoreModelAndStateManagementApi.CustomOnboard](docs/CustomOnboard.md)
 - [OmniCoreModelAndStateManagementApi.Device](docs/Device.md)
 - [OmniCoreModelAndStateManagementApi.DeviceCommand](docs/DeviceCommand.md)
 - [OmniCoreModelAndStateManagementApi.DeviceConfig](docs/DeviceConfig.md)
 - [OmniCoreModelAndStateManagementApi.DeviceConfiguration](docs/DeviceConfiguration.md)
 - [OmniCoreModelAndStateManagementApi.DeviceCredential](docs/DeviceCredential.md)
 - [OmniCoreModelAndStateManagementApi.DeviceRegistry](docs/DeviceRegistry.md)
 - [OmniCoreModelAndStateManagementApi.DeviceState](docs/DeviceState.md)
 - [OmniCoreModelAndStateManagementApi.ErrorFrame](docs/ErrorFrame.md)
 - [OmniCoreModelAndStateManagementApi.ErrorStatus](docs/ErrorStatus.md)
 - [OmniCoreModelAndStateManagementApi.EventNotificationConfig](docs/EventNotificationConfig.md)
 - [OmniCoreModelAndStateManagementApi.GatewayConfig](docs/GatewayConfig.md)
 - [OmniCoreModelAndStateManagementApi.GenericErrorResponse](docs/GenericErrorResponse.md)
 - [OmniCoreModelAndStateManagementApi.HttpConfig](docs/HttpConfig.md)
 - [OmniCoreModelAndStateManagementApi.Info](docs/Info.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceConfigVersionsResponse](docs/ListDeviceConfigVersionsResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceRegistries](docs/ListDeviceRegistries.md)
 - [OmniCoreModelAndStateManagementApi.ListDeviceStatesResponse](docs/ListDeviceStatesResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListDevicesResponse](docs/ListDevicesResponse.md)
 - [OmniCoreModelAndStateManagementApi.ListSinks](docs/ListSinks.md)
 - [OmniCoreModelAndStateManagementApi.LogLevel](docs/LogLevel.md)
 - [OmniCoreModelAndStateManagementApi.Metrics](docs/Metrics.md)
 - [OmniCoreModelAndStateManagementApi.MetricsDetails](docs/MetricsDetails.md)
 - [OmniCoreModelAndStateManagementApi.MqttConfig](docs/MqttConfig.md)
 - [OmniCoreModelAndStateManagementApi.NotificationConfig](docs/NotificationConfig.md)
 - [OmniCoreModelAndStateManagementApi.Policy](docs/Policy.md)
 - [OmniCoreModelAndStateManagementApi.PublicKeyCertificate](docs/PublicKeyCertificate.md)
 - [OmniCoreModelAndStateManagementApi.PublicKeyCredential](docs/PublicKeyCredential.md)
 - [OmniCoreModelAndStateManagementApi.RegistryCredential](docs/RegistryCredential.md)
 - [OmniCoreModelAndStateManagementApi.Sink](docs/Sink.md)
 - [OmniCoreModelAndStateManagementApi.X509CertificateDetails](docs/X509CertificateDetails.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)



### apiKey


- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

