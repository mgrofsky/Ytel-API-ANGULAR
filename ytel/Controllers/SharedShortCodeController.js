/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('SharedShortCodeController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        SharedShortCodeController
    ]);

    function SharedShortCodeController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * View a Shared ShortCode Template
             *
             * @param {array}  input    Array with all options for search
             * @param {uuid|string} input['templateId'] The unique identifier for a template object
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewTemplate: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.templateId === null || input.templateId === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `templateId` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/template/view.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'TemplateId': input.templateId
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
             * View a ShortCode Message
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['messagesid'] Message sid
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewSharedShortcodes: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.messagesid === null || input.messagesid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `messagesid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/viewsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'messagesid': input.messagesid
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
             * List ShortCode Messages
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['shortcode'] [Optional] Only list messages sent from this Short Code
             * @param {string|null} input['to'] [Optional] Only list messages sent to this number
             * @param {string|null} input['datesent'] [Optional] Only list SMS messages sent in the specified date
             * range
             *
             * @return {promise<String>}
             */
            listOutboundSharedShortcodes: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/listsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'Shortcode': input.shortcode,
                    'to': input.to,
                    'datesent': input.datesent
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
             * List All Inbound ShortCode
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['from'] [Optional] From Number to Inbound ShortCode
             * @param {string|null} input['shortcode'] [Optional] Only list messages sent to this Short Code
             * @param {string|null} input['datecreated'] [Optional] Only list messages sent with the specified
             * date
             *
             * @return {promise<String>}
             */
            listInboundSharedShortcodes: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/getinboundsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'Datecreated': input.datecreated
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'from': input.from,
                    'Shortcode': input.shortcode
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
             * Send an SMS from a Ytel ShortCode
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['shortcode'] The Short Code number that is the sender of this message
             * @param {string} input['to'] A valid 10-digit number that should receive the message
             * @param {uuid|string} input['templateid'] The unique identifier for the template used for the
             * message
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string} input['data'] format of your data, example: {companyname}:test,{otpcode}:1234
             * @param {HttpActionEnum|null} input['method'] [Optional] Specifies the HTTP method used to request
             * the required URL once the Short Code message is sent.
             * @param {string|null} input['messageStatusCallback'] [Optional] URL that can be requested to receive
             * notification when Short Code message was sent.
             *
             * @return {promise<String>}
             */
            sendSharedShortcode: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.shortcode === null || input.shortcode === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `shortcode` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.to === null || input.to === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `to` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.templateid === null || input.templateid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `templateid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.data === null || input.data === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `data` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/sendsms.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'shortcode': input.shortcode,
                    'to': input.to,
                    'templateid': input.templateid,
                    'data': input.data,
                    'Method': (input.method !== null) ? input.method : 'GET',
                    'MessageStatusCallback': input.messageStatusCallback
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
             * List Shortcode Templates by Type
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['type'] [Optional] The type (category) of template Valid values:
             * marketing, authorization
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return per page.
             * @param {string|null} input['shortcode'] [Optional] Only list templates of type
             *
             * @return {promise<String>}
             */
            listTemplates: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/template/lists.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'type': (input.type !== null) ? input.type : 'authorization',
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'Shortcode': input.shortcode
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
             * View a set of properties for a single keyword.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['keywordid'] The unique identifier of each keyword
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewKeyword: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.keywordid === null || input.keywordid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `keywordid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/keyword/view.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Keywordid': input.keywordid
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
             * Retrieve a list of keywords associated with your Ytel account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['keyword'] [Optional] Only list keywords of keyword
             * @param {int|null} input['shortcode'] [Optional] Only list keywords of shortcode
             *
             * @return {promise<String>}
             */
            listKeyword: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/keyword/lists.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'Keyword': input.keyword,
                    'Shortcode': input.shortcode
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
             * The response returned here contains all resource properties associated with the given Shortcode.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['shortcode'] List of valid Shortcode to your Ytel account
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewAssignement: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.shortcode === null || input.shortcode === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `shortcode` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/viewshortcode.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Shortcode': input.shortcode
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
             * Retrieve a list of shortcode assignment associated with your Ytel account.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['shortcode'] [Optional] Only list keywords of shortcode
             *
             * @return {promise<String>}
             */
            listAssignment: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/listshortcode.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'Shortcode': input.shortcode
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
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
             * @todo Add general description for this endpoint
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['shortcode'] List of valid shortcode to your Ytel account
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['friendlyName'] [Optional] User generated name of the shortcode
             * @param {string|null} input['callbackUrl'] [Optional] URL that can be requested to receive
             * notification when call has ended. A set of default
             * parameters will be sent here once the call is finished.
             * @param {HttpActionEnum|null} input['callbackMethod'] [Optional] Specifies the HTTP method used to
             * request the required StatusCallBackUrl once
             * call connects.
             * @param {string|null} input['fallbackUrl'] [Optional] URL used if any errors occur during execution
             * of InboundXML or at initial request of the required Url
             * provided with the POST.
             * @param {HttpActionEnum|null} input['fallbackUrlMethod'] [Optional] Specifies the HTTP method used to
             * request the required FallbackUrl once call
             * connects.
             *
             * @return {promise<String>}
             */
            updateAssignment: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.shortcode === null || input.shortcode === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `shortcode` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/shortcode/updateshortcode.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'Shortcode': input.shortcode,
                    'FriendlyName': input.friendlyName,
                    'CallbackUrl': input.callbackUrl,
                    'CallbackMethod': (input.callbackMethod !== null) ? input.callbackMethod : null,
                    'FallbackUrl': input.fallbackUrl,
                    'FallbackUrlMethod': (input.fallbackUrlMethod !== null) ? input.fallbackUrlMethod : null
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
