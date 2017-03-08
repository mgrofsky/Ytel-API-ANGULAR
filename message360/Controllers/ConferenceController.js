/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('ConferenceController', ['$q', 'Configuration', 'Servers', 'HttpClient', 'APIHelper',
        function($q, Configuration, Servers, HttpClient, APIHelper) {
            return {
                /**
                 * Deaf Mute Participant
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} conferenceSid    Required parameter: Example: 
                 *     {string} participantSid    Required parameter: Example: 
                 *     {bool|null} muted    Optional parameter: Example: 
                 *     {bool|null} deaf    Optional parameter: Example: 
                 *     {string|null} responseType    Optional parameter: Response Type either json or xml
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createDeafMuteParticipant: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.conferenceSid == null || input.conferenceSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'conferenceSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.participantSid == null || input.participantSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'participantSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/deafMuteParticipant.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "conferenceSid": input.conferenceSid,
                        "ParticipantSid": input.participantSid,
                        "Muted": input.muted,
                        "Deaf": input.deaf
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
                 * List Conference
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
                 *     {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
                 *     {string|null} friendlyName    Optional parameter: Only return conferences with the specified FriendlyName
                 *     {InterruptedCallStatus|null} status    Optional parameter: Example: 
                 *     {string|null} dateCreated    Optional parameter: Example: 
                 *     {string|null} dateUpdated    Optional parameter: Example: 
                 *     {string|null} responseType    Optional parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createListConference: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/listconference.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "Page": input.page,
                        "PageSize": input.pageSize,
                        "FriendlyName": input.friendlyName,
                        "Status": (input.status != null) ? input.status : null,
                        "DateCreated": input.dateCreated,
                        "DateUpdated": input.dateUpdated
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
                 * View Conference
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} conferencesid    Required parameter: The unique identifier of each conference resource
                 *     {string|null} responseType    Optional parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createViewConference: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.conferencesid == null || input.conferencesid == undefined) {
                        _deffered.reject({errorMessage: "The property 'conferencesid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/viewconference.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "conferencesid": input.conferencesid
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
                 * Add Participant in conference 
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} conferencesid    Required parameter: Unique Conference Sid
                 *     {string} participantnumber    Required parameter: Particiant Number
                 *     {int} tocountrycode    Required parameter: Example: 
                 *     {bool|null} muted    Optional parameter: Example: 
                 *     {bool|null} deaf    Optional parameter: Example: 
                 *     {string|null} responseType    Optional parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                addParticipant: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.conferencesid == null || input.conferencesid == undefined) {
                        _deffered.reject({errorMessage: "The property 'conferencesid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.participantnumber == null || input.participantnumber == undefined) {
                        _deffered.reject({errorMessage: "The property 'participantnumber' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.tocountrycode == null || input.tocountrycode == undefined) {
                        _deffered.reject({errorMessage: "The property 'tocountrycode' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/addParticipant.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "conferencesid": input.conferencesid,
                        "participantnumber": input.participantnumber,
                        "tocountrycode": input.tocountrycode,
                        "muted": input.muted,
                        "deaf": input.deaf
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
                 * List Participant
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} conferenceSid    Required parameter: unique conference sid
                 *     {int|null} page    Optional parameter: page number
                 *     {int|null} pagesize    Optional parameter: Example: 
                 *     {bool|null} muted    Optional parameter: Example: 
                 *     {bool|null} deaf    Optional parameter: Example: 
                 *     {string|null} responseType    Optional parameter: Response format, xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createListParticipant: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.conferenceSid == null || input.conferenceSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'conferenceSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/listparticipant.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "ConferenceSid": input.conferenceSid,
                        "Page": input.page,
                        "Pagesize": input.pagesize,
                        "Muted": input.muted,
                        "Deaf": input.deaf
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
                 * View Participant
                 * All parameters to the endpoint are supplied through the object with their names
                 * being the key and their desired values being the value. A list of parameters that can be used are:
                 * 
                 *     {string} conferenceSid    Required parameter: unique conference sid
                 *     {string} participantSid    Required parameter: Example: 
                 *     {string|null} responseType    Optional parameter: Response type format xml or json
                 * 
                 * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
                 *
                 * @return {promise<string>}
                 */
                createViewParticipant: function (input) {
                    // Assign default values
                    input = input || {};

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    // validating required parameters
                    var _missingArgs = false;
                    if (input.conferenceSid == null || input.conferenceSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'conferenceSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    } else if (input.participantSid == null || input.participantSid == undefined) {
                        _deffered.reject({errorMessage: "The property 'participantSid' in the input object cannot be null.", errorCode: -1});
                        _missingArgs = true;
                    }

                    if (_missingArgs)
                        return _deffered.promise

                    //prepare query string for API call
                    var _baseUri = Configuration.getBaseUri()
                    var _queryBuilder = _baseUri + "/conferences/viewparticipant.{ResponseType}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "ResponseType": (input.responseType != null) ? input.responseType : "json"
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare form data
                    var _form = {
                        "ConferenceSid": input.conferenceSid,
                        "ParticipantSid": input.participantSid
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
