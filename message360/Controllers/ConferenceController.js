/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
  */

'use strict';
angular.module('Message360').factory('ConferenceController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * View Participant
         * @param {string} conferenceSid    Required parameter: unique conference sid
         * @param {string} participantSid    Required parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createViewParticipant : function(conferenceSid, participantSid, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (conferenceSid == null || conferenceSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'conferenceSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (participantSid == null || participantSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'participantSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/conferences/viewparticipant.{ResponseType}";
            
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
                "ConferenceSid" : conferenceSid,
                "ParticipantSid" : participantSid
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
         * List Participant
         * @param {string} conferenceSid    Required parameter: unique conference sid
         * @param {int|null} page    Optional parameter: page number
         * @param {int|null} pagesize    Optional parameter: Example: 
         * @param {bool|null} muted    Optional parameter: Example: 
         * @param {bool|null} deaf    Optional parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListParticipant : function(conferenceSid, page, pagesize, muted, deaf, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (conferenceSid == null || conferenceSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'conferenceSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/conferences/listparticipant.{ResponseType}";
            
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
                "ConferenceSid" : conferenceSid,
                "Page" : page,
                "Pagesize" : pagesize,
                "Muted" : muted,
                "Deaf" : deaf
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
         * Add Participant in conference 
         * @param {string} conferencesid    Required parameter: Unique Conference Sid
         * @param {string} participantnumber    Required parameter: Particiant Number
         * @param {int} tocountrycode    Required parameter: Example: 
         * @param {bool|null} muted    Optional parameter: Example: 
         * @param {bool|null} deaf    Optional parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        addParticipant : function(conferencesid, participantnumber, tocountrycode, muted, deaf, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (conferencesid == null || conferencesid == undefined){
                _deffered.reject({errorMessage: "The parameter 'conferencesid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (participantnumber == null || participantnumber == undefined){
                _deffered.reject({errorMessage: "The parameter 'participantnumber' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (tocountrycode == null || tocountrycode == undefined){
                _deffered.reject({errorMessage: "The parameter 'tocountrycode' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/conferences/addParticipant.{ResponseType}";
            
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
                "conferencesid" : conferencesid,
                "participantnumber" : participantnumber,
                "tocountrycode" : tocountrycode,
                "muted" : muted,
                "deaf" : deaf
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
         * View Conference
         * @param {string} conferencesid    Required parameter: The unique identifier of each conference resource
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createViewConference : function(conferencesid, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (conferencesid == null || conferencesid == undefined){
                _deffered.reject({errorMessage: "The parameter 'conferencesid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/conferences/viewconference.{ResponseType}";
            
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
                "conferencesid" : conferencesid
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
         * List Conference
         * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         * @param {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
         * @param {string|null} friendlyName    Optional parameter: Only return conferences with the specified FriendlyName
         * @param {InterruptedCallStatusEnum|null} status    Optional parameter: Example: 
         * @param {string|null} dateCreated    Optional parameter: Example: 
         * @param {string|null} dateUpdated    Optional parameter: Example: 
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createListConference : function(page, pageSize, friendlyName, status, dateCreated, dateUpdated, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/conferences/listconference.{ResponseType}";
            
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
                "Page" : page,
                "PageSize" : pageSize,
                "FriendlyName" : friendlyName,
                "Status" : (status != null)?status:null,
                "DateCreated" : dateCreated,
                "DateUpdated" : dateUpdated
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