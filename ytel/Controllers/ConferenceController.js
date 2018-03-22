/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('ConferenceController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        ConferenceController
    ]);

    function ConferenceController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Deaf Mute Participant
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] ID of the active conference
             * @param {string} input['participantSid'] ID of an active participant
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {bool|null} input['muted'] [Optional] Mute a participant
             * @param {bool|null} input['deaf'] [Optional] Make it so a participant cant hear
             *
             * @return {promise<String>}
             */
            deafMuteParticipant: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantSid === null || input.participantSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/deafMuteParticipant.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'conferenceSid': input.conferenceSid,
                    'ParticipantSid': input.participantSid,
                    'Muted': input.muted,
                    'Deaf': input.deaf
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
             * Retrieve information about a participant by its ParticipantSid.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier for a conference object.
             * @param {string} input['participantSid'] The unique identifier for a participant object.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewParticipant: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantSid === null || input.participantSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/viewParticipant.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid,
                    'ParticipantSid': input.participantSid
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
             * Retrieve information about a conference by its ConferenceSid.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier of each conference resource
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewConference: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/viewconference.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid
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
             * Add Participant in conference
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier for a conference object.
             * @param {string} input['participantNumber'] The phone number of the participant to be added.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {bool|null} input['muted'] [Optional] Specifies if participant should be muted.
             * @param {bool|null} input['deaf'] [Optional] Specifies if the participant should hear audio in the
             * conference.
             *
             * @return {promise<String>}
             */
            addParticipant: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantNumber === null || input.participantNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantNumber` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/addParticipant.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid,
                    'ParticipantNumber': input.participantNumber,
                    'Muted': input.muted,
                    'Deaf': input.deaf
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
             * Here you can experiment with initiating a conference call through Ytel and view the request response
             * generated when doing so.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] A valid 10-digit number (E.164 format) that will be initiating the
             * conference call.
             * @param {string} input['to'] A valid 10-digit number (E.164 format) that is to receive the conference
             * call.
             * @param {string} input['url'] URL requested once the conference connects
             * @param {string} input['responseType'] Response type format xml or json
             * @param {HttpActionEnum|null} input['method'] [Optional] Specifies the HTTP method used to request
             * the required URL once call connects.
             * @param {string|null} input['statusCallBackUrl'] [Optional] URL that can be requested to receive
             * notification when call has ended. A set of default
             * parameters will be sent here once the conference is
             * finished.
             * @param {HttpActionEnum|null} input['statusCallBackMethod'] [Optional] Specifies the HTTP
             * methodlinkclass used to request
             * StatusCallbackUrl.
             * @param {string|null} input['fallbackUrl'] [Optional] URL requested if the initial Url parameter
             * fails or encounters an error
             * @param {HttpActionEnum|null} input['fallbackMethod'] [Optional] Specifies the HTTP method used to
             * request the required FallbackUrl once call
             * connects.
             * @param {bool|null} input['record'] [Optional] Specifies if the conference should be recorded.
             * @param {string|null} input['recordCallBackUrl'] [Optional] Recording parameters will be sent here
             * upon completion.
             * @param {HttpActionEnum|null} input['recordCallBackMethod'] [Optional] Specifies the HTTP method used
             * to request the required URL once
             * conference connects.
             * @param {string|null} input['scheduleTime'] [Optional] Schedule conference in future. Schedule time
             * must be greater than current time
             * @param {int|null} input['timeout'] [Optional] The number of seconds the call stays on the line while
             * waiting for an answer. The max time limit is 999 and the default
             * limit is 60 seconds but lower times can be set.
             *
             * @return {promise<String>}
             */
            createConference: function (input) {
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
                } else if (input.url === null || input.url === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `url` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/createConference.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'Url': input.url
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'From': input.from,
                    'To': input.to,
                    'Method': (input.method !== null) ? input.method : 'POST',
                    'StatusCallBackUrl': input.statusCallBackUrl,
                    'StatusCallBackMethod':
                        (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
                    'FallbackUrl': input.fallbackUrl,
                    'FallbackMethod': (input.fallbackMethod !== null) ? input.fallbackMethod : null,
                    'Record': input.record,
                    'RecordCallBackUrl': input.recordCallBackUrl,
                    'RecordCallBackMethod':
                        (input.recordCallBackMethod !== null) ? input.recordCallBackMethod : null,
                    'ScheduleTime': input.scheduleTime,
                    'Timeout': input.timeout
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
             * Remove a participant from a conference.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier for a conference object.
             * @param {string} input['participantSid'] The unique identifier for a participant object.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            hangupParticipant: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantSid === null || input.participantSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/hangupParticipant.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'ParticipantSid': input.participantSid
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid
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
             * Play an audio file during a conference.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier for a conference object.
             * @param {string} input['participantSid'] The unique identifier for a participant object.
             * @param {AudioFormatEnum} input['audioUrl'] The URL for the audio file that is to be played during
             * the conference. Multiple audio files can be chained by
             * using a semicolon.
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            playConferenceAudio: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantSid === null || input.participantSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.audioUrl === null || input.audioUrl === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `audioUrl` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/playAudio.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid,
                    'ParticipantSid': input.participantSid,
                    'AudioUrl': (input.audioUrl !== null) ? input.audioUrl : null
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
             * Retrieve a list of participants for an in-progress conference.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] The unique identifier for a conference.
             * @param {string} input['responseType'] Response format, xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return per page.
             * @param {bool|null} input['muted'] [Optional] Specifies if participant should be muted.
             * @param {bool|null} input['deaf'] [Optional] Specifies if the participant should hear audio in the
             * conference.
             *
             * @return {promise<String>}
             */
            listParticipant: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.conferenceSid === null || input.conferenceSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/listParticipant.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'ConferenceSid': input.conferenceSid,
                    'Page': (input.page !== null) ? input.page : 1,
                    'Pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'Muted': input.muted,
                    'Deaf': input.deaf
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
             * Retrieve a list of conference objects.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['friendlyName'] [Optional] Only return conferences with the specified
             * FriendlyName
             * @param {string|null} input['dateCreated'] [Optional] Conference created date
             *
             * @return {promise<String>}
             */
            listConference: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/conferences/listconference.{ResponseType}';
                
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
                    'FriendlyName': input.friendlyName,
                    'DateCreated': input.dateCreated
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
