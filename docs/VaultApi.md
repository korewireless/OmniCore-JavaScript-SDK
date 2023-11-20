# OmniCoreModelAndStateManagementApi.VaultApi

All URIs are relative to *https://api.korewireless.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVaultConfiguration**](VaultApi.md#createVaultConfiguration) | **POST** /vault/subscriptions/{subscriptionid}/configurations | 
[**deleteConfiguration**](VaultApi.md#deleteConfiguration) | **DELETE** /vault/subscriptions/{subscriptionid}/configurations/{configid} | 
[**enableVault**](VaultApi.md#enableVault) | **POST** /vault/subscriptions/{subscriptionid}/enable-vault | 
[**getExports**](VaultApi.md#getExports) | **GET** /vault/subscriptions/{subscriptionid}/exports | 
[**getRegistryData**](VaultApi.md#getRegistryData) | **GET** /vault/subscriptions/{subscriptionid}/folders | 
[**getReplays**](VaultApi.md#getReplays) | **GET** /vault/subscriptions/{subscriptionid}/replays | 
[**getVaultAudit**](VaultApi.md#getVaultAudit) | **GET** /vault/subscriptions/{subscriptionid}/audit | 
[**getVaultConfigurations**](VaultApi.md#getVaultConfigurations) | **GET** /vault/subscriptions/{subscriptionid}/configurations | 
[**getVaultFiles**](VaultApi.md#getVaultFiles) | **GET** /vault/subscriptions/{subscriptionid}/registry/{registryid}/files | 
[**getVaultMetrics**](VaultApi.md#getVaultMetrics) | **GET** /vault/subscriptions/{subscriptionid}/metrics | 
[**getVaultStatus**](VaultApi.md#getVaultStatus) | **GET** /vault/subscriptions/{subscriptionid}/status | 
[**startExport**](VaultApi.md#startExport) | **POST** /vault/subscriptions/{subscriptionid}/exports | 
[**startReplay**](VaultApi.md#startReplay) | **POST** /vault/subscriptions/{subscriptionid}/replays | 



## createVaultConfiguration

> Frame createVaultConfiguration(subscriptionid, opts)



create vault configuration

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'createConfiguration': new OmniCoreModelAndStateManagementApi.CreateConfiguration() // CreateConfiguration | application/json
};
apiInstance.createVaultConfiguration(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **createConfiguration** | [**CreateConfiguration**](CreateConfiguration.md)| application/json | [optional] 

### Return type

[**Frame**](Frame.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConfiguration

> Frame deleteConfiguration(subscriptionid, configid)



Delete Configuration

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let configid = "configid_example"; // String | config id
apiInstance.deleteConfiguration(subscriptionid, configid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **configid** | **String**| config id | 

### Return type

[**Frame**](Frame.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableVault

> Details enableVault(subscriptionid, opts)



Enable/Disable vault for a subscription

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'enableVault': new OmniCoreModelAndStateManagementApi.EnableVault() // EnableVault | application/json
};
apiInstance.enableVault(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **enableVault** | [**EnableVault**](EnableVault.md)| application/json | [optional] 

### Return type

[**Details**](Details.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExports

> GetExportsResponse getExports(subscriptionid)



Get Exports

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
apiInstance.getExports(subscriptionid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 

### Return type

[**GetExportsResponse**](GetExportsResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRegistryData

> FolderData getRegistryData(subscriptionid)



Get vault folder data

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
apiInstance.getRegistryData(subscriptionid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 

### Return type

[**FolderData**](FolderData.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReplays

> GetReplaysResponse getReplays(subscriptionid)



Get Replays

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
apiInstance.getReplays(subscriptionid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 

### Return type

[**GetReplaysResponse**](GetReplaysResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultAudit

> AuditResult getVaultAudit(subscriptionid, opts)



Get vault Audit

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'pageNumber': 56, // Number | Page Number
  'pageSize': 56 // Number | Page Size
};
apiInstance.getVaultAudit(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **pageNumber** | **Number**| Page Number | [optional] 
 **pageSize** | **Number**| Page Size | [optional] 

### Return type

[**AuditResult**](AuditResult.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultConfigurations

> Configurations getVaultConfigurations(subscriptionid)



Get vault configurations

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
apiInstance.getVaultConfigurations(subscriptionid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 

### Return type

[**Configurations**](Configurations.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultFiles

> FileDetails getVaultFiles(subscriptionid, registryid, opts)



Get vault files

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let registryid = "registryid_example"; // String | registry ID
let opts = {
  'fileType': "fileType_example" // String | file type
};
apiInstance.getVaultFiles(subscriptionid, registryid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **registryid** | **String**| registry ID | 
 **fileType** | **String**| file type | [optional] 

### Return type

[**FileDetails**](FileDetails.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultMetrics

> MetricsResponse getVaultMetrics(subscriptionid, opts)



Get vault metrics

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'startTime': "startTime_example", // String | start time
  'endTime': "endTime_example" // String | end time
};
apiInstance.getVaultMetrics(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **startTime** | **String**| start time | [optional] 
 **endTime** | **String**| end time | [optional] 

### Return type

[**MetricsResponse**](MetricsResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVaultStatus

> VaultStatus getVaultStatus(subscriptionid)



Get vault status

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
apiInstance.getVaultStatus(subscriptionid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 

### Return type

[**VaultStatus**](VaultStatus.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startExport

> Frame startExport(subscriptionid, opts)



Start Export

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'startExportBody': new OmniCoreModelAndStateManagementApi.StartExportBody() // StartExportBody | application/json
};
apiInstance.startExport(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **startExportBody** | [**StartExportBody**](StartExportBody.md)| application/json | [optional] 

### Return type

[**Frame**](Frame.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startReplay

> String startReplay(subscriptionid, opts)



Start Replay

### Example

```javascript
import OmniCoreModelAndStateManagementApi from 'omni_core_model_and_state_management_api';
let defaultClient = OmniCoreModelAndStateManagementApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OmniCoreModelAndStateManagementApi.VaultApi();
let subscriptionid = "subscriptionid_example"; // String | Subscription ID
let opts = {
  'replayBody': new OmniCoreModelAndStateManagementApi.ReplayBody() // ReplayBody | application/json
};
apiInstance.startReplay(subscriptionid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionid** | **String**| Subscription ID | 
 **replayBody** | [**ReplayBody**](ReplayBody.md)| application/json | [optional] 

### Return type

**String**

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

