/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('SMSController', ['$q', 'Configuration', 'Servers', 'HttpClient', 'APIHelper',
        function($q, Configuration, Servers, HttpClient, APIHelper) {
            return {
                /**
                 * List All SMS
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} responseType    Required parameter: Response type format xml or json
                 *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
                 *     {int|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
                 *     {string|null} from    Optional parameter: Messages sent from this number
                 *     {string|null} to    Optional parameter: Messages sent to this number
                 *     {string|null} datesent    Optional parameter: Only list SMS messages sent in the specified date range
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createListSMS: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/sms/listsms.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        'ResponseType': input.responseType
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        'page': input.page,
                        'pagesize': input.pagesize,
                        'from': input.from,
                        'to': input.to,
                        'datesent': input.datesent
                    };

                    // Remove null values
                    APIHelper.cleanObject(_form);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        form: _form,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * List All Inbound SMS
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} responseType    Required parameter: Response type format xml or json
                 *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
                 *     {string|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
                 *     {string|null} from    Optional parameter: From Number to Inbound SMS
                 *     {string|null} to    Optional parameter: To Number to get Inbound SMS
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createListInboundSMS: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/sms/getInboundsms.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        'ResponseType': input.responseType
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        'page': input.page,
                        'pagesize': input.pagesize,
                        'from': input.from,
                        'to': input.to
                    };

                    // Remove null values
                    APIHelper.cleanObject(_form);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        form: _form,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Send an SMS from a message360 number
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {int} fromcountrycode    Required parameter: From Country Code
                 *     {string} from    Required parameter: SMS enabled Message360 number to send this message from
                 *     {int} tocountrycode    Required parameter: To country code
                 *     {string} to    Required parameter: Number to send the SMS to
                 *     {string} body    Required parameter: Text Message To Send
                 *     {string} responseType    Required parameter: Response type format xml or json
                 *     {HttpActionEnum|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once SMS sent.
                 *     {string|null} messagestatuscallback    Optional parameter: URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished.
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createSendSMS: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.from == null || input.from == undefined) {
                        _deffered.reject({errorMessage: "The property `from` in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.to == null || input.to == undefined) {
                        _deffered.reject({errorMessage: "The property `to` in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.body == null || input.body == undefined) {
                        _deffered.reject({errorMessage: "The property `body` in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/sms/sendsms.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        'ResponseType': input.responseType
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        'fromcountrycode': input.fromcountrycode,
                        'from': input.from,
                        'tocountrycode': input.tocountrycode,
                        'to': input.to,
                        'body': input.body,
                        'method': (input.method !== null) ? input.method : null,
                        'messagestatuscallback': input.messagestatuscallback
                    };

                    // Remove null values
                    APIHelper.cleanObject(_form);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        form: _form,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * View a Particular SMS
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} messagesid    Required parameter: Message sid
                 *     {string} responseType    Required parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createViewSMS: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.messagesid == null || input.messagesid == undefined) {
                        _deffered.reject({errorMessage: "The property `messagesid` in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/sms/viewsms.{ResponseType}";
                    
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
                        method: "POST",
                        queryUrl: _queryUrl,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        form: _form,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                    });
                    
                    return _deffered.promise;
                }
            }
        }
    ]);

}(angular));
