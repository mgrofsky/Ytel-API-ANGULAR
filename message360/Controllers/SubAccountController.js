/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('SubAccountController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        SubAccountController
    ]);

    function SubAccountController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Delete sub account or merge numbers into parent
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['subAccountSID'] The SubaccountSid to be deleted
             * @param {MergeNumberStatusEnum} input['mergeNumber'] 0 to delete or 1 to merge numbers to parent
             * account.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            deleteSubAccount: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.subAccountSID === null || input.subAccountSID === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `subAccountSID` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/user/deletesubaccount.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'SubAccountSID': input.subAccountSID,
                    'MergeNumber': input.mergeNumber
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Suspend or unsuspend
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['subAccountSID'] The SubaccountSid to be activated or suspended
             * @param {ActivateStatusEnum} input['activate'] 0 to suspend or 1 to activate
             * @param {string} input['responseType'] Example: json
             *
             * @return {promise<String>}
             */
            suspendSubAccount: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.subAccountSID === null || input.subAccountSID === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `subAccountSID` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/user/subaccountactivation.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'SubAccountSID': input.subAccountSID,
                    'Activate': input.activate
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Create a sub user account under the parent account
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['firstName'] Sub account user first name
             * @param {string} input['lastName'] sub account user last name
             * @param {string} input['email'] Sub account email address
             * @param {string} input['friendlyName'] Descriptive name of the sub account
             * @param {string} input['password'] The password of the sub account.  Please make sure to make as
             * password that is at least 8 characters long, contain a symbol,
             * uppercase and a number.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            createSubAccount: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.firstName === null || input.firstName === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `firstName` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.lastName === null || input.lastName === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `lastName` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.email === null || input.email === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `email` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.friendlyName === null || input.friendlyName === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `friendlyName` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.password === null || input.password === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `password` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/user/createsubaccount.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'FirstName': input.firstName,
                    'LastName': input.lastName,
                    'Email': input.email,
                    'FriendlyName': input.friendlyName,
                    'Password': input.password
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
