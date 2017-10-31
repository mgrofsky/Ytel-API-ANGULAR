# Getting started

message360 API version 3

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
If any of your models have `Date` or `Datetime` type fields or your endpoints have `Date`/`Datetime` type response, you will need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `Message360` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Message360-Angular&projectName=Message360)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Message360-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Message360-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/Message360/Module.js"></script>
    <script src="scripts/Message360/Configuration.js"></script>
    <script src="scripts/Message360/ModelFactory.js"></script>
    <script src="scripts/Message360/ObjectMapper.js"></script>
    <script src="scripts/Message360/APIHelper.js"></script>
    <script src="scripts/Message360/Http/Client/HttpContext.js"></script>
    <script src="scripts/Message360/Http/Client/RequestClient.js"></script>
    <script src="scripts/Message360/Http/Request/HttpRequest.js"></script>
    <script src="scripts/Message360/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/Message360/Controllers/BaseController.js"></script>
    <script src="scripts/Message360/Controllers/SharedShortCodeController.js"></script>
    <script src="scripts/Message360/Controllers/ConferenceController.js"></script>
    <script src="scripts/Message360/Controllers/TranscriptionController.js"></script>
    <script src="scripts/Message360/Controllers/PhoneNumberController.js"></script>
    <script src="scripts/Message360/Controllers/UsageController.js"></script>
    <script src="scripts/Message360/Controllers/WebRTCController.js"></script>
    <script src="scripts/Message360/Controllers/RecordingController.js"></script>
    <script src="scripts/Message360/Controllers/EmailController.js"></script>
    <script src="scripts/Message360/Controllers/SMSController.js"></script>
    <script src="scripts/Message360/Controllers/CallController.js"></script>
    <script src="scripts/Message360/Controllers/CarrierController.js"></script>
    <script src="scripts/Message360/Controllers/AddressController.js"></script>
    <script src="scripts/Message360/Controllers/SubAccountController.js"></script>
    <script src="scripts/Message360/Controllers/AccountController.js"></script>
    <script src="scripts/Message360/Controllers/ShortCodeController.js"></script>


    <!-- Models -->
    <script src="scripts/Message360/Models/BaseModel.js"></script>
    <script src="scripts/Message360/Models/MessageModel.js"></script>
    <script src="scripts/Message360/Models/DirectionEnum.js"></script>
    <script src="scripts/Message360/Models/NumberTypeEnum.js"></script>
    <script src="scripts/Message360/Models/StatusEnum.js"></script>
    <script src="scripts/Message360/Models/SendEmailAsEnum.js"></script>
    <script src="scripts/Message360/Models/ActivateStatusEnum.js"></script>
    <script src="scripts/Message360/Models/MergeNumberStatusEnum.js"></script>
    <script src="scripts/Message360/Models/AudioDirectionEnum.js"></script>
    <script src="scripts/Message360/Models/ProductCodeEnum.js"></script>
    <script src="scripts/Message360/Models/HttpActionEnum.js"></script>
    <script src="scripts/Message360/Models/IfMachineEnum.js"></script>
    <script src="scripts/Message360/Models/TemplateDataModel.js"></script>
    <script src="scripts/Message360/Models/InterruptedCallStatusEnum.js"></script>
    <script src="scripts/Message360/Models/AudioFormatEnum.js"></script>
    <script src="scripts/Message360/Models/ErrorsModel.js"></script>
    <script src="scripts/Message360/Models/ErrorModel.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['Message360']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [Message360]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



```JavaScript
var app = angular.module('myApp', [Message360]);
app.factory('config', function($scope, Configuration) 
{
    return {
        setConfigVars: function() {
            // Configuration parameters and credentials
            Configuration.basicAuthUserName = 'basicAuthUserName'; // The username to use with basic authentication
            Configuration.basicAuthPassword = 'basicAuthPassword'; // The password to use with basic authentication
            
        }
    };
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [SharedShortCodeController](#shared_short_code_controller)
* [ConferenceController](#conference_controller)
* [TranscriptionController](#transcription_controller)
* [PhoneNumberController](#phone_number_controller)
* [UsageController](#usage_controller)
* [WebRTCController](#web_rtc_controller)
* [RecordingController](#recording_controller)
* [EmailController](#email_controller)
* [SMSController](#sms_controller)
* [CallController](#call_controller)
* [CarrierController](#carrier_controller)
* [AddressController](#address_controller)
* [SubAccountController](#sub_account_controller)
* [AccountController](#account_controller)
* [ShortCodeController](#short_code_controller)

## <a name="shared_short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SharedShortCodeController") SharedShortCodeController

### Get singleton instance

The singleton instance of the ``` SharedShortCodeController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SharedShortCodeController){
	});
```

### <a name="view_template"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.viewTemplate") viewTemplate

> View a Shared ShortCode Template


```javascript
function viewTemplate(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateid |  ``` Required ```  | The unique identifier for a template object |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['templateid'] = uniqid();
        input['responseType'] = 'ResponseType';


		var result = SharedShortCodeController.viewTemplate(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_shared_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.viewSharedShortcodes") viewSharedShortcodes

> View a ShortCode Message


```javascript
function viewSharedShortcodes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['messagesid'] = 'messagesid';
        input['responseType'] = 'ResponseType';


		var result = SharedShortCodeController.viewSharedShortcodes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_outbound_shared_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.listOutboundSharedShortcodes") listOutboundSharedShortcodes

> List ShortCode Messages


```javascript
function listOutboundSharedShortcodes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pagesize'] = 195;
        input['from'] = 'from';
        input['to'] = 'to';
        input['datesent'] = 'datesent';


		var result = SharedShortCodeController.listOutboundSharedShortcodes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_inbound_shared_shortcodes"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.listInboundSharedShortcodes") listInboundSharedShortcodes

> List All Inbound ShortCode


```javascript
function listInboundSharedShortcodes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |
| dateReceived |  ``` Optional ```  | Only list messages sent with the specified date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pagesize'] = 195;
        input['from'] = 'from';
        input['shortcode'] = 'Shortcode';
        input['dateReceived'] = 'DateReceived';


		var result = SharedShortCodeController.listInboundSharedShortcodes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="send_shared_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.sendSharedShortcode") sendSharedShortcode

> Send an SMS from a message360 ShortCode


```javascript
function sendSharedShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| data |  ``` Required ```  | format of your data, example: {companyname}:test,{otpcode}:1234 |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['shortcode'] = 'shortcode';
        input['to'] = 'to';
        input['templateid'] = uniqid();
        input['responseType'] = 'ResponseType';
        input['data'] = 'data';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['messageStatusCallback'] = 'MessageStatusCallback';


		var result = SharedShortCodeController.sendSharedShortcode(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_templates"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.listTemplates") listTemplates

> List Shortcode Templates by Type


```javascript
function listTemplates(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| type |  ``` Optional ```  ``` DefaultValue ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| shortcode |  ``` Optional ```  | Only list templates of type |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['type'] = 'type';
        input['page'] = 195;
        input['pagesize'] = 195;
        input['shortcode'] = 'Shortcode';


		var result = SharedShortCodeController.listTemplates(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_keyword"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.viewKeyword") viewKeyword

> View a set of properties for a single keyword.


```javascript
function viewKeyword(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| keywordid |  ``` Required ```  | The unique identifier of each keyword |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['keywordid'] = 'Keywordid';
        input['responseType'] = 'ResponseType';


		var result = SharedShortCodeController.viewKeyword(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_keyword"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.listKeyword") listKeyword

> Retrieve a list of keywords associated with your message360 account.


```javascript
function listKeyword(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| keyword |  ``` Optional ```  | Only list keywords of keyword |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pageSize'] = 195;
        input['keyword'] = 'Keyword';
        input['shortcode'] = 195;


		var result = SharedShortCodeController.listKeyword(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_assignement"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.viewAssignement") viewAssignement

> The response returned here contains all resource properties associated with the given Shortcode.


```javascript
function viewAssignement(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Shortcode to your message360 account |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['shortcode'] = 'Shortcode';
        input['responseType'] = 'ResponseType';


		var result = SharedShortCodeController.viewAssignement(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.listAssignment") listAssignment

> Retrieve a list of shortcode assignment associated with your message360 account.


```javascript
function listAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pageSize'] = 195;
        input['shortcode'] = 'Shortcode';


		var result = SharedShortCodeController.listAssignment(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="update_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.updateAssignment") updateAssignment

> TODO: Add a method description


```javascript
function updateAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid shortcode to your message360 account |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| friendlyName |  ``` Optional ```  | User generated name of the shortcode |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |
| fallbackUrlMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['shortcode'] = 'Shortcode';
        input['responseType'] = 'ResponseType';
        input['friendlyName'] = 'FriendlyName';
        input['callbackUrl'] = 'CallbackUrl';
        input['callbackMethod'] = Object.keys(HttpActionEnum)[0];
        input['fallbackUrl'] = 'FallbackUrl';
        input['fallbackUrlMethod'] = Object.keys(HttpActionEnum)[0];


		var result = SharedShortCodeController.updateAssignment(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ConferenceController){
	});
```

### <a name="deaf_mute_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.deafMuteParticipant") deafMuteParticipant

> Deaf Mute Participant


```javascript
function deafMuteParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | ID of the active conference |
| participantSid |  ``` Required ```  | ID of an active participant |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| muted |  ``` Optional ```  | Mute a participant |
| deaf |  ``` Optional ```  | Make it so a participant cant hear |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'conferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['responseType'] = 'ResponseType';
        input['muted'] = true;
        input['deaf'] = true;


		var result = ConferenceController.deafMuteParticipant(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.viewParticipant") viewParticipant

> View Participant


```javascript
function viewParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| participantSid |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['responseType'] = 'ResponseType';


		var result = ConferenceController.viewParticipant(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | Unique Conference Sid |
| participantnumber |  ``` Required ```  | Particiant Number |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| muted |  ``` Optional ```  | add muted |
| deaf |  ``` Optional ```  | add without volume |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferencesid'] = 'conferencesid';
        input['participantnumber'] = 'participantnumber';
        input['responseType'] = 'ResponseType';
        input['muted'] = true;
        input['deaf'] = true;


		var result = ConferenceController.addParticipant(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.viewConference") viewConference

> View Conference


```javascript
function viewConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | The unique identifier of each conference resource |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferencesid'] = 'conferencesid';
        input['responseType'] = 'ResponseType';


		var result = ConferenceController.viewConference(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConference") createConference

> Here you can experiment with initiating a conference call through message360 and view the request response generated when doing so.


```javascript
function createConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| method |  ``` Required ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once call connects. |
| recordCallbackUrl |  ``` Required ```  | Recording parameters will be sent here upon completion. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the conference is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| record |  ``` Optional ```  | Specifies if the conference should be recorded. |
| recordCallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once conference connects. |
| schdeuleTime |  ``` Optional ```  | Schedule conference in future. Schedule time must be greater than current time |
| timeout |  ``` Optional ```  | The number of seconds the call stays on the line while waiting for an answer. The max time limit is 999 and the default limit is 60 seconds but lower times can be set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['recordCallbackUrl'] = 'RecordCallbackUrl';
        input['responseType'] = 'ResponseType';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['record'] = true;
        input['recordCallbackMethod'] = Object.keys(HttpActionEnum)[0];
        input['schdeuleTime'] = 'SchdeuleTime';
        input['timeout'] = 195;


		var result = ConferenceController.createConference(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="hangup_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.hangupParticipant") hangupParticipant

> Remove a participant from a conference.


```javascript
function hangupParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['responseType'] = 'ResponseType';


		var result = ConferenceController.hangupParticipant(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="play_conference_audio"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.playConferenceAudio") playConferenceAudio

> Play an audio file during a conference.


```javascript
function playConferenceAudio(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| audioUrl |  ``` Required ```  | The URL for the audio file that is to be played during the conference. Multiple audio files can be chained by using a semicolon. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['audioUrl'] = Object.keys(AudioFormatEnum)[0];
        input['responseType'] = 'ResponseType';


		var result = ConferenceController.playConferenceAudio(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.listParticipant") listParticipant

> List Participant


```javascript
function listParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response format, xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | page number |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Amount of records to return per page |
| muted |  ``` Optional ```  | Participants that are muted |
| deaf |  ``` Optional ```  | Participants cant hear |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pagesize'] = 195;
        input['muted'] = true;
        input['deaf'] = true;


		var result = ConferenceController.listParticipant(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.listConference") listConference

> List Conference


```javascript
function listConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| dateCreated |  ``` Optional ```  | Conference created date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pageSize'] = 195;
        input['friendlyName'] = 'FriendlyName';
        input['dateCreated'] = 'DateCreated';


		var result = ConferenceController.listConference(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TranscriptionController){
	});
```

### <a name="list_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.listTranscription") listTranscription

> Get All transcriptions


```javascript
function listTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | page number |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Amount of data per page |
| status |  ``` Optional ```  | Transcription status |
| dateTranscribed |  ``` Optional ```  | Transcription date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 195;
        input['pageSize'] = 195;
        input['status'] = Object.keys(StatusEnum)[0];
        input['dateTranscribed'] = 'DateTranscribed';


		var result = TranscriptionController.listTranscription(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.viewTranscription") viewTranscription

> View Specific Transcriptions


```javascript
function viewTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionSid |  ``` Required ```  | Unique Transcription ID |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['transcriptionSid'] = 'TranscriptionSid';
        input['responseType'] = 'ResponseType';


		var result = TranscriptionController.viewTranscription(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="recording_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.recordingTranscription") recordingTranscription

> Recording Transcriptions


```javascript
function recordingTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording sid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';


		var result = TranscriptionController.recordingTranscription(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="audio_url_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.audioURLTranscription") audioURLTranscription

> Audio URL Transcriptions


```javascript
function audioURLTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audioUrl |  ``` Required ```  | Audio url |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['audioUrl'] = 'AudioUrl';
        input['responseType'] = 'ResponseType';


		var result = TranscriptionController.audioURLTranscription(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PhoneNumberController){
	});
```

### <a name="available_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.availablePhoneNumber") availablePhoneNumber

> Available Phone Number


```javascript
function availablePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | Number type either SMS,Voice or all |
| areaCode |  ``` Required ```  | Phone Number Area Code |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Page Size |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['numberType'] = Object.keys(NumberTypeEnum)[0];
        input['areaCode'] = 'AreaCode';
        input['responseType'] = 'ResponseType';
        input['pageSize'] = 195;


		var result = PhoneNumberController.availablePhoneNumber(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.listNumber") listNumber

> List Account's Phone number details


```javascript
function listNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| numberType |  ``` Optional ```  | SMS or Voice |
| friendlyName |  ``` Optional ```  | Friendly name of the number |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pageSize'] = 31;
        input['numberType'] = Object.keys(NumberTypeEnum)[0];
        input['friendlyName'] = 'FriendlyName';


		var result = PhoneNumberController.listNumber(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_number_details"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.viewNumberDetails") viewNumberDetails

> Get Phone Number Details


```javascript
function viewNumberDetails(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Get Phone number Detail |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.viewNumberDetails(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.releaseNumber") releaseNumber

> Release number from account


```javascript
function releaseNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be relase |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.releaseNumber(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="buy_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.buyNumber") buyNumber

> Buy Phone Number 


```javascript
function buyNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be purchase |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.buyNumber(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="update_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.updatePhoneNumber") updatePhoneNumber

> Update Phone Number Details


```javascript
function updatePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | The phone number to update |
| voiceUrl |  ``` Required ```  | URL requested once the call connects |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| friendlyName |  ``` Optional ```  | Phone number friendly name description |
| voiceMethod |  ``` Optional ```  | Post or Get |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | Post or Get |
| hangupCallback |  ``` Optional ```  | callback url after a hangup occurs |
| hangupCallbackMethod |  ``` Optional ```  | Post or Get |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | Post or Get |
| smsFallbackUrl |  ``` Optional ```  | URL requested once the call connects |
| smsFallbackMethod |  ``` Optional ```  | URL requested if the sms URL is not available |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['voiceUrl'] = 'VoiceUrl';
        input['responseType'] = 'ResponseType';
        input['friendlyName'] = 'FriendlyName';
        input['voiceMethod'] = Object.keys(HttpActionEnum)[0];
        input['voiceFallbackUrl'] = 'VoiceFallbackUrl';
        input['voiceFallbackMethod'] = Object.keys(HttpActionEnum)[0];
        input['hangupCallback'] = 'HangupCallback';
        input['hangupCallbackMethod'] = Object.keys(HttpActionEnum)[0];
        input['heartbeatUrl'] = 'HeartbeatUrl';
        input['heartbeatMethod'] = Object.keys(HttpActionEnum)[0];
        input['smsUrl'] = 'SmsUrl';
        input['smsMethod'] = Object.keys(HttpActionEnum)[0];
        input['smsFallbackUrl'] = 'SmsFallbackUrl';
        input['smsFallbackMethod'] = Object.keys(HttpActionEnum)[0];


		var result = PhoneNumberController.updatePhoneNumber(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UsageController){
	});
```

### <a name="list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.listUsage") listUsage

> Get all usage 


```javascript
function listUsage(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| productCode |  ``` Optional ```  ``` DefaultValue ```  | Product Code |
| startDate |  ``` Optional ```  ``` DefaultValue ```  | Start Usage Date |
| endDate |  ``` Optional ```  ``` DefaultValue ```  | End Usage Date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UsageController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['productCode'] = Object.keys(ProductCodeEnum)[0];
        input['startDate'] = 'startDate';
        input['endDate'] = 'endDate';


		var result = UsageController.listUsage(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="web_rtc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebRTCController") WebRTCController

### Get singleton instance

The singleton instance of the ``` WebRTCController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, WebRTCController){
	});
```

### <a name="check_funds"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.checkFunds") checkFunds

> TODO: Add a method description


```javascript
function checkFunds(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your message360 Account SID |
| authToken |  ``` Required ```  | Your message360 Token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, WebRTCController){
        var input = [];
        input['accountSid'] = account_sid;
        input['authToken'] = auth_token;


		var result = WebRTCController.checkFunds(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_token"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createToken") createToken

> message360 webrtc


```javascript
function createToken(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your message360 Account SID |
| authToken |  ``` Required ```  | Your message360 Token |
| username |  ``` Required ```  | WebRTC username authentication |
| password |  ``` Required ```  | WebRTC password authentication |



#### Example Usage

```javascript


	app.controller("testController", function($scope, WebRTCController){
        var input = [];
        input['accountSid'] = account_sid;
        input['authToken'] = auth_token;
        input['username'] = 'username';
        input['password'] = 'password';


		var result = WebRTCController.createToken(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RecordingController){
	});
```

### <a name="view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.viewRecording") viewRecording

> View a specific Recording


```javascript
function viewRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Search Recording sid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';


		var result = RecordingController.viewRecording(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.deleteRecording") deleteRecording

> Delete Recording Record


```javascript
function deleteRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording Sid to be delete |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';


		var result = RecordingController.deleteRecording(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.listRecording") listRecording

> List out Recordings


```javascript
function listRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| dateCreated |  ``` Optional ```  | Recording date |
| callSid |  ``` Optional ```  | Call ID |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pageSize'] = 31;
        input['dateCreated'] = 'DateCreated';
        input['callSid'] = 'CallSid';


		var result = RecordingController.listRecording(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EmailController){
	});
```

### <a name="delete_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.deleteSpam") deleteSpam

> Deletes a email address marked as spam from the spam list


```javascript
function deleteSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| email |  ``` Required ```  | Email address |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['email'] = 'email';


		var result = EmailController.deleteSpam(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_block"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.deleteBlock") deleteBlock

> Deletes a blocked email


```javascript
function deleteBlock(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email address to remove from block list |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';


		var result = EmailController.deleteBlock(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="add_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.addUnsubscribes") addUnsubscribes

> Add an email to the unsubscribe list


```javascript
function addUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to add to the unsubscribe list |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';


		var result = EmailController.addUnsubscribes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="send_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.sendEmail") sendEmail

> Send out an email


```javascript
function sendEmail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The to email address |
| from |  ``` Required ```  | The from email address |
| type |  ``` Required ```  ``` DefaultValue ```  | email format type, html or text |
| subject |  ``` Required ```  | Email subject |
| message |  ``` Required ```  | The body of the email message |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| cc |  ``` Optional ```  | CC Email address |
| bcc |  ``` Optional ```  | BCC Email address |
| attachment |  ``` Optional ```  | File to be attached.File must be less than 7MB. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['type'] = Object.keys(SendEmailAsEnum)[0];
        input['subject'] = 'subject';
        input['message'] = 'message';
        input['responseType'] = 'ResponseType';
        input['cc'] = 'cc';
        input['bcc'] = 'bcc';
        input['attachment'] = 'attachment';


		var result = EmailController.sendEmail(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.deleteUnsubscribes") deleteUnsubscribes

> Delete emails from the unsubscribe list


```javascript
function deleteUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to remove from the unsubscribe list |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';


		var result = EmailController.deleteUnsubscribes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.listUnsubscribes") listUnsubscribes

> List all unsubscribed email addresses


```javascript
function listUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | Starting record of the list |
| limit |  ``` Optional ```  | Maximum number of records to be returned |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';


		var result = EmailController.listUnsubscribes(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.listInvalid") listInvalid

> List out all invalid email addresses


```javascript
function listInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offet |  ``` Optional ```  | Starting record for listing out emails |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offet'] = 'offet';
        input['limit'] = 'limit';


		var result = EmailController.listInvalid(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.deleteBounces") deleteBounces

> Delete an email address from the bounced address list


```javascript
function deleteBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| email |  ``` Required ```  | The email address to remove from the bounce list |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['email'] = 'email';


		var result = EmailController.deleteBounces(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.listBounces") listBounces

> List out all email addresses that have bounced


```javascript
function listBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record to start the list at |
| limit |  ``` Optional ```  | The maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';


		var result = EmailController.listBounces(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.listSpam") listSpam

> List out all email addresses marked as spam


```javascript
function listSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record number to start the list at |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';


		var result = EmailController.listSpam(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_blocks"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.listBlocks") listBlocks

> Outputs email addresses on your blocklist


```javascript
function listBlocks(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | Where to start in the output list |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';


		var result = EmailController.listBlocks(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.deleteInvalid") deleteInvalid

> This endpoint allows you to delete entries in the Invalid Emails list.


```javascript
function deleteInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email that was marked invalid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';


		var result = EmailController.deleteInvalid(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SMSController){
	});
```

### <a name="send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.sendSMS") sendSMS

> Send an SMS from a message360 number


```javascript
function sendSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | SMS enabled Message360 number to send this message from |
| to |  ``` Required ```  | Number to send the SMS to |
| body |  ``` Required ```  | Text Message To Send |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| smartsms |  ``` Optional ```  ``` DefaultValue ```  | Check's 'to' number can receive sms or not using Carrier API, if wireless = true then text sms is sent, else wireless = false then call is recieved to end user with audible message. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['from'] = 'from';
        input['to'] = 'to';
        input['body'] = 'body';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['messagestatuscallback'] = 'messagestatuscallback';
        input['smartsms'] = false;


		var result = SMSController.sendSMS(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.viewSMS") viewSMS

> View a Particular SMS


```javascript
function viewSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['messagesid'] = 'messagesid';
        input['responseType'] = 'ResponseType';


		var result = SMSController.viewSMS(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.listSMS") listSMS

> List All SMS


```javascript
function listSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pagesize'] = 31;
        input['from'] = 'from';
        input['to'] = 'to';
        input['datesent'] = 'datesent';


		var result = SMSController.listSMS(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.listInboundSMS") listInboundSMS

> List All Inbound SMS


```javascript
function listInboundSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound SMS |
| to |  ``` Optional ```  | To Number to get Inbound SMS |
| dateSent |  ``` Optional ```  | Filter sms message objects by this date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pagesize'] = 31;
        input['from'] = 'from';
        input['to'] = 'to';
        input['dateSent'] = 'DateSent';


		var result = SMSController.listInboundSMS(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="call_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CallController") CallController

### Get singleton instance

The singleton instance of the ``` CallController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CallController){
	});
```

### <a name="make_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.makeCall") makeCall

> You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json


```javascript
function makeCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Message360 should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Message360 should handle the receiving numbers voicemail machine |
| ifMachineUrl |  ``` Optional ```  | URL requested when IfMachine=continue |
| ifMachineMethod |  ``` Optional ```  | Method used to request the IfMachineUrl. |
| feedback |  ``` Optional ```  | Specify if survey should be enable or not |
| surveyId |  ``` Optional ```  | The unique identifier for the survey. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = Object.keys(HttpActionEnum)[0];
        input['timeout'] = 31;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = false;
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';
        input['ifMachine'] = Object.keys(IfMachineEnum)[0];
        input['ifMachineUrl'] = 'IfMachineUrl';
        input['ifMachineMethod'] = Object.keys(HttpActionEnum)[0];
        input['feedback'] = false;
        input['surveyId'] = 'SurveyId';


		var result = CallController.makeCall(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.playAudio") playAudio

> Play Dtmf and send the Digit


```javascript
function playAudio(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| sayText |  ``` Required ```  | Valid alphanumeric string that should be played to the In-progress call. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| mix |  ``` Optional ```  | If false, all other audio will be muted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['audioUrl'] = 'AudioUrl';
        input['sayText'] = 'SayText';
        input['responseType'] = 'ResponseType';
        input['length'] = 31;
        input['direction'] = Object.keys(DirectionEnum)[0];
        input['mix'] = false;


		var result = CallController.playAudio(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="record_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.recordCall") recordCall

> Record a Call


```javascript
function recordCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| record |  ``` Required ```  | Set true to initiate recording or false to terminate recording |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response format, xml or json |
| direction |  ``` Optional ```  | The leg of the call to record |
| timeLimit |  ``` Optional ```  | Time in seconds the recording duration should not exceed |
| callBackUrl |  ``` Optional ```  | URL consulted after the recording completes |
| fileformat |  ``` Optional ```  | Format of the recording file. Can be .mp3 or .wav |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['record'] = false;
        input['responseType'] = 'ResponseType';
        input['direction'] = Object.keys(DirectionEnum)[0];
        input['timeLimit'] = 31;
        input['callBackUrl'] = 'CallBackUrl';
        input['fileformat'] = Object.keys(AudioFormatEnum)[0];


		var result = CallController.recordCall(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="voice_effect"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.voiceEffect") voiceEffect

> Voice Effect


```javascript
function voiceEffect(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the in-progress voice call. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| audioDirection |  ``` Optional ```  | The direction the audio effect should be placed on. If IN, the effects will occur on the incoming audio stream. If OUT, the effects will occur on the outgoing audio stream. |
| pitchSemiTones |  ``` Optional ```  | value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | value between -1 and 1 |
| pitch |  ``` Optional ```  | value greater than 0 |
| rate |  ``` Optional ```  | value greater than 0 |
| tempo |  ``` Optional ```  | value greater than 0 |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['responseType'] = 'ResponseType';
        input['audioDirection'] = Object.keys(AudioDirectionEnum)[0];
        input['pitchSemiTones'] = 31.5080694977697;
        input['pitchOctaves'] = 31.5080694977697;
        input['pitch'] = 31.5080694977697;
        input['rate'] = 31.5080694977697;
        input['tempo'] = 31.5080694977697;


		var result = CallController.voiceEffect(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="send_digit"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.sendDigit") sendDigit

> Play Dtmf and send the Digit


```javascript
function sendDigit(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['playDtmf'] = 'PlayDtmf';
        input['responseType'] = 'ResponseType';
        input['playDtmfDirection'] = Object.keys(DirectionEnum)[0];


		var result = CallController.sendDigit(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="interrupted_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.interruptedCall") interruptedCall

> Interrupt the Call by Call Sid


```javascript
function interruptedCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | Call SId |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['responseType'] = 'ResponseType';
        input['url'] = 'Url';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['status'] = Object.keys(InterruptedCallStatusEnum)[0];


		var result = CallController.interruptedCall(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="group_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.groupCall") groupCall

> Group Call


```javascript
function groupCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| to |  ``` Required ```  | Please enter multiple E164 number. You can add max 10 numbers. Add numbers separated with comma. e.g : 1111111111,2222222222 |
| url |  ``` Required ```  | URL requested once the call connects |
| responseType |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| groupConfirmKey |  ``` Required ```  | Define the DTMF that the called party should send to bridge the call. Allowed Values : 0-9, #, * |
| groupConfirmFile |  ``` Required ```  | Specify the audio file you want to play when the called party picks up the call |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Message360 should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['responseType'] = 'ResponseType';
        input['groupConfirmKey'] = 'GroupConfirmKey';
        input['groupConfirmFile'] = Object.keys(AudioFormatEnum)[0];
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = Object.keys(HttpActionEnum)[0];
        input['timeout'] = 31;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = 'HideCallerId';
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';


		var result = CallController.groupCall(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.listCalls") listCalls

> A list of calls associated with your Message360 account


```javascript
function listCalls(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Only list calls to this number |
| from |  ``` Optional ```  | Only list calls from this number |
| dateCreated |  ``` Optional ```  | Only list calls starting within the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pageSize'] = 31;
        input['to'] = 'To';
        input['from'] = 'From';
        input['dateCreated'] = 'DateCreated';


		var result = CallController.listCalls(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="send_ringless_vm"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.sendRinglessVM") sendRinglessVM

> API endpoint used to send a Ringless Voicemail


```javascript
function sendRinglessVM(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| rVMCallerId |  ``` Required ```  | Alternate caller ID required for RVM |
| to |  ``` Required ```  | To number |
| voiceMailURL |  ``` Required ```  | URL to an audio file |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  ``` DefaultValue ```  | Not currently used in this version |
| statusCallBackUrl |  ``` Optional ```  | URL to post the status of the Ringless request |
| statsCallBackMethod |  ``` Optional ```  | POST or GET |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['from'] = 'From';
        input['rVMCallerId'] = 'RVMCallerId';
        input['to'] = 'To';
        input['voiceMailURL'] = 'VoiceMailURL';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statsCallBackMethod'] = Object.keys(HttpActionEnum)[0];


		var result = CallController.sendRinglessVM(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.viewCall") viewCall

> View Call Response


```javascript
function viewCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | Call Sid id for particular Call |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callsid'] = 'callsid';
        input['responseType'] = 'ResponseType';


		var result = CallController.viewCall(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CarrierController){
	});
```

### <a name="carrier_lookup_list"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.carrierLookupList") carrierLookupList

> Get the All Purchase Number's Carrier lookup


```javascript
function carrierLookupList(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page Number |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Page Size |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pagesize'] = 31;


		var result = CarrierController.carrierLookupList(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="carrier_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.carrierLookup") carrierLookup

> Get the Carrier Lookup


```javascript
function carrierLookup(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | The number to lookup |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var input = [];
        input['phonenumber'] = 'phonenumber';
        input['responseType'] = 'ResponseType';


		var result = CarrierController.carrierLookup(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AddressController") AddressController

### Get singleton instance

The singleton instance of the ``` AddressController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AddressController){
	});
```

### <a name="create_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createAddress") createAddress

> To add an address to your address book, you create a new address object. You can retrieve and delete individual addresses as well as get a list of addresses. Addresses are identified by a unique random ID.


```javascript
function createAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of user |
| address |  ``` Required ```  | Address of user. |
| country |  ``` Required ```  | Must be a 2 letter country short-name code (ISO 3166) |
| state |  ``` Required ```  | Must be a 2 letter State eg. CA for US. For Some Countries it can be greater than 2 letters. |
| city |  ``` Required ```  | City Name. |
| zip |  ``` Required ```  | Zip code of city. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type either json or xml |
| description |  ``` Optional ```  | Description of addresses. |
| email |  ``` Optional ```  | Email Id of user. |
| phone |  ``` Optional ```  | Phone number of user. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['name'] = 'Name';
        input['address'] = 'Address';
        input['country'] = 'Country';
        input['state'] = 'State';
        input['city'] = 'City';
        input['zip'] = 'Zip';
        input['responseType'] = 'ResponseType';
        input['description'] = 'Description';
        input['email'] = 'email';
        input['phone'] = 'Phone';


		var result = AddressController.createAddress(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.viewAddress") viewAddress

> View Address Specific address Book by providing the address id


```javascript
function viewAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be retrieved. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';


		var result = AddressController.viewAddress(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.listAddress") listAddress

> List All Address 


```javascript
function listAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| page |  ``` Optional ```  ``` DefaultValue ```  | Return requested # of items starting the value, default=0, must be an integer |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressSID |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pageSize'] = 31;
        input['addressSID'] = 'AddressSID';
        input['dateCreated'] = 'DateCreated';


		var result = AddressController.listAddress(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="verify_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.verifyAddress") verifyAddress

> Validates an address given.


```javascript
function verifyAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be verified. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';


		var result = AddressController.verifyAddress(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="delete_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.deleteAddress") deleteAddress

> To delete Address to your address book


```javascript
function deleteAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be deleted. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';


		var result = AddressController.deleteAddress(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SubAccountController){
	});
```

### <a name="delete_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.deleteSubAccount") deleteSubAccount

> Delete sub account or merge numbers into parent


```javascript
function deleteSubAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  ``` DefaultValue ```  | 0 to delete or 1 to merge numbers to parent account. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['mergeNumber'] = Object.keys(MergeNumberStatusEnum)[0];
        input['responseType'] = 'ResponseType';


		var result = SubAccountController.deleteSubAccount(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="suspend_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.suspendSubAccount") suspendSubAccount

> Suspend or unsuspend


```javascript
function suspendSubAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| activate |  ``` Required ```  ``` DefaultValue ```  | 0 to suspend or 1 to activate |
| responseType |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['activate'] = Object.keys(ActivateStatusEnum)[0];
        input['responseType'] = 'ResponseType';


		var result = SubAccountController.suspendSubAccount(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSubAccount") createSubAccount

> Create a sub user account under the parent account


```javascript
function createSubAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Required ```  | Sub account user first name |
| lastName |  ``` Required ```  | sub account user last name |
| email |  ``` Required ```  | Sub account email address |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var input = [];
        input['firstName'] = 'FirstName';
        input['lastName'] = 'LastName';
        input['email'] = 'Email';
        input['responseType'] = 'ResponseType';


		var result = SubAccountController.createSubAccount(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AccountController){
	});
```

### <a name="view_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.viewAccount") viewAccount

> Display Account Description


```javascript
function viewAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountController){
        var input = [];
        input['date'] = 'Date';
        input['responseType'] = 'ResponseType';


		var result = AccountController.viewAccount(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ShortCodeController") ShortCodeController

### Get singleton instance

The singleton instance of the ``` ShortCodeController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ShortCodeController){
	});
```

### <a name="send_dedicated_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.sendDedicatedShortcode") sendDedicatedShortcode

> TODO: Add a method description


```javascript
function sendDedicatedShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | Your dedicated shortcode |
| to |  ``` Required ```  | The number to send your SMS to |
| body |  ``` Required ```  | The body of your message |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  | Callback status method, POST or GET |
| messagestatuscallback |  ``` Optional ```  | Callback url for SMS status |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['shortcode'] = 31;
        input['to'] = 31.5080694977697;
        input['body'] = 'body';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['messagestatuscallback'] = 'messagestatuscallback';


		var result = ShortCodeController.sendDedicatedShortcode(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="view_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.viewShortcode") viewShortcode

> View a single Sms Short Code message.


```javascript
function viewShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for the sms resource |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['messageSid'] = 'MessageSid';
        input['responseType'] = 'ResponseType';


		var result = ShortCodeController.viewShortcode(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.listShortcode") listShortcode

> Retrieve a list of Short Code message objects.


```javascript
function listShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| shortcode |  ``` Optional ```  | Only list messages sent from this Short Code |
| to |  ``` Optional ```  | Only list messages sent to this number |
| dateSent |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['shortcode'] = 'Shortcode';
        input['to'] = 'To';
        input['dateSent'] = date("D M d, Y G:i");
        input['page'] = 31;
        input['pageSize'] = 31;


		var result = ShortCodeController.listShortcode(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="list_inbound_shortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.listInboundShortcode") listInboundShortcode

> Retrive a list of inbound Sms Short Code messages associated with your message360 account.


```javascript
function listInboundShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Only list SMS messages sent from this number |
| shortcode |  ``` Optional ```  | Only list SMS messages sent to Shortcode |
| dateReceived |  ``` Optional ```  | Only list SMS messages sent in the specified date MAKE REQUEST |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 31;
        input['pageSize'] = 31;
        input['from'] = 'From';
        input['shortcode'] = 'Shortcode';
        input['dateReceived'] = 'DateReceived';


		var result = ShortCodeController.listInboundShortcode(input);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



