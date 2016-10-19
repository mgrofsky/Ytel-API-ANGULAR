/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
  */

'use strict';
angular.module('Message360').factory('SMSController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Send an SMS from a message360 number
         * @param {int} fromcountrycode    Required parameter: From Country Code
         * @param {string} from    Required parameter: SMS enabled Message360 number to send this message from
         * @param {int} tocountrycode    Required parameter: To country code
         * @param {string} to    Required parameter: Number to send the SMS to
         * @param {string} body    Required parameter: Text Message To Send
         * @param {HttpMethodEnum|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once SMS sent.
         * @param {string|null} messagestatuscallback    Optional parameter: URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished.
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createSendSMS : function(fromcountrycode, from, tocountrycode, to, body, method, messagestatuscallback, responseType){
            //Assign default values
            fromcountrycode = fromcountrycode || 1;
            tocountrycode = tocountrycode || 1;
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (from == null || from == undefined){
                _deffered.reject({errorMessage: "The parameter 'from' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (to == null || to == undefined){
                _deffered.reject({errorMessage: "The parameter 'to' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (body == null || body == undefined){
                _deffered.reject({errorMessage: "The parameter 'body' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/sms/sendsms.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "fromcountrycode" : fromcountrycode,
                "from" : from,
                "tocountrycode" : tocountrycode,
                "to" : to,
                "body" : body,
                "method" : (method != null)?method:null,
                "messagestatuscallback" : messagestatuscallback
            };

            //Remove null values
            APIHelper.cleanObject(_form);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                form : _form,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result);
            
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * View Particular SMS
         * @param {string} messagesid    Required parameter: Message sid
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createViewSMS : function(messagesid, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (messagesid == null || messagesid == undefined){
                _deffered.reject({errorMessage: "The parameter 'messagesid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/sms/viewsms.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "messagesid" : messagesid
            };

            //Remove null values
            APIHelper.cleanObject(_form);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                form : _form,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result);
            
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * List All SMS
         * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         * @param {int|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
         * @param {string|null} from    Optional parameter: Messages sent from this number
         * @param {string|null} to    Optional parameter: Messages sent to this number
         * @param {string|null} datesent    Optional parameter: Only list SMS messages sent in the specified date range
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListSMS : function(page, pagesize, from, to, datesent, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/sms/listsms.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "page" : page,
                "pagesize" : pagesize,
                "from" : from,
                "to" : to,
                "datesent" : datesent
            };

            //Remove null values
            APIHelper.cleanObject(_form);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                form : _form,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result);
            
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * List All Inbound SMS
         * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         * @param {string|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
         * @param {string|null} from    Optional parameter: From Number to Inbound SMS
         * @param {string|null} to    Optional parameter: To Number to get Inbound SMS
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListInboundSMS : function(page, pagesize, from, to, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/sms/getInboundsms.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "page" : page,
                "pagesize" : pagesize,
                "from" : from,
                "to" : to
            };

            //Remove null values
            APIHelper.cleanObject(_form);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                form : _form,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result);
            
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});