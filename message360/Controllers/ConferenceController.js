/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
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
             * View Participant
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] unique conference sid
             * @param {string} input['participantSid'] TODO: type description here
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
                var _queryBuilder = _baseUri + '/conferences/viewparticipant.{ResponseType}';
                
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
             * Add Participant in conference
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferencesid'] Unique Conference Sid
             * @param {string} input['participantnumber'] Particiant Number
             * @param {string} input['responseType'] Response type format xml or json
             * @param {bool|null} input['muted'] [Optional] add muted
             * @param {bool|null} input['deaf'] [Optional] add without volume
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
                if (input.conferencesid === null || input.conferencesid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferencesid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.participantnumber === null || input.participantnumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `participantnumber` in the input object cannot be null.',
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
                    'conferencesid': input.conferencesid,
                    'participantnumber': input.participantnumber,
                    'muted': input.muted,
                    'deaf': input.deaf
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
             * View Conference
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferencesid'] The unique identifier of each conference resource
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
                if (input.conferencesid === null || input.conferencesid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `conferencesid` in the input object cannot be null.',
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
                    'conferencesid': input.conferencesid
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
             * Here you can experiment with initiating a conference call through message360 and view the request
             * response generated when doing so.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] This number to display on Caller ID as calling
             * @param {string} input['to'] To number
             * @param {string} input['url'] URL requested once the call connects
             * @param {HttpActionEnum} input['method'] Specifies the HTTP method used to request the required URL
             * once call connects.
             * @param {string} input['recordCallbackUrl'] Recording parameters will be sent here upon completion.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['statusCallBackUrl'] [Optional] URL that can be requested to receive
             * notification when call has ended. A set of default
             * parameters will be sent here once the conference is
             * finished.
             * @param {HttpActionEnum|null} input['statusCallBackMethod'] [Optional] Specifies the HTTP
             * methodlinkclass used to request
             * StatusCallbackUrl.
             * @param {string|null} input['fallBackUrl'] [Optional] URL requested if the initial Url parameter
             * fails or encounters an error
             * @param {HttpActionEnum|null} input['fallBackMethod'] [Optional] Specifies the HTTP method used to
             * request the required FallbackUrl once call
             * connects.
             * @param {bool|null} input['record'] [Optional] Specifies if the conference should be recorded.
             * @param {HttpActionEnum|null} input['recordCallbackMethod'] [Optional] Specifies the HTTP method used
             * to request the required URL once
             * conference connects.
             * @param {string|null} input['schdeuleTime'] [Optional] Schedule conference in future. Schedule time
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
                } else if (input.recordCallbackUrl === null || input.recordCallbackUrl === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `recordCallbackUrl` in the input object cannot be null.',
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
                    'Method': input.method,
                    'RecordCallbackUrl': input.recordCallbackUrl,
                    'StatusCallBackUrl': input.statusCallBackUrl,
                    'StatusCallBackMethod':
                        (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
                    'FallBackUrl': input.fallBackUrl,
                    'FallBackMethod': (input.fallBackMethod !== null) ? input.fallBackMethod : null,
                    'Record': input.record,
                    'RecordCallbackMethod':
                        (input.recordCallbackMethod !== null) ? input.recordCallbackMethod : null,
                    'SchdeuleTime': input.schdeuleTime,
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
                var _queryBuilder = _baseUri + '/conferences/hangupparticipant.{ResponseType}';
                
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
                var _queryBuilder = _baseUri + '/conferences/playaudio.{ResponseType}';
                
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
             * List Participant
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['conferenceSid'] unique conference sid
             * @param {string} input['responseType'] Response format, xml or json
             * @param {int|null} input['page'] [Optional] page number
             * @param {int|null} input['pagesize'] [Optional] Amount of records to return per page
             * @param {bool|null} input['muted'] [Optional] Participants that are muted
             * @param {bool|null} input['deaf'] [Optional] Participants cant hear
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
                var _queryBuilder = _baseUri + '/conferences/listparticipant.{ResponseType}';
                
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
             * List Conference
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] Which page of the overall response will be returned. Zero
             * indexed
             * @param {int|null} input['pageSize'] [Optional] Number of individual resources listed in the response
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
                    'Page': (input.page !== null) ? input.page : 1,
                    'PageSize': (input.pageSize !== null) ? input.pageSize : 10,
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
