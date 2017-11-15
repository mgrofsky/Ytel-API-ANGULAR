/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('CallController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        CallController
    ]);

    function CallController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * You can experiment with initiating a call through Message360 and view the request response generated
             * when doing so and get the response in json
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] This number to display on Caller ID as calling
             * @param {string} input['to'] To number
             * @param {string} input['url'] URL requested once the call connects
             * @param {string} input['responseType'] Response type format xml or json
             * @param {HttpActionEnum|null} input['method'] [Optional] Specifies the HTTP method used to request
             * the required URL once call connects.
             * @param {string|null} input['statusCallBackUrl'] [Optional] specifies the HTTP methodlinkclass used
             * to request StatusCallbackUrl.
             * @param {HttpActionEnum|null} input['statusCallBackMethod'] [Optional] Specifies the HTTP
             * methodlinkclass used to request
             * StatusCallbackUrl.
             * @param {string|null} input['fallBackUrl'] [Optional] URL requested if the initial Url parameter
             * fails or encounters an error
             * @param {HttpActionEnum|null} input['fallBackMethod'] [Optional] Specifies the HTTP method used to
             * request the required FallbackUrl once call
             * connects.
             * @param {string|null} input['heartBeatUrl'] [Optional] URL that can be requested every 60 seconds
             * during the call to notify of elapsed tim
             * @param {HttpActionEnum|null} input['heartBeatMethod'] [Optional] Specifies the HTTP method used to
             * request HeartbeatUrl.
             * @param {int|null} input['timeout'] [Optional] Time (in seconds) Message360 should wait while the
             * call is ringing before canceling the call
             * @param {string|null} input['playDtmf'] [Optional] DTMF Digits to play to the call once it connects.
             * 0-9, #, or *
             * @param {bool|null} input['hideCallerId'] [Optional] Specifies if the caller id will be hidden
             * @param {bool|null} input['record'] [Optional] Specifies if the call should be recorded
             * @param {string|null} input['recordCallBackUrl'] [Optional] Recording parameters will be sent here
             * upon completion
             * @param {HttpActionEnum|null} input['recordCallBackMethod'] [Optional] Method used to request the
             * RecordCallback URL.
             * @param {bool|null} input['transcribe'] [Optional] Specifies if the call recording should be
             * transcribed
             * @param {string|null} input['transcribeCallBackUrl'] [Optional] Transcription parameters will be sent
             * here upon completion
             * @param {IfMachineEnum|null} input['ifMachine'] [Optional] How Message360 should handle the receiving
             * numbers voicemail machine
             * @param {string|null} input['ifMachineUrl'] [Optional] URL requested when IfMachine=continue
             * @param {HttpActionEnum|null} input['ifMachineMethod'] [Optional] Method used to request the
             * IfMachineUrl.
             * @param {bool|null} input['feedback'] [Optional] Specify if survey should be enable or not
             * @param {string|null} input['surveyId'] [Optional] The unique identifier for the survey.
             *
             * @return {promise<String>}
             */
            makeCall: function (input) {
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
                var _queryBuilder = _baseUri + '/calls/makecall.{ResponseType}';
                
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
                    'Url': input.url,
                    'Method': (input.method !== null) ? input.method : null,
                    'StatusCallBackUrl': input.statusCallBackUrl,
                    'StatusCallBackMethod':
                        (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
                    'FallBackUrl': input.fallBackUrl,
                    'FallBackMethod': (input.fallBackMethod !== null) ? input.fallBackMethod : null,
                    'HeartBeatUrl': input.heartBeatUrl,
                    'HeartBeatMethod': (input.heartBeatMethod !== null) ? input.heartBeatMethod : null,
                    'Timeout': input.timeout,
                    'PlayDtmf': input.playDtmf,
                    'HideCallerId': input.hideCallerId,
                    'Record': input.record,
                    'RecordCallBackUrl': input.recordCallBackUrl,
                    'RecordCallBackMethod':
                        (input.recordCallBackMethod !== null) ? input.recordCallBackMethod : null,
                    'Transcribe': input.transcribe,
                    'TranscribeCallBackUrl': input.transcribeCallBackUrl,
                    'IfMachine': (input.ifMachine !== null) ? input.ifMachine : null,
                    'IfMachineUrl': input.ifMachineUrl,
                    'IfMachineMethod': (input.ifMachineMethod !== null) ? input.ifMachineMethod : null,
                    'Feedback': input.feedback,
                    'SurveyId': input.surveyId
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
             * Play Dtmf and send the Digit
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callSid'] The unique identifier of each call resource
             * @param {string} input['audioUrl'] URL to sound that should be played. You also can add more than one
             * audio file using semicolons e.g. http://example.com/audio1.mp3;
             * http://example.com/audio2.wav
             * @param {string} input['sayText'] Valid alphanumeric string that should be played to the In-progress
             * call.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['length'] [Optional] Time limit in seconds for audio play back
             * @param {DirectionEnum|null} input['direction'] [Optional] The leg of the call audio will be played
             * to
             * @param {bool|null} input['mix'] [Optional] If false, all other audio will be muted
             *
             * @return {promise<String>}
             */
            playAudio: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callSid === null || input.callSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.audioUrl === null || input.audioUrl === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `audioUrl` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.sayText === null || input.sayText === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `sayText` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/playaudios.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'CallSid': input.callSid,
                    'AudioUrl': input.audioUrl,
                    'SayText': input.sayText,
                    'Length': input.length,
                    'Direction': (input.direction !== null) ? input.direction : null,
                    'Mix': input.mix
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
             * Record a Call
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callSid'] The unique identifier of each call resource
             * @param {bool} input['record'] Set true to initiate recording or false to terminate recording
             * @param {string} input['responseType'] Response format, xml or json
             * @param {DirectionEnum|null} input['direction'] [Optional] The leg of the call to record
             * @param {int|null} input['timeLimit'] [Optional] Time in seconds the recording duration should not
             * exceed
             * @param {string|null} input['callBackUrl'] [Optional] URL consulted after the recording completes
             * @param {AudioFormatEnum|null} input['fileformat'] [Optional] Format of the recording file. Can be .
             * mp3 or .wav
             *
             * @return {promise<String>}
             */
            recordCall: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callSid === null || input.callSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.record === null || input.record === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `record` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/recordcalls.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'CallSid': input.callSid,
                    'Record': input.record,
                    'Direction': (input.direction !== null) ? input.direction : null,
                    'TimeLimit': input.timeLimit,
                    'CallBackUrl': input.callBackUrl,
                    'Fileformat': (input.fileformat !== null) ? input.fileformat : null
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
             * Voice Effect
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callSid'] The unique identifier for the in-progress voice call.
             * @param {string} input['responseType'] Response type format xml or json
             * @param {AudioDirectionEnum|null} input['audioDirection'] [Optional] The direction the audio effect
             * should be placed on. If IN, the effects
             * will occur on the incoming audio stream. If
             * OUT, the effects will occur on the outgoing
             * audio stream.
             * @param {double|null} input['pitchSemiTones'] [Optional] value between -14 and 14
             * @param {double|null} input['pitchOctaves'] [Optional] value between -1 and 1
             * @param {double|null} input['pitch'] [Optional] value greater than 0
             * @param {double|null} input['rate'] [Optional] value greater than 0
             * @param {double|null} input['tempo'] [Optional] value greater than 0
             *
             * @return {promise<String>}
             */
            voiceEffect: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callSid === null || input.callSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/voiceeffect.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'CallSid': input.callSid,
                    'AudioDirection': (input.audioDirection !== null) ? input.audioDirection : null,
                    'PitchSemiTones': input.pitchSemiTones,
                    'PitchOctaves': input.pitchOctaves,
                    'Pitch': input.pitch,
                    'Rate': input.rate,
                    'Tempo': input.tempo
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
             * Play Dtmf and send the Digit
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callSid'] The unique identifier of each call resource
             * @param {string} input['playDtmf'] DTMF digits to play to the call. 0-9, #, *, W, or w
             * @param {string} input['responseType'] Response type format xml or json
             * @param {DirectionEnum|null} input['playDtmfDirection'] [Optional] The leg of the call DTMF digits
             * should be sent to
             *
             * @return {promise<String>}
             */
            sendDigit: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callSid === null || input.callSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.playDtmf === null || input.playDtmf === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `playDtmf` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/senddigits.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'CallSid': input.callSid,
                    'PlayDtmf': input.playDtmf,
                    'PlayDtmfDirection': (input.playDtmfDirection !== null) ? input.playDtmfDirection : null
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
             * Interrupt the Call by Call Sid
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callSid'] Call SId
             * @param {string} input['responseType'] Response type format xml or json
             * @param {string|null} input['url'] [Optional] URL the in-progress call will be redirected to
             * @param {HttpActionEnum|null} input['method'] [Optional] The method used to request the above Url
             * parameter
             * @param {InterruptedCallStatusEnum|null} input['status'] [Optional] Status to set the in-progress
             * call to
             *
             * @return {promise<String>}
             */
            interruptedCall: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callSid === null || input.callSid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callSid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/interruptcalls.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'CallSid': input.callSid,
                    'Url': input.url,
                    'Method': (input.method !== null) ? input.method : null,
                    'Status': (input.status !== null) ? input.status : null
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
             * Group Call
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] This number to display on Caller ID as calling
             * @param {string} input['to'] Please enter multiple E164 number. You can add max 10 numbers. Add
             * numbers separated with comma. e.g : 1111111111,2222222222
             * @param {string} input['url'] URL requested once the call connects
             * @param {string} input['responseType'] Example: json
             * @param {string} input['groupConfirmKey'] Define the DTMF that the called party should send to bridge
             * the call. Allowed Values : 0-9, #, *
             * @param {AudioFormatEnum} input['groupConfirmFile'] Specify the audio file you want to play when the
             * called party picks up the call
             * @param {HttpActionEnum|null} input['method'] [Optional] Specifies the HTTP method used to request
             * the required URL once call connects.
             * @param {string|null} input['statusCallBackUrl'] [Optional] Specifies the HTTP method used to request
             * the required URL once call connects.
             * @param {HttpActionEnum|null} input['statusCallBackMethod'] [Optional] Specifies the HTTP
             * methodlinkclass used to request
             * StatusCallbackUrl.
             * @param {string|null} input['fallBackUrl'] [Optional] URL requested if the initial Url parameter
             * fails or encounters an error
             * @param {HttpActionEnum|null} input['fallBackMethod'] [Optional] Specifies the HTTP method used to
             * request the required FallbackUrl once call
             * connects.
             * @param {string|null} input['heartBeatUrl'] [Optional] URL that can be requested every 60 seconds
             * during the call to notify of elapsed tim
             * @param {HttpActionEnum|null} input['heartBeatMethod'] [Optional] Specifies the HTTP method used to
             * request HeartbeatUrl.
             * @param {int|null} input['timeout'] [Optional] Time (in seconds) Message360 should wait while the
             * call is ringing before canceling the call
             * @param {string|null} input['playDtmf'] [Optional] DTMF Digits to play to the call once it connects.
             * 0-9, #, or *
             * @param {string|null} input['hideCallerId'] [Optional] Specifies if the caller id will be hidden
             * @param {bool|null} input['record'] [Optional] Specifies if the call should be recorded
             * @param {string|null} input['recordCallBackUrl'] [Optional] Recording parameters will be sent here
             * upon completion
             * @param {HttpActionEnum|null} input['recordCallBackMethod'] [Optional] Method used to request the
             * RecordCallback URL.
             * @param {bool|null} input['transcribe'] [Optional] Specifies if the call recording should be
             * transcribed
             * @param {string|null} input['transcribeCallBackUrl'] [Optional] Transcription parameters will be sent
             * here upon completion
             *
             * @return {promise<String>}
             */
            groupCall: function (input) {
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
                } else if (input.groupConfirmKey === null || input.groupConfirmKey === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `groupConfirmKey` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.groupConfirmFile === null || input.groupConfirmFile === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `groupConfirmFile` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/groupcall.{ResponseType}';
                
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
                    'Url': input.url,
                    'GroupConfirmKey': input.groupConfirmKey,
                    'GroupConfirmFile': (input.groupConfirmFile !== null) ? input.groupConfirmFile : null,
                    'Method': (input.method !== null) ? input.method : null,
                    'StatusCallBackUrl': input.statusCallBackUrl,
                    'StatusCallBackMethod':
                        (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
                    'FallBackUrl': input.fallBackUrl,
                    'FallBackMethod': (input.fallBackMethod !== null) ? input.fallBackMethod : null,
                    'HeartBeatUrl': input.heartBeatUrl,
                    'HeartBeatMethod': (input.heartBeatMethod !== null) ? input.heartBeatMethod : null,
                    'Timeout': input.timeout,
                    'PlayDtmf': input.playDtmf,
                    'HideCallerId': input.hideCallerId,
                    'Record': input.record,
                    'RecordCallBackUrl': input.recordCallBackUrl,
                    'RecordCallBackMethod':
                        (input.recordCallBackMethod !== null) ? input.recordCallBackMethod : null,
                    'Transcribe': input.transcribe,
                    'TranscribeCallBackUrl': input.transcribeCallBackUrl
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
             * A list of calls associated with your Message360 account
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response type format xml or json
             * @param {int|null} input['page'] [Optional] Which page of the overall response will be returned. Zero
             * indexed
             * @param {int|null} input['pageSize'] [Optional] Number of individual resources listed in the response
             * per page
             * @param {string|null} input['to'] [Optional] Only list calls to this number
             * @param {string|null} input['from'] [Optional] Only list calls from this number
             * @param {string|null} input['dateCreated'] [Optional] Only list calls starting within the specified
             * date range
             *
             * @return {promise<String>}
             */
            listCalls: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/listcalls.{ResponseType}';
                
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
                    'To': input.to,
                    'From': input.from,
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
            },
            /**
             * API endpoint used to send a Ringless Voicemail
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['from'] This number to display on Caller ID as calling
             * @param {string} input['rVMCallerId'] Alternate caller ID required for RVM
             * @param {string} input['to'] To number
             * @param {string} input['voiceMailURL'] URL to an audio file
             * @param {string} input['responseType'] Response type format xml or json
             * @param {HttpActionEnum|null} input['method'] [Optional] Not currently used in this version
             * @param {string|null} input['statusCallBackUrl'] [Optional] URL to post the status of the Ringless
             * request
             * @param {HttpActionEnum|null} input['statsCallBackMethod'] [Optional] POST or GET
             *
             * @return {promise<String>}
             */
            sendRinglessVM: function (input) {
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
                } else if (input.rVMCallerId === null || input.rVMCallerId === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `rVMCallerId` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.to === null || input.to === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `to` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.voiceMailURL === null || input.voiceMailURL === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `voiceMailURL` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/makervm.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'From': input.from,
                    'RVMCallerId': input.rVMCallerId,
                    'To': input.to,
                    'VoiceMailURL': input.voiceMailURL,
                    'Method': (input.method !== null) ? input.method : 'GET',
                    'StatusCallBackUrl': input.statusCallBackUrl,
                    'StatsCallBackMethod': (input.statsCallBackMethod !== null) ? input.statsCallBackMethod : null
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
             * View Call Response
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['callsid'] Call Sid id for particular Call
             * @param {string} input['responseType'] Response type format xml or json
             *
             * @return {promise<String>}
             */
            viewCall: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.callsid === null || input.callsid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `callsid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/calls/viewcalls.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'callsid': input.callsid
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
