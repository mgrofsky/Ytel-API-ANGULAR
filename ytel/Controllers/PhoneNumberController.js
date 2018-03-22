/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
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
             * Retrieve a list of available phone numbers that can be purchased and used for your Ytel account.
             *
             * @param {array}  input    Array with all options for search
             * @param {NumberTypeEnum} input['numbertype'] Number type either SMS,Voice or all
             * @param {string} input['areacode'] Specifies the area code for the returned list of available numbers.
             * Only available for North American numbers.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return.
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
                if (input.numbertype === null || input.numbertype === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `numbertype` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.areacode === null || input.areacode === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `areacode` in the input object cannot be null.',
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
                    'numbertype': (input.numbertype !== null) ? input.numbertype : null,
                    'areacode': input.areacode,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10
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
             * Remove a purchased Ytel number from your account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid Ytel comma separated numbers (E.164 format).
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            massReleaseNumber: function (input) {
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
                var _queryBuilder = _baseUri + '/incomingphone/massreleasenumber.{ResponseType}';
                
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
             * Retrieve the details for a phone number by its number.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid Ytel 10-digit phone number (E.164 format).
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
             * Remove a purchased Ytel number from your account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid 10-digit Ytel number (E.164 format).
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
             * Purchase a phone number to be used with your Ytel account
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid 10-digit Ytel number (E.164 format).
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
             * Update properties for a Ytel number that has been purchased for your account. Refer to the parameters
             * list for the list of properties that can be updated.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid Ytel number (E.164 format).
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
             * @param {string|null} input['smsFallbackUrl'] [Optional] URL used if any errors occur during
             * execution of InboundXML from an SMS or at initial
             * request of the SmsUrl.
             * @param {HttpActionEnum|null} input['smsFallbackMethod'] [Optional] The HTTP method Ytel will use
             * when URL requested if the SmsUrl is not
             * available.
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
            },
            /**
             * Transfer phone number that has been purchased for from one account to another account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phonenumber'] A valid 10-digit Ytel number (E.164 format).
             * @param {string} input['fromaccountsid'] A specific Accountsid from where Number is getting transfer.
             * @param {string} input['toaccountsid'] A specific Accountsid to which Number is getting transfer.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            transferNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phonenumber === null || input.phonenumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phonenumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.fromaccountsid === null || input.fromaccountsid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `fromaccountsid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.toaccountsid === null || input.toaccountsid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `toaccountsid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/transferphonenumbers.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'phonenumber': input.phonenumber,
                    'fromaccountsid': input.fromaccountsid,
                    'toaccountsid': input.toaccountsid
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
             * Retrieve a list of purchased phones numbers associated with your Ytel account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] Which page of the overall response will be returned. Page
             * indexing starts at 1.
             * @param {int|null} input['pageSize'] [Optional] The page count to retrieve from the total results in
             * the collection. Page indexing starts at 1.
             * @param {NumberTypeEnum|null} input['numberType'] [Optional] The capability supported by the number.
             * Number type either SMS,Voice or all
             * @param {string|null} input['friendlyName'] [Optional] A human-readable label added to the number
             * object.
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
             * Update properties for a Ytel numbers that has been purchased for your account. Refer to the
             * parameters list for the list of properties that can be updated.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phoneNumber'] A valid comma(,) separated Ytel numbers. (E.164 format).
             * @param {string} input['voiceUrl'] The URL returning InboundXML incoming calls should execute when
             * connected.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['friendlyName'] [Optional] A human-readable value for labeling the number.
             * @param {HttpActionEnum|null} input['voiceMethod'] [Optional] Specifies the HTTP method used to
             * request the VoiceUrl once incoming call connects.
             * @param {string|null} input['voiceFallbackUrl'] [Optional] URL used if any errors occur during
             * execution of InboundXML on a call or at initial
             * request of the voice url
             * @param {HttpActionEnum|null} input['voiceFallbackMethod'] [Optional] Specifies the HTTP method used
             * to request the VoiceFallbackUrl once
             * incoming call connects.
             * @param {string|null} input['hangupCallback'] [Optional] URL that can be requested to receive
             * notification when and how incoming call has ended.
             * @param {HttpActionEnum|null} input['hangupCallbackMethod'] [Optional] The HTTP method Ytel will use
             * when requesting the HangupCallback URL.
             * @param {string|null} input['heartbeatUrl'] [Optional] URL that can be used to monitor the phone
             * number.
             * @param {HttpActionEnum|null} input['heartbeatMethod'] [Optional] The HTTP method Ytel will use when
             * requesting the HeartbeatUrl.
             * @param {string|null} input['smsUrl'] [Optional] URL requested when an SMS is received.
             * @param {HttpActionEnum|null} input['smsMethod'] [Optional] The HTTP method Ytel will use when
             * requesting the SmsUrl.
             * @param {string|null} input['smsFallbackUrl'] [Optional] URL used if any errors occur during
             * execution of InboundXML from an SMS or at initial
             * request of the SmsUrl.
             * @param {HttpActionEnum|null} input['smsFallbackMethod'] [Optional] The HTTP method Ytel will use
             * when URL requested if the SmsUrl is not
             * available.
             *
             * @return {promise<String>}
             */
            massUpdateNumber: function (input) {
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
                var _queryBuilder = _baseUri + '/incomingphone/massupdatenumber.{ResponseType}';
                
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
            },
            /**
             * Get DID Score Number
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['phonenumber'] Specifies the multiple phone numbers for check updated
             * spamscore .
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            getDIDScoreNumber: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.phonenumber === null || input.phonenumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `phonenumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/getdidscore.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Phonenumber': input.phonenumber
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
             * Purchase a selected number of DID's from specific area codes to be used with your Ytel account.
             *
             * @param {array}  input    Array with all options for search
             * @param {NumberTypeEnum} input['numberType'] The capability the number supports.
             * @param {string} input['areaCode'] Specifies the area code for the returned list of available numbers.
             * Only available for North American numbers.
             * @param {string} input['quantity'] A positive integer that tells how many number you want to buy at a
             * time.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['leftover'] [Optional] If desired quantity is unavailable purchase what
             * is available .
             *
             * @return {promise<String>}
             */
            bulkBuyNumber: function (input) {
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
                } else if (input.quantity === null || input.quantity === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `quantity` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/incomingphone/bulkbuy.{ResponseType}';
                
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
                    'Quantity': input.quantity,
                    'Leftover': input.leftover
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
