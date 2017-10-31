/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('PhoneNumberController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        PhoneNumberController
    ]);

    function PhoneNumberController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Available Phone Number
             *
             * @param {array}  input    Array with all options for search
             * @param {NumberTypeEnum} input['numberType'] Number type either SMS,Voice or all
             * @param {string} input['areaCode'] Phone Number Area Code
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['pageSize'] [Optional] Page Size
             *
             * @return {promise<String>}
             */
            availablePhoneNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.numberType === null || input.numberType === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `numberType` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.areaCode === null || input.areaCode === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `areaCode` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/availablenumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'NumberType': (input.numberType !== null) ? input.numberType : null,
                    'AreaCode': input.areaCode,
                    'PageSize': (input.pageSize !== null) ? input.pageSize : 10
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
             * List Account's Phone number details
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] Which page of the overall response will be returned. Zero
             * indexed
             * @param {int|null} input['pageSize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {NumberTypeEnum|null} input['numberType'] [Optional] SMS or Voice
             * @param {string|null} input['friendlyName'] [Optional] Friendly name of the number
             *
             * @return {promise<String>}
             */
            listNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/listnumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Page': (input.page !== null) ? input.page : 1,
                    'PageSize': (input.pageSize !== null) ? input.pageSize : 10,
                    'NumberType': (input.numberType !== null) ? input.numberType : null,
                    'FriendlyName': input.friendlyName
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
             * Get Phone Number Details
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] Get Phone number Detail
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewNumberDetails: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phoneNumber === null || input.phoneNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/viewnumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'PhoneNumber': input.phoneNumber
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
             * Release number from account
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] Phone number to be relase
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            releaseNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phoneNumber === null || input.phoneNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/releasenumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'PhoneNumber': input.phoneNumber
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
             * Buy Phone Number
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] Phone number to be purchase
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            buyNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phoneNumber === null || input.phoneNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/buynumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'PhoneNumber': input.phoneNumber
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
             * Update Phone Number Details
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] The phone number to update
             * @param {string} input['voiceUrl'] URL requested once the call connects
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['friendlyName'] [Optional] Phone number friendly name description
             * @param {HttpActionEnum|null} input['voiceMethod'] [Optional] Post or Get
             * @param {string|null} input['voiceFallbackUrl'] [Optional] URL requested if the voice URL is not
             * available
             * @param {HttpActionEnum|null} input['voiceFallbackMethod'] [Optional] Post or Get
             * @param {string|null} input['hangupCallback'] [Optional] callback url after a hangup occurs
             * @param {HttpActionEnum|null} input['hangupCallbackMethod'] [Optional] Post or Get
             * @param {string|null} input['heartbeatUrl'] [Optional] URL requested once the call connects
             * @param {HttpActionEnum|null} input['heartbeatMethod'] [Optional] URL that can be requested every 60
             * seconds during the call to notify of elapsed
             * time
             * @param {string|null} input['smsUrl'] [Optional] URL requested when an SMS is received
             * @param {HttpActionEnum|null} input['smsMethod'] [Optional] Post or Get
             * @param {string|null} input['smsFallbackUrl'] [Optional] URL requested once the call connects
             * @param {HttpActionEnum|null} input['smsFallbackMethod'] [Optional] URL requested if the sms URL is
             * not available
             *
             * @return {promise<String>}
             */
            updatePhoneNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phoneNumber === null || input.phoneNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.voiceUrl === null || input.voiceUrl === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `voiceUrl` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/updatenumber.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'PhoneNumber': input.phoneNumber,
                    'VoiceUrl': input.voiceUrl,
                    'FriendlyName': input.friendlyName,
                    'VoiceMethod': (input.voiceMethod !== null) ? input.voiceMethod : null,
                    'VoiceFallbackUrl': input.voiceFallbackUrl,
                    'VoiceFallbackMethod': (input.voiceFallbackMethod !== null) ? input.voiceFallbackMethod : null,
                    'HangupCallback': input.hangupCallback,
                    'HangupCallbackMethod':
                        (input.hangupCallbackMethod !== null) ? input.hangupCallbackMethod : null,
                    'HeartbeatUrl': input.heartbeatUrl,
                    'HeartbeatMethod': (input.heartbeatMethod !== null) ? input.heartbeatMethod : null,
                    'SmsUrl': input.smsUrl,
                    'SmsMethod': (input.smsMethod !== null) ? input.smsMethod : null,
                    'SmsFallbackUrl': input.smsFallbackUrl,
                    'SmsFallbackMethod': (input.smsFallbackMethod !== null) ? input.smsFallbackMethod : null
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
