/**
  *Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
  */

'use strict';
angular.module('Message360').factory('CallController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * View Call Response
         * @param {string} callsid    Required parameter: Call Sid id for particular Call
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createViewCall : function(callsid, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (callsid == null || callsid == undefined){
                _deffered.reject({errorMessage: "The parameter 'callsid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/viewcalls.{ResponseType}";
            
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
                "callsid" : callsid
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
         * You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json
         * @param {string} fromCountryCode    Required parameter: from country code
         * @param {string} from    Required parameter: This number to display on Caller ID as calling
         * @param {string} toCountryCode    Required parameter: To cuntry code number
         * @param {string} to    Required parameter: To number
         * @param {string} url    Required parameter: URL requested once the call connects
         * @param {HttpMethod|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once call connects.
         * @param {string|null} statusCallBackUrl    Optional parameter: specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
         * @param {HttpMethod|null} statusCallBackMethod    Optional parameter: Specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
         * @param {string|null} fallBackUrl    Optional parameter: URL requested if the initial Url parameter fails or encounters an error
         * @param {HttpMethod|null} fallBackMethod    Optional parameter: Specifies the HTTP method used to request the required FallbackUrl once call connects.
         * @param {string|null} heartBeatUrl    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed tim
         * @param {bool|null} heartBeatMethod    Optional parameter: Specifies the HTTP method used to request HeartbeatUrl.
         * @param {int|null} timeout    Optional parameter: Time (in seconds) Message360 should wait while the call is ringing before canceling the call
         * @param {string|null} playDtmf    Optional parameter: DTMF Digits to play to the call once it connects. 0-9, #, or *
         * @param {bool|null} hideCallerId    Optional parameter: Specifies if the caller id will be hidden
         * @param {bool|null} record    Optional parameter: Specifies if the call should be recorded
         * @param {string|null} recordCallBackUrl    Optional parameter: Recording parameters will be sent here upon completion
         * @param {HttpMethod|null} recordCallBackMethod    Optional parameter: Method used to request the RecordCallback URL.
         * @param {bool|null} transcribe    Optional parameter: Specifies if the call recording should be transcribed
         * @param {string|null} transcribeCallBackUrl    Optional parameter: Transcription parameters will be sent here upon completion
         * @param {IfMachine|null} ifMachine    Optional parameter: How Message360 should handle the receiving numbers voicemail machine
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createMakeCall : function(fromCountryCode, from, toCountryCode, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (fromCountryCode == null || fromCountryCode == undefined){
                _deffered.reject({errorMessage: "The parameter 'fromCountryCode' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (from == null || from == undefined){
                _deffered.reject({errorMessage: "The parameter 'from' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (toCountryCode == null || toCountryCode == undefined){
                _deffered.reject({errorMessage: "The parameter 'toCountryCode' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (to == null || to == undefined){
                _deffered.reject({errorMessage: "The parameter 'to' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (url == null || url == undefined){
                _deffered.reject({errorMessage: "The parameter 'url' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/makecall.{ResponseType}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "ResponseType" : (null != responseType)? responseType: "json"
            });

            //Process query parameters
            _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                "Method" : (method != null)?method:null
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "user-agent" : "message360-api"
            };

            //prepare form data
            var _form = {
                "FromCountryCode" : fromCountryCode,
                "From" : from,
                "ToCountryCode" : toCountryCode,
                "To" : to,
                "Url" : url,
                "StatusCallBackUrl" : statusCallBackUrl,
                "StatusCallBackMethod" : (statusCallBackMethod != null)?statusCallBackMethod:null,
                "FallBackUrl" : fallBackUrl,
                "FallBackMethod" : (fallBackMethod != null)?fallBackMethod:null,
                "HeartBeatUrl" : heartBeatUrl,
                "HeartBeatMethod" : heartBeatMethod,
                "Timeout" : timeout,
                "PlayDtmf" : playDtmf,
                "HideCallerId" : hideCallerId,
                "Record" : record,
                "RecordCallBackUrl" : recordCallBackUrl,
                "RecordCallBackMethod" : (recordCallBackMethod != null)?recordCallBackMethod:null,
                "Transcribe" : transcribe,
                "TranscribeCallBackUrl" : transcribeCallBackUrl,
                "IfMachine" : (ifMachine != null)?ifMachine:null
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
         * Play Dtmf and send the Digit
         * @param {int} length    Required parameter: Time limit in seconds for audio play back
         * @param {Direction} direction    Required parameter: The leg of the call audio will be played to
         * @param {bool} loop    Required parameter: Repeat audio playback indefinitely
         * @param {bool} mix    Required parameter: If false, all other audio will be muted
         * @param {string|null} callSid    Optional parameter: The unique identifier of each call resource
         * @param {string|null} audioUrl    Optional parameter: URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createPlayAudio : function(length, direction, loop, mix, callSid, audioUrl, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (length == null || length == undefined){
                _deffered.reject({errorMessage: "The parameter 'length' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (direction == null || direction == undefined){
                _deffered.reject({errorMessage: "The parameter 'direction' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (loop == null || loop == undefined){
                _deffered.reject({errorMessage: "The parameter 'loop' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (mix == null || mix == undefined){
                _deffered.reject({errorMessage: "The parameter 'mix' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/playaudios.{ResponseType}";
            
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
                "Length" : length,
                "Direction" : (direction != null)?direction:null,
                "Loop" : loop,
                "Mix" : mix,
                "CallSid" : callSid,
                "AudioUrl" : audioUrl
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
         * Record a Call
         * @param {string} callSid    Required parameter: The unique identifier of each call resource
         * @param {bool} record    Required parameter: Set true to initiate recording or false to terminate recording
         * @param {Direction|null} direction    Optional parameter: The leg of the call to record
         * @param {int|null} timeLimit    Optional parameter: Time in seconds the recording duration should not exceed
         * @param {string|null} callBackUrl    Optional parameter: URL consulted after the recording completes
         * @param {AudioFormat|null} fileformat    Optional parameter: Format of the recording file. Can be .mp3 or .wav
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createRecordCall : function(callSid, record, direction, timeLimit, callBackUrl, fileformat, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (callSid == null || callSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (record == null || record == undefined){
                _deffered.reject({errorMessage: "The parameter 'record' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/recordcalls.{ResponseType}";
            
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
                "CallSid" : callSid,
                "Record" : record,
                "Direction" : (direction != null)?direction:null,
                "TimeLimit" : timeLimit,
                "CallBackUrl" : callBackUrl,
                "Fileformat" : (fileformat != null)?fileformat:null
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
         * Voice Effect
         * @param {string} callSid    Required parameter: Example: 
         * @param {AudioDirection|null} audioDirection    Optional parameter: Example: 
         * @param {double|null} pitchSemiTones    Optional parameter: value between -14 and 14
         * @param {double|null} pitchOctaves    Optional parameter: value between -1 and 1
         * @param {double|null} pitch    Optional parameter: value greater than 0
         * @param {double|null} rate    Optional parameter: value greater than 0
         * @param {double|null} tempo    Optional parameter: value greater than 0
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createVoiceEffect : function(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (callSid == null || callSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/voiceeffect.{ResponseType}";
            
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
                "CallSid" : callSid,
                "AudioDirection" : (audioDirection != null)?audioDirection:null,
                "PitchSemiTones" : pitchSemiTones,
                "PitchOctaves" : pitchOctaves,
                "Pitch" : pitch,
                "Rate" : rate,
                "Tempo" : tempo
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
         * Play Dtmf and send the Digit
         * @param {string} callSid    Required parameter: The unique identifier of each call resource
         * @param {string} playDtmf    Required parameter: DTMF digits to play to the call. 0-9, #, *, W, or w
         * @param {Direction|null} playDtmfDirection    Optional parameter: The leg of the call DTMF digits should be sent to
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createSendDigit : function(callSid, playDtmf, playDtmfDirection, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (callSid == null || callSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            } else if (playDtmf == null || playDtmf == undefined){
                _deffered.reject({errorMessage: "The parameter 'playDtmf' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/senddigits.{ResponseType}";
            
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
                "CallSid" : callSid,
                "PlayDtmf" : playDtmf,
                "PlayDtmfDirection" : (playDtmfDirection != null)?playDtmfDirection:null
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
         * Interrupt the Call by Call Sid
         * @param {string} callSid    Required parameter: Call SId
         * @param {string|null} url    Optional parameter: URL the in-progress call will be redirected to
         * @param {HttpMethod|null} method    Optional parameter: The method used to request the above Url parameter
         * @param {InterruptedCallStatus|null} status    Optional parameter: Status to set the in-progress call to
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<string>}
         */
        createInterruptedCall : function(callSid, url, method, status, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            
            //validating required parameters
            var _missingArgs = false;
            if (callSid == null || callSid == undefined){
                _deffered.reject({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode: -1});
                _missingArgs = true;
            }

            if (_missingArgs)
                return _deffered.promise

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/interruptcalls.{ResponseType}";
            
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
                "CallSid" : callSid,
                "Url" : url,
                "Method" : (method != null)?method:null,
                "Status" : (status != null)?status:null
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
         * A list of calls associated with your Message360 account
         * @param {string|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
         * @param {string|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
         * @param {string|null} to    Optional parameter: Only list calls to this number
         * @param {string|null} from    Optional parameter: Only list calls from this number
         * @param {string|null} dateCreated    Optional parameter: Only list calls starting within the specified date range
         * @param {string|null} responseType    Optional parameter: Response format, xml or json
         *
         * @return {promise<void>}
         */
        createListCalls : function(page, pageSize, to, from, dateCreated, responseType){
            //Assign default values
            responseType = responseType || "json";

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/calls/listcalls.{ResponseType}";
            
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
                "To" : to,
                "From" : from,
                "DateCreated" : dateCreated
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