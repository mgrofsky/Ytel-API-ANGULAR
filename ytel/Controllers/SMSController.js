/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('SMSController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        SMSController
    ]);

    function SMSController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Send an SMS from a Ytel number
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] The 10-digit SMS-enabled Ytel number (E.164 format) in which the
             * message is sent.
             * @param {string} input['to'] The 10-digit phone number (E.164 format) that will receive the message.
             * @param {string} input['body'] The body message that is to be sent in the text.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {HttpActionEnum|null} input['method'] [Optional] Specifies the HTTP method used to request
             * the required URL once SMS sent.
             * @param {string|null} input['messageStatusCallback'] [Optional] URL that can be requested to receive
             * notification when SMS has Sent. A set of default
             * parameters will be sent here once the SMS is
             * finished.
             * @param {bool|null} input['smartsms'] [Optional] Check's 'to' number can receive sms or not using
             * Carrier API, if wireless = true then text sms is sent, else
             * wireless = false then call is recieved to end user with audible
             * message.
             * @param {bool|null} input['deliveryStatus'] [Optional] Delivery reports are a method to tell your
             * system if the message has arrived on the destination
             * phone.
             *
             * @return {promise<String>}
             */
            sendSMS: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.from === null || input.from === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `from` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.to === null || input.to === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `to` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.body === null || input.body === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `body` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/sms/sendsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'From': input.from,
                    'To': input.to,
                    'Body': input.body,
                    'Method': (input.method !== null) ? input.method : null,
                    'MessageStatusCallback': input.messageStatusCallback,
                    'Smartsms': (input.smartsms !== null) ? input.smartsms : false,
                    'DeliveryStatus': (input.deliveryStatus !== null) ? input.deliveryStatus : false
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
             * Retrieve a single SMS message object by its SmsSid.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['messageSid'] The unique identifier for a sms message.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewSMS: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.messageSid === null || input.messageSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `messageSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/sms/viewsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'MessageSid': input.messageSid
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
             * Retrieve a list of Outbound SMS message objects.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pageSize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['from'] [Optional] Filter SMS message objects from this valid 10-digit
             * phone number (E.164 format).
             * @param {string|null} input['to'] [Optional] Filter SMS message objects to this valid 10-digit phone
             * number (E.164 format).
             * @param {string|null} input['dateSent'] [Optional] Only list SMS messages sent in the specified date
             * range
             *
             * @return {promise<String>}
             */
            listSMS: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/sms/listsms.{ResponseType}';
                
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
                    'From': input.from,
                    'To': input.to,
                    'DateSent': input.dateSent
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
             * Retrieve a list of Inbound SMS message objects.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pageSize'] [Optional] The count of objects to return per page.
             * @param {string|null} input['from'] [Optional] Filter SMS message objects from this valid 10-digit
             * phone number (E.164 format).
             * @param {string|null} input['to'] [Optional] Filter SMS message objects to this valid 10-digit phone
             * number (E.164 format).
             * @param {string|null} input['dateSent'] [Optional] Filter sms message objects by this date.
             *
             * @return {promise<String>}
             */
            listInboundSMS: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/sms/getinboundsms.{ResponseType}';
                
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
                    'From': input.from,
                    'To': input.to,
                    'DateSent': input.dateSent
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
             * Retrieve a single SMS message object with details by its SmsSid.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['messageSid'] The unique identifier for a sms message.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewDetailSMS: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.messageSid === null || input.messageSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `messageSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/sms/viewdetailsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'MessageSid': input.messageSid
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
