/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/AccountInformation', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/AccountSignatureProviders', 'model/BillingChargeResponse', 'model/Brand', 'model/BrandResources', 'model/BrandResourcesList', 'model/BrandsRequest', 'model/BrandsResponse', 'model/CaptiveRecipientInformation', 'model/ConsumerDisclosure', 'model/CustomFields', 'model/ENoteConfiguration', 'model/ErrorDetails', 'model/FileTypeList', 'model/NewAccountDefinition', 'model/NewAccountSummary', 'model/PermissionProfile', 'model/PermissionProfileInformation', 'model/PostTransactionsRequest', 'model/PostTransactionsResponse', 'model/ProvisioningInformation', 'model/RecipientNamesResponse', 'model/TabAccountSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AccountInformation'), require('../model/AccountSettingsInformation'), require('../model/AccountSharedAccess'), require('../model/AccountSignatureProviders'), require('../model/BillingChargeResponse'), require('../model/Brand'), require('../model/BrandResources'), require('../model/BrandResourcesList'), require('../model/BrandsRequest'), require('../model/BrandsResponse'), require('../model/CaptiveRecipientInformation'), require('../model/ConsumerDisclosure'), require('../model/CustomFields'), require('../model/ENoteConfiguration'), require('../model/ErrorDetails'), require('../model/FileTypeList'), require('../model/NewAccountDefinition'), require('../model/NewAccountSummary'), require('../model/PermissionProfile'), require('../model/PermissionProfileInformation'), require('../model/PostTransactionsRequest'), require('../model/PostTransactionsResponse'), require('../model/ProvisioningInformation'), require('../model/RecipientNamesResponse'), require('../model/TabAccountSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.AccountInformation, root.Docusign.AccountSettingsInformation, root.Docusign.AccountSharedAccess, root.Docusign.AccountSignatureProviders, root.Docusign.BillingChargeResponse, root.Docusign.Brand, root.Docusign.BrandResources, root.Docusign.BrandResourcesList, root.Docusign.BrandsRequest, root.Docusign.BrandsResponse, root.Docusign.CaptiveRecipientInformation, root.Docusign.ConsumerDisclosure, root.Docusign.CustomFields, root.Docusign.ENoteConfiguration, root.Docusign.ErrorDetails, root.Docusign.FileTypeList, root.Docusign.NewAccountDefinition, root.Docusign.NewAccountSummary, root.Docusign.PermissionProfile, root.Docusign.PermissionProfileInformation, root.Docusign.PostTransactionsRequest, root.Docusign.PostTransactionsResponse, root.Docusign.ProvisioningInformation, root.Docusign.RecipientNamesResponse, root.Docusign.TabAccountSettings);
  }
}(this, function(Configuration, ApiClient, AccountInformation, AccountSettingsInformation, AccountSharedAccess, AccountSignatureProviders, BillingChargeResponse, Brand, BrandResources, BrandResourcesList, BrandsRequest, BrandsResponse, CaptiveRecipientInformation, ConsumerDisclosure, CustomFields, ENoteConfiguration, ErrorDetails, FileTypeList, NewAccountDefinition, NewAccountSummary, PermissionProfile, PermissionProfileInformation, PostTransactionsRequest, PostTransactionsResponse, ProvisioningInformation, RecipientNamesResponse, TabAccountSettings) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * Callback function to receive the result of the _delete operation.
     * @callback module:api/AccountsApi~_deleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified account.
     * This closes the specified account. You must be an account admin to close your account. Once closed, an account must be reopened by DocuSign.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~_deleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this._delete = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling _delete");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/AccountsApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewAccountSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new accounts.
     * Creates new DocuSign service accounts.

This is used to create multiple DocuSign accounts with one call. It uses the same information and formats as the normal a  [Accounts:create](accounts_create) call with the information included within a `newAccountRequests` element. A maximum of 100 new accounts can be created at one time.

Note that the structure of the XML request is slightly different than the JSON request, in that the new account information is included in a `newAccountDefinition` property inside the `newAccountRequests` element.
Response

The response returns the new account ID, password and the default user information for each newly created account.

A 201 code is returned if the call succeeded.  While the call may have succeed, some of the individual account requests may have failed. In the case of failures to create the account,  an `errorDetails` node is added in the response to each specific request that failed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.previewBillingPlan When set to **true**, creates the account using a preview billing plan.
     * @param {module:model/NewAccountDefinition} opts.newAccountDefinition 
     * @param {module:api/AccountsApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewAccountSummary}
     */
    this.create = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['newAccountDefinition'];


      var pathParams = {
      };
      var queryParams = {
        'preview_billing_plan': opts['previewBillingPlan']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NewAccountSummary;

      return this.apiClient.callApi(
        '/v2/accounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createBrand operation.
     * @callback module:api/AccountsApi~createBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates one or more brand profile files for the account.
     * Creates one or more brand profile files for the account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSig`) must be set to **true** for the account to use this call.

An error is returned if `brandId` property for a brand profile is already set for the account. To upload a new version of an existing brand profile, you must delete the profile and then upload the newer version.

When brand profile files are being uploaded, they must be combined into one zip file and the `Content-Type` must be `application/zip`.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/Brand} opts.brand 
     * @param {module:api/AccountsApi~createBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.createBrand = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['brand'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBrand");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createEMortgageTransaction operation.
     * @callback module:api/AccountsApi~createEMortgageTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Starts a new eMortgage Transaction
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostTransactionsRequest} opts.postTransactionsRequest 
     * @param {module:api/AccountsApi~createEMortgageTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTransactionsResponse}
     */
    this.createEMortgageTransaction = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['postTransactionsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEMortgageTransaction");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PostTransactionsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/eMortgage/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createPermissionProfile operation.
     * @callback module:api/AccountsApi~createPermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new permission profile in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:model/PermissionProfile} opts.permissionProfile 
     * @param {module:api/AccountsApi~createPermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.createPermissionProfile = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionProfile'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createPermissionProfile");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteBrand operation.
     * @callback module:api/AccountsApi~deleteBrandCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {module:api/AccountsApi~deleteBrandCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBrand = function(accountId, brandId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling deleteBrand");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteBrandLogoByType operation.
     * @callback module:api/AccountsApi~deleteBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete one branding logo.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~deleteBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBrandLogoByType = function(accountId, brandId, logoType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling deleteBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling deleteBrandLogoByType");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteBrands operation.
     * @callback module:api/AccountsApi~deleteBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes one or more brand profiles.
     * Deletes one or more brand profiles from an account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`) must be set to **true** to use this call.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/BrandsRequest} opts.brandsRequest 
     * @param {module:api/AccountsApi~deleteBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.deleteBrands = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrands");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteCaptiveRecipient operation.
     * @callback module:api/AccountsApi~deleteCaptiveRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaptiveRecipientInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the signature for one or more captive recipient records.
     * Deletes the signature for one or more captive recipient records; it is primarily used for testing. This provides a way to reset the signature associated with a client user ID so that a new signature can be created the next time the client user ID is used.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} recipientPart 
     * @param {Object} opts Optional parameters
     * @param {module:model/CaptiveRecipientInformation} opts.captiveRecipientInformation 
     * @param {module:api/AccountsApi~deleteCaptiveRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaptiveRecipientInformation}
     */
    this.deleteCaptiveRecipient = function(accountId, recipientPart, opts, callback) {
      opts = opts || {};
      var postBody = opts['captiveRecipientInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCaptiveRecipient");
      }

      // verify the required parameter 'recipientPart' is set
      if (recipientPart == undefined || recipientPart == null) {
        throw new Error("Missing the required parameter 'recipientPart' when calling deleteCaptiveRecipient");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientPart': recipientPart
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CaptiveRecipientInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/captive_recipients/{recipientPart}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteENoteConfiguration operation.
     * @callback module:api/AccountsApi~deleteENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~deleteENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteENoteConfiguration = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteENoteConfiguration");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/enote_configuration', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deletePermissionProfile operation.
     * @callback module:api/AccountsApi~deletePermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a permissions profile within the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {module:api/AccountsApi~deletePermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePermissionProfile = function(accountId, permissionProfileId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deletePermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling deletePermissionProfile");
      }


      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getAccountInformation operation.
     * @callback module:api/AccountsApi~getAccountInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the account information for the specified account.
     * Retrieves the account information for the specified account.

**Response**
The `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeAccountSettings When set to **true**, includes the account settings for the account in the response.
     * @param {module:api/AccountsApi~getAccountInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountInformation}
     */
    this.getAccountInformation = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountInformation");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include_account_settings': opts['includeAccountSettings']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getAccountTabSettings operation.
     * @callback module:api/AccountsApi~getAccountTabSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabAccountSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns tab settings list for specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getAccountTabSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabAccountSettings}
     */
    this.getAccountTabSettings = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountTabSettings");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TabAccountSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBillingCharges operation.
     * @callback module:api/AccountsApi~getBillingChargesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingChargeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets list of recurring and usage charges for the account.
     * Retrieves the list of recurring and usage charges for the account. This can be used to determine the charge structure and usage of charge plan items. 

Privileges required: account administrator 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeCharges Specifies which billing charges to return. Valid values are:  * envelopes * seats 
     * @param {module:api/AccountsApi~getBillingChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingChargeResponse}
     */
    this.getBillingCharges = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBillingCharges");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include_charges': opts['includeCharges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingChargeResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/billing_charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBrand operation.
     * @callback module:api/AccountsApi~getBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Brand} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a specific brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeExternalReferences 
     * @param {String} opts.includeLogos 
     * @param {module:api/AccountsApi~getBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Brand}
     */
    this.getBrand = function(accountId, brandId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrand");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
        'include_external_references': opts['includeExternalReferences'],
        'include_logos': opts['includeLogos']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Brand;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBrandLogoByType operation.
     * @callback module:api/AccountsApi~getBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtains the specified image for a brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~getBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBrandLogoByType = function(accountId, brandId, logoType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling getBrandLogoByType");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBrandResources operation.
     * @callback module:api/AccountsApi~getBrandResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandResourcesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified account&#39;s list of branding resources (metadata).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {module:api/AccountsApi~getBrandResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandResourcesList}
     */
    this.getBrandResources = function(accountId, brandId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandResources");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandResources");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandResourcesList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBrandResourcesByContentType operation.
     * @callback module:api/AccountsApi~getBrandResourcesByContentTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified branding resource file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} resourceContentType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.langcode 
     * @param {String} opts.returnMaster 
     * @param {module:api/AccountsApi~getBrandResourcesByContentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBrandResourcesByContentType = function(accountId, brandId, resourceContentType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandResourcesByContentType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandResourcesByContentType");
      }

      // verify the required parameter 'resourceContentType' is set
      if (resourceContentType == undefined || resourceContentType == null) {
        throw new Error("Missing the required parameter 'resourceContentType' when calling getBrandResourcesByContentType");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'resourceContentType': resourceContentType
      };
      var queryParams = {
        'langcode': opts['langcode'],
        'return_master': opts['returnMaster']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getConsumerDisclosure operation.
     * @callback module:api/AccountsApi~getConsumerDisclosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the Electronic Record and Signature Disclosure.
     * Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, for the requested envelope recipient. This might be different than the current account disclosure depending on account settings, such as branding, and when the account disclosure was last updated. An optional query string can be included to return the language for the disclosure.  
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} langCode The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to �browser� to automatically detect the browser language being used by the viewer and display the disclosure in that language.
     * @param {module:api/AccountsApi~getConsumerDisclosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosure = function(accountId, langCode, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosure");
      }

      // verify the required parameter 'langCode' is set
      if (langCode == undefined || langCode == null) {
        throw new Error("Missing the required parameter 'langCode' when calling getConsumerDisclosure");
      }


      var pathParams = {
        'accountId': accountId,
        'langCode': langCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/consumer_disclosure/{langCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getConsumerDisclosureDefault operation.
     * @callback module:api/AccountsApi~getConsumerDisclosureDefaultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the Electronic Record and Signature Disclosure for the account.
     * Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account. You can use an optional query string to set the language for the disclosure.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.langCode Specifies the language used in the response. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).  Additionally, the value can be set to &#x60;browser&#x60; to automatically detect the browser language being used by the viewer and display the disclosure in that language. 
     * @param {module:api/AccountsApi~getConsumerDisclosureDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosureDefault = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosureDefault");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'langCode': opts['langCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/consumer_disclosure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getENoteConfiguration operation.
     * @callback module:api/AccountsApi~getENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ENoteConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ENoteConfiguration}
     */
    this.getENoteConfiguration = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getENoteConfiguration");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ENoteConfiguration;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/enote_configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getPermissionProfile operation.
     * @callback module:api/AccountsApi~getPermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a permissions profile in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:api/AccountsApi~getPermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.getPermissionProfile = function(accountId, permissionProfileId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling getPermissionProfile");
      }


      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getProvisioning operation.
     * @callback module:api/AccountsApi~getProvisioningCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProvisioningInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the account provisioning information for the account.
     * Retrieves the account provisioning information for the account.
     * @param {module:api/AccountsApi~getProvisioningCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProvisioningInformation}
     */
    this.getProvisioning = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProvisioningInformation;

      return this.apiClient.callApi(
        '/v2/accounts/provisioning', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listBrands operation.
     * @callback module:api/AccountsApi~listBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of brand profiles.
     * Retrieves the list of brand profiles associated with the account and the default brand profiles. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`)  must be set to **true** for the account to use this call.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.excludeDistributorBrand When set to **true**, excludes distributor brand information from the response set.
     * @param {String} opts.includeLogos When set to **true**, returns the logos associated with the brand.
     * @param {module:api/AccountsApi~listBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.listBrands = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listBrands");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'exclude_distributor_brand': opts['excludeDistributorBrand'],
        'include_logos': opts['includeLogos']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listCustomFields operation.
     * @callback module:api/AccountsApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of custom fields associated with the account.
     * Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.listCustomFields = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listPermissions operation.
     * @callback module:api/AccountsApi~listPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfileInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of permission profiles.
     * Retrieves a list of Permission Profiles. Permission Profiles are a standard set of user permissions that you can apply to individual users or users in a Group. This makes it easier to manage user permissions for a large number of users, without having to change permissions on a user-by-user basis.

Currently, Permission Profiles can only be created and modified in the DocuSign console.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:api/AccountsApi~listPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfileInformation}
     */
    this.listPermissions = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPermissions");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfileInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listRecipientNamesByEmail operation.
     * @callback module:api/AccountsApi~listRecipientNamesByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientNamesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets recipient names associated with an email address.
     * Retrieves a list of recipients in the specified account that are associated with a email address supplied in the query string.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.email The email address for the user
     * @param {module:api/AccountsApi~listRecipientNamesByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientNamesResponse}
     */
    this.listRecipientNamesByEmail = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipientNamesByEmail");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'email': opts['email']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecipientNamesResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/recipient_names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listSettings operation.
     * @callback module:api/AccountsApi~listSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSettingsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets account settings information.
     * Retrieves the account settings information for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSettingsInformation}
     */
    this.listSettings = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSettings");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSettingsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listSharedAccess operation.
     * @callback module:api/AccountsApi~listSharedAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSharedAccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved: Gets the shared item status for one or more users.
     * Reserved: Retrieves shared item status for one or more users and types of items.

Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared=shared_from.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.count Specifies maximum number of results included in the response. If no value is specified, this defaults to 1000.
     * @param {String} opts.envelopesNotSharedUserStatus 
     * @param {String} opts.folderIds 
     * @param {String} opts.itemType Specifies the type of shared item being requested. The accepted values are: -envelopes: returns information about envelope sharing between users.
     * @param {String} opts.searchText This can be used to filter user names in the response. The wild-card ‘*’ (asterisk) can be used around the string.
     * @param {String} opts.shared Specifies which users should be included in the response. Multiple values can be used in the query by using a comma separated list of shared values. If the requestor does not have account administrator privileges, the shared_to value is used. Requestors that do not have account administrator privileges can only use the shared_to, any other setting will result in an error. The accepted values are:  -not_shared: Returns account users that the specified item type is not being shared with and that are not sharing the specified item type with the user.  User X (Share) X Account user  -shared_to: Returns account users that the specified item type is not being shared with and who are sharing the specified item type with the user (only shared to the user).  User X (Share) Account user  -shared_from: Returns account users that the specified item type is being shared with and who are not sharing the specified item type with the user (only shared from the user).  User (Share) &gt;&gt; Account user  -shared_to_and_from: Returns account users that the specified item type is being shared with and who are sharing the specified item type with the user.  User &lt;&lt; (Share) &gt;&gt; Account user
     * @param {String} opts.startPosition If the response set exceeds Count, this can be used to specify that the method should return users starting at the specified index. The first index is 0, and should be used in the first GET call. Typically this number is a multiple of Count. If no value is specified, this defaults to be 0. 
     * @param {String} opts.userIds A comma separated list of userIds for whom the shared item information is being requested. 
     * @param {module:api/AccountsApi~listSharedAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSharedAccess}
     */
    this.listSharedAccess = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSharedAccess");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'count': opts['count'],
        'envelopes_not_shared_user_status': opts['envelopesNotSharedUserStatus'],
        'folder_ids': opts['folderIds'],
        'item_type': opts['itemType'],
        'search_text': opts['searchText'],
        'shared': opts['shared'],
        'start_position': opts['startPosition'],
        'user_ids': opts['userIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSharedAccess;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/shared_access', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listSignatureProviders operation.
     * @callback module:api/AccountsApi~listSignatureProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSignatureProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Account available signature providers for specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSignatureProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSignatureProviders}
     */
    this.listSignatureProviders = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSignatureProviders");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSignatureProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signatureProviders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listUnsupportedFileTypes operation.
     * @callback module:api/AccountsApi~listUnsupportedFileTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileTypeList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of unsupported file types.
     * Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listUnsupportedFileTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileTypeList}
     */
    this.listUnsupportedFileTypes = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listUnsupportedFileTypes");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FileTypeList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/unsupported_file_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateAccountTabSettings operation.
     * @callback module:api/AccountsApi~updateAccountTabSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabAccountSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies tab settings for specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/TabAccountSettings} opts.tabAccountSettings 
     * @param {module:api/AccountsApi~updateAccountTabSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabAccountSettings}
     */
    this.updateAccountTabSettings = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['tabAccountSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateAccountTabSettings");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TabAccountSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateBrand operation.
     * @callback module:api/AccountsApi~updateBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Brand} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {Object} opts Optional parameters
     * @param {module:model/Brand} opts.brand 
     * @param {module:api/AccountsApi~updateBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Brand}
     */
    this.updateBrand = function(accountId, brandId, opts, callback) {
      opts = opts || {};
      var postBody = opts['brand'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrand");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Brand;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateBrandLogoByType operation.
     * @callback module:api/AccountsApi~updateBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put one branding logo.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~updateBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBrandLogoByType = function(accountId, brandId, logoType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling updateBrandLogoByType");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateBrandResourcesByContentType operation.
     * @callback module:api/AccountsApi~updateBrandResourcesByContentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandResources} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Uploads a branding resource file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} resourceContentType 
     * @param {module:api/AccountsApi~updateBrandResourcesByContentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandResources}
     */
    this.updateBrandResourcesByContentType = function(accountId, brandId, resourceContentType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrandResourcesByContentType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrandResourcesByContentType");
      }

      // verify the required parameter 'resourceContentType' is set
      if (resourceContentType == undefined || resourceContentType == null) {
        throw new Error("Missing the required parameter 'resourceContentType' when calling updateBrandResourcesByContentType");
      }


      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'resourceContentType': resourceContentType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandResources;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateENoteConfiguration operation.
     * @callback module:api/AccountsApi~updateENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ENoteConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/ENoteConfiguration} opts.eNoteConfiguration 
     * @param {module:api/AccountsApi~updateENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ENoteConfiguration}
     */
    this.updateENoteConfiguration = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['eNoteConfiguration'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateENoteConfiguration");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ENoteConfiguration;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/enote_configuration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updatePermissionProfile operation.
     * @callback module:api/AccountsApi~updatePermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a permission profile within the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:model/PermissionProfile} opts.permissionProfile 
     * @param {module:api/AccountsApi~updatePermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.updatePermissionProfile = function(accountId, permissionProfileId, opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionProfile'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling updatePermissionProfile");
      }


      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateSettings operation.
     * @callback module:api/AccountsApi~updateSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the account settings for an account.
     * Updates the account settings for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountSettingsInformation} opts.accountSettingsInformation 
     * @param {module:api/AccountsApi~updateSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSettings = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['accountSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSettings");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateSharedAccess operation.
     * @callback module:api/AccountsApi~updateSharedAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSharedAccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved: Sets the shared access information for users.
     * Reserved: Sets the shared access information for one or more users.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.itemType 
     * @param {String} opts.userIds 
     * @param {module:model/AccountSharedAccess} opts.accountSharedAccess 
     * @param {module:api/AccountsApi~updateSharedAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSharedAccess}
     */
    this.updateSharedAccess = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['accountSharedAccess'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSharedAccess");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'item_type': opts['itemType'],
        'user_ids': opts['userIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSharedAccess;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/shared_access', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
