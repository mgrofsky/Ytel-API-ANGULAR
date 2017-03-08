# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
If any of your models have `Date` or `Datetime` type fields or your endpoints have `Date`/`Datetime` type response, you will need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `message360` folder inside the scripts folder.
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
		<script src="scripts/message360/Module.js"></script>
		<script src="scripts/message360/Configuration.js"></script>
		<script src="scripts/message360/APIHelper.js"></script>
		<script src="scripts/message360/Http/Client/HttpContext.js"></script>
		<script src="scripts/message360/Http/Client/RequestClient.js"></script>
		<script src="scripts/message360/Http/Request/HttpRequest.js"></script>
		<script src="scripts/message360/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/message360/Controllers/ShortCodeController.js"></script>
        <script src="scripts/message360/Controllers/ConferenceController.js"></script>
        <script src="scripts/message360/Controllers/EmailController.js"></script>
        <script src="scripts/message360/Controllers/NumberVerificationController.js"></script>
        <script src="scripts/message360/Controllers/CarrierController.js"></script>
        <script src="scripts/message360/Controllers/CallController.js"></script>
        <script src="scripts/message360/Controllers/WebRTCController.js"></script>
        <script src="scripts/message360/Controllers/SubAccountController.js"></script>
        <script src="scripts/message360/Controllers/AddressController.js"></script>
        <script src="scripts/message360/Controllers/PhoneNumberController.js"></script>
        <script src="scripts/message360/Controllers/RecordingController.js"></script>
        <script src="scripts/message360/Controllers/SMSController.js"></script>
        <script src="scripts/message360/Controllers/TranscriptionController.js"></script>
        <script src="scripts/message360/Controllers/UsageController.js"></script>
        <script src="scripts/message360/Controllers/AccountController.js"></script>


		<!-- Models -->
        <script src="scripts/message360/Models/BaseModel.js"></script>
        <script src="scripts/message360/Models/AudioDirection.js"></script>
        <script src="scripts/message360/Models/MergeNumberStatus.js"></script>
        <script src="scripts/message360/Models/ActivateStatus.js"></script>
        <script src="scripts/message360/Models/SendEmailAs.js"></script>
        <script src="scripts/message360/Models/Status.js"></script>
        <script src="scripts/message360/Models/NumberType.js"></script>
        <script src="scripts/message360/Models/Direction.js"></script>
        <script src="scripts/message360/Models/InterruptedCallStatus.js"></script>
        <script src="scripts/message360/Models/AudioFormat.js"></script>
        <script src="scripts/message360/Models/ProductCode.js"></script>
        <script src="scripts/message360/Models/IfMachine.js"></script>
        <script src="scripts/message360/Models/HttpAction.js"></script>

		...
	</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.

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

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [ShortCodeController](#short_code_controller)
* [ConferenceController](#conference_controller)
* [EmailController](#email_controller)
* [NumberVerificationController](#number_verification_controller)
* [CarrierController](#carrier_controller)
* [CallController](#call_controller)
* [WebRTCController](#web_rtc_controller)
* [SubAccountController](#sub_account_controller)
* [AddressController](#address_controller)
* [PhoneNumberController](#phone_number_controller)
* [RecordingController](#recording_controller)
* [SMSController](#sms_controller)
* [TranscriptionController](#transcription_controller)
* [UsageController](#usage_controller)
* [AccountController](#account_controller)

### <a name="short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ShortCodeController") ShortCodeController

#### Get singleton instance

The singleton instance of the ``` ShortCodeController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_view_template"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewTemplate") createViewTemplate

> View a Shared ShortCode Template


```javascript
function createViewTemplate(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateid |  ``` Required ```  | The unique identifier for a template object |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["templateid"] = uniqid();
        input["responseType"] = "ResponseType";


		var result = ShortCodeController.createViewTemplate(input);
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



#### <a name="create_send_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createSendShortCode") createSendShortCode

> Send an SMS from a message360 ShortCode


```javascript
function createSendShortCode(input, formParams)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| tocountrycode |  ``` Required ```  ``` DefaultValue ```  | The country code for sending this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message+ |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["shortcode"] = "shortcode";
        input["tocountrycode"] = "tocountrycode";
        input["to"] = "to";
        input["templateid"] = uniqid();
        input["method"] = "Method";
        input["messageStatusCallback"] = "MessageStatusCallback";
        input["responseType"] = "ResponseType";
    // key-value map for optional form parameters
    var formParams = [];


		var result = ShortCodeController.createSendShortCode(input, formParams);
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



#### <a name="create_list_inbound_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListInboundShortCode") createListInboundShortCode

> List All Inbound ShortCode


```javascript
function createListInboundShortCode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |
| dateReceived |  ``` Optional ```  | Only list messages sent with the specified date |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 197;
        input["pagesize"] = 197;
        input["from"] = "from";
        input["shortcode"] = "Shortcode";
        input["dateReceived"] = "DateReceived";
        input["responseType"] = "ResponseType";


		var result = ShortCodeController.createListInboundShortCode(input);
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



#### <a name="create_list_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListShortCode") createListShortCode

> List ShortCode Messages


```javascript
function createListShortCode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 197;
        input["pagesize"] = 197;
        input["from"] = "from";
        input["to"] = "to";
        input["datesent"] = "datesent";
        input["responseType"] = "ResponseType";


		var result = ShortCodeController.createListShortCode(input);
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



#### <a name="create_list_templates"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListTemplates") createListTemplates

> List Shortcode Templates by Type


```javascript
function createListTemplates(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  ``` DefaultValue ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["type"] = "type";
        input["page"] = 197;
        input["pagesize"] = 197;
        input["responseType"] = "ResponseType";


		var result = ShortCodeController.createListTemplates(input);
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



#### <a name="create_view_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewShortCode") createViewShortCode

> View a ShortCode Message


```javascript
function createViewShortCode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["messagesid"] = "messagesid";
        input["responseType"] = "ResponseType";


		var result = ShortCodeController.createViewShortCode(input);
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

### <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

#### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_deaf_mute_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createDeafMuteParticipant") createDeafMuteParticipant

> Deaf Mute Participant


```javascript
function createDeafMuteParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | TODO: Add a parameter description |
| participantSid |  ``` Required ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["conferenceSid"] = "conferenceSid";
        input["participantSid"] = "ParticipantSid";
        input["muted"] = true;
        input["deaf"] = true;
        input["responseType"] = "ResponseType";


		var result = ConferenceController.createDeafMuteParticipant(input);
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



#### <a name="create_list_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListConference") createListConference

> List Conference


```javascript
function createListConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| status |  ``` Optional ```  | TODO: Add a parameter description |
| dateCreated |  ``` Optional ```  | TODO: Add a parameter description |
| dateUpdated |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 197;
        input["pageSize"] = 197;
        input["friendlyName"] = "FriendlyName";
        input["status"] = Object.keys(InterruptedCallStatus)[0];
        input["dateCreated"] = "DateCreated";
        input["dateUpdated"] = "DateUpdated";
        input["responseType"] = "ResponseType";


		var result = ConferenceController.createListConference(input);
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



#### <a name="create_view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewConference") createViewConference

> View Conference


```javascript
function createViewConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | The unique identifier of each conference resource |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["conferencesid"] = "conferencesid";
        input["responseType"] = "ResponseType";


		var result = ConferenceController.createViewConference(input);
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



#### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | Unique Conference Sid |
| participantnumber |  ``` Required ```  | Particiant Number |
| tocountrycode |  ``` Required ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["conferencesid"] = "conferencesid";
        input["participantnumber"] = "participantnumber";
        input["tocountrycode"] = 197;
        input["muted"] = true;
        input["deaf"] = true;
        input["responseType"] = "ResponseType";


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



#### <a name="create_list_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListParticipant") createListParticipant

> List Participant


```javascript
function createListParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| page |  ``` Optional ```  | page number |
| pagesize |  ``` Optional ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response format, xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["conferenceSid"] = "ConferenceSid";
        input["page"] = 197;
        input["pagesize"] = 197;
        input["muted"] = true;
        input["deaf"] = true;
        input["responseType"] = "ResponseType";


		var result = ConferenceController.createListParticipant(input);
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



#### <a name="create_view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewParticipant") createViewParticipant

> View Participant


```javascript
function createViewParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| participantSid |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["conferenceSid"] = "ConferenceSid";
        input["participantSid"] = "ParticipantSid";
        input["responseType"] = "ResponseType";


		var result = ConferenceController.createViewParticipant(input);
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

### <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

#### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_delete_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteInvalid") createDeleteInvalid

> This endpoint allows you to delete entries in the Invalid Emails list.


```javascript
function createDeleteInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


		var result = EmailController.createDeleteInvalid(input);
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



#### <a name="create_list_blocks"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListBlocks") createListBlocks

> Outputs email addresses on your blocklist


```javascript
function createListBlocks(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | Where to start in the output list |
| limit |  ``` Optional ```  | Maximum number of records to return |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["offset"] = "offset";
        input["limit"] = "limit";
        input["responseType"] = "ResponseType";


		var result = EmailController.createListBlocks(input);
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



#### <a name="create_list_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListSpam") createListSpam

> List out all email addresses marked as spam


```javascript
function createListSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record number to start the list at |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["responseType"] = "ResponseType";
        input["offset"] = "offset";
        input["limit"] = "limit";


		var result = EmailController.createListSpam(input);
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



#### <a name="create_list_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListBounces") createListBounces

> List out all email addresses that have bounced


```javascript
function createListBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record to start the list at |
| limit |  ``` Optional ```  | The maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["responseType"] = "ResponseType";
        input["offset"] = "offset";
        input["limit"] = "limit";


		var result = EmailController.createListBounces(input);
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



#### <a name="create_delete_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteBounces") createDeleteBounces

> Delete an email address from the bounced address list


```javascript
function createDeleteBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to remove from the bounce list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


		var result = EmailController.createDeleteBounces(input);
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



#### <a name="create_list_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListInvalid") createListInvalid

> List out all invalid email addresses


```javascript
function createListInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offet |  ``` Optional ```  | Starting record for listing out emails |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["responseType"] = "ResponseType";
        input["offet"] = "offet";
        input["limit"] = "limit";


		var result = EmailController.createListInvalid(input);
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



#### <a name="create_list_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListUnsubscribes") createListUnsubscribes

> List all unsubscribed email addresses


```javascript
function createListUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | Starting record of the list |
| limit |  ``` Optional ```  | Maximum number of records to be returned |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["responseType"] = "ResponseType";
        input["offset"] = "offset";
        input["limit"] = "limit";


		var result = EmailController.createListUnsubscribes(input);
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



#### <a name="create_delete_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteUnsubscribes") createDeleteUnsubscribes

> Delete emails from the unsubscribe list


```javascript
function createDeleteUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to remove from the unsubscribe list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


		var result = EmailController.createDeleteUnsubscribes(input);
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



#### <a name="add_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.addUnsubscribes") addUnsubscribes

> Add an email to the unsubscribe list


```javascript
function addUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to add to the unsubscribe list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


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



#### <a name="create_delete_block"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteBlock") createDeleteBlock

> Deletes a blocked email


```javascript
function createDeleteBlock(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email address to remove from block list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


		var result = EmailController.createDeleteBlock(input);
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



#### <a name="create_delete_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteSpam") createDeleteSpam

> Deletes a email address marked as spam from the spam list


```javascript
function createDeleteSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email address |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["email"] = "email";
        input["responseType"] = "ResponseType";


		var result = EmailController.createDeleteSpam(input);
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



#### <a name="create_send_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSendEmail") createSendEmail

> Send out an email


```javascript
function createSendEmail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The to email address |
| from |  ``` Required ```  | The from email address |
| type |  ``` Required ```  ``` DefaultValue ```  | email format type, html or text |
| subject |  ``` Required ```  | Email subject |
| message |  ``` Required ```  | The body of the email message |
| cc |  ``` Optional ```  | CC Email address |
| bcc |  ``` Optional ```  | BCC Email address |
| attachment |  ``` Optional ```  | File to be attached.File must be less than 7MB. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["to"] = "to";
        input["from"] = "from";
        input["type"] = Object.keys(SendEmailAs)[0];
        input["subject"] = "subject";
        input["message"] = "message";
        input["cc"] = "cc";
        input["bcc"] = "bcc";
        input["attachment"] = "attachment";
        input["responseType"] = "ResponseType";


		var result = EmailController.createSendEmail(input);
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

### <a name="number_verification_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NumberVerificationController") NumberVerificationController

#### Get singleton instance

The singleton instance of the ``` NumberVerificationController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, NumberVerificationController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_verify_number"></a>![Method: ](https://apidocs.io/img/method.png ".NumberVerificationController.createVerifyNumber") createVerifyNumber

> Number Verification


```javascript
function createVerifyNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | TODO: Add a parameter description |
| type |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, NumberVerificationController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phonenumber"] = "phonenumber";
        input["type"] = "type";
        input["responseType"] = "ResponseType";


		var result = NumberVerificationController.createVerifyNumber(input);
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

### <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

#### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CarrierController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_carrier_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookup") createCarrierLookup

> Get the Carrier Lookup


```javascript
function createCarrierLookup(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | The number to lookup |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phonenumber"] = "phonenumber";
        input["responseType"] = "ResponseType";


		var result = CarrierController.createCarrierLookup(input);
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



#### <a name="create_carrier_lookup_list"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookupList") createCarrierLookupList

> Get the All Purchase Number's Carrier lookup


```javascript
function createCarrierLookupList(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page Number |
| pagesize |  ``` Optional ```  | Page Size |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 197;
        input["pagesize"] = 197;
        input["responseType"] = "ResponseType";


		var result = CarrierController.createCarrierLookupList(input);
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

### <a name="call_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CallController") CallController

#### Get singleton instance

The singleton instance of the ``` CallController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_view_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createViewCall") createViewCall

> View Call Response


```javascript
function createViewCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | Call Sid id for particular Call |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callsid"] = "callsid";
        input["responseType"] = "ResponseType";


		var result = CallController.createViewCall(input);
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



#### <a name="create_group_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createGroupCall") createGroupCall

> Group Call


```javascript
function createGroupCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromCountryCode |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| from |  ``` Required ```  | TODO: Add a parameter description |
| toCountryCode |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| to |  ``` Required ```  | TODO: Add a parameter description |
| url |  ``` Required ```  | TODO: Add a parameter description |
| method |  ``` Optional ```  | TODO: Add a parameter description |
| statusCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| statusCallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| fallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| fallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| heartBeatUrl |  ``` Optional ```  | TODO: Add a parameter description |
| heartBeatMethod |  ``` Optional ```  | TODO: Add a parameter description |
| timeout |  ``` Optional ```  | TODO: Add a parameter description |
| playDtmf |  ``` Optional ```  | TODO: Add a parameter description |
| hideCallerId |  ``` Optional ```  | TODO: Add a parameter description |
| record |  ``` Optional ```  | TODO: Add a parameter description |
| recordCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| recordCallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| transcribe |  ``` Optional ```  | TODO: Add a parameter description |
| transcribeCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["fromCountryCode"] = "FromCountryCode";
        input["from"] = "From";
        input["toCountryCode"] = "ToCountryCode";
        input["to"] = "To";
        input["url"] = "Url";
        input["method"] = Object.keys(HttpAction)[0];
        input["statusCallBackUrl"] = "StatusCallBackUrl";
        input["statusCallBackMethod"] = Object.keys(HttpAction)[0];
        input["fallBackUrl"] = "FallBackUrl";
        input["fallBackMethod"] = Object.keys(HttpAction)[0];
        input["heartBeatUrl"] = "HeartBeatUrl";
        input["heartBeatMethod"] = Object.keys(HttpAction)[0];
        input["timeout"] = 197;
        input["playDtmf"] = "PlayDtmf";
        input["hideCallerId"] = "HideCallerId";
        input["record"] = true;
        input["recordCallBackUrl"] = "RecordCallBackUrl";
        input["recordCallBackMethod"] = Object.keys(HttpAction)[0];
        input["transcribe"] = true;
        input["transcribeCallBackUrl"] = "TranscribeCallBackUrl";
        input["responseType"] = "ResponseType";


		var result = CallController.createGroupCall(input);
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



#### <a name="create_voice_effect"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createVoiceEffect") createVoiceEffect

> Voice Effect


```javascript
function createVoiceEffect(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | TODO: Add a parameter description |
| audioDirection |  ``` Optional ```  | TODO: Add a parameter description |
| pitchSemiTones |  ``` Optional ```  | value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | value between -1 and 1 |
| pitch |  ``` Optional ```  | value greater than 0 |
| rate |  ``` Optional ```  | value greater than 0 |
| tempo |  ``` Optional ```  | value greater than 0 |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callSid"] = "CallSid";
        input["audioDirection"] = Object.keys(AudioDirection)[0];
        input["pitchSemiTones"] = 197.848927633767;
        input["pitchOctaves"] = 197.848927633767;
        input["pitch"] = 197.848927633767;
        input["rate"] = 197.848927633767;
        input["tempo"] = 197.848927633767;
        input["responseType"] = "ResponseType";


		var result = CallController.createVoiceEffect(input);
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



#### <a name="create_record_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createRecordCall") createRecordCall

> Record a Call


```javascript
function createRecordCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| record |  ``` Required ```  | Set true to initiate recording or false to terminate recording |
| direction |  ``` Optional ```  | The leg of the call to record |
| timeLimit |  ``` Optional ```  | Time in seconds the recording duration should not exceed |
| callBackUrl |  ``` Optional ```  | URL consulted after the recording completes |
| fileformat |  ``` Optional ```  | Format of the recording file. Can be .mp3 or .wav |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response format, xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callSid"] = "CallSid";
        input["record"] = true;
        input["direction"] = Object.keys(Direction)[0];
        input["timeLimit"] = 197;
        input["callBackUrl"] = "CallBackUrl";
        input["fileformat"] = Object.keys(AudioFormat)[0];
        input["responseType"] = "ResponseType";


		var result = CallController.createRecordCall(input);
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



#### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createPlayAudio") createPlayAudio

> Play Dtmf and send the Digit


```javascript
function createPlayAudio(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| loop |  ``` Optional ```  | Repeat audio playback indefinitely |
| mix |  ``` Optional ```  | If false, all other audio will be muted |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callSid"] = "CallSid";
        input["audioUrl"] = "AudioUrl";
        input["length"] = 197;
        input["direction"] = Object.keys(Direction)[0];
        input["loop"] = true;
        input["mix"] = true;
        input["responseType"] = "ResponseType";


		var result = CallController.createPlayAudio(input);
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



#### <a name="create_interrupted_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createInterruptedCall") createInterruptedCall

> Interrupt the Call by Call Sid


```javascript
function createInterruptedCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | Call SId |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callSid"] = "CallSid";
        input["url"] = "Url";
        input["method"] = Object.keys(HttpAction)[0];
        input["status"] = Object.keys(InterruptedCallStatus)[0];
        input["responseType"] = "ResponseType";


		var result = CallController.createInterruptedCall(input);
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



#### <a name="create_send_digit"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createSendDigit") createSendDigit

> Play Dtmf and send the Digit


```javascript
function createSendDigit(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["callSid"] = "CallSid";
        input["playDtmf"] = "PlayDtmf";
        input["playDtmfDirection"] = Object.keys(Direction)[0];
        input["responseType"] = "ResponseType";


		var result = CallController.createSendDigit(input);
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



#### <a name="create_make_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createMakeCall") createMakeCall

> You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json


```javascript
function createMakeCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromCountryCode |  ``` Required ```  | from country code |
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| toCountryCode |  ``` Required ```  | To cuntry code number |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
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
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["fromCountryCode"] = "FromCountryCode";
        input["from"] = "From";
        input["toCountryCode"] = "ToCountryCode";
        input["to"] = "To";
        input["url"] = "Url";
        input["method"] = Object.keys(HttpAction)[0];
        input["statusCallBackUrl"] = "StatusCallBackUrl";
        input["statusCallBackMethod"] = Object.keys(HttpAction)[0];
        input["fallBackUrl"] = "FallBackUrl";
        input["fallBackMethod"] = Object.keys(HttpAction)[0];
        input["heartBeatUrl"] = "HeartBeatUrl";
        input["heartBeatMethod"] = true;
        input["timeout"] = 156;
        input["playDtmf"] = "PlayDtmf";
        input["hideCallerId"] = true;
        input["record"] = true;
        input["recordCallBackUrl"] = "RecordCallBackUrl";
        input["recordCallBackMethod"] = Object.keys(HttpAction)[0];
        input["transcribe"] = true;
        input["transcribeCallBackUrl"] = "TranscribeCallBackUrl";
        input["ifMachine"] = Object.keys(IfMachine)[0];
        input["responseType"] = "ResponseType";


		var result = CallController.createMakeCall(input);
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



#### <a name="create_list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createListCalls") createListCalls

> A list of calls associated with your Message360 account


```javascript
function createListCalls(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Only list calls to this number |
| from |  ``` Optional ```  | Only list calls from this number |
| dateCreated |  ``` Optional ```  | Only list calls starting within the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pageSize"] = 156;
        input["to"] = "To";
        input["from"] = "From";
        input["dateCreated"] = "DateCreated";
        input["responseType"] = "ResponseType";


		var result = CallController.createListCalls(input);
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

### <a name="web_rtc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebRTCController") WebRTCController

#### Get singleton instance

The singleton instance of the ``` WebRTCController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, WebRTCController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_check_funds"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createCheckFunds") createCheckFunds

> TODO: Add a method description


```javascript
function createCheckFunds(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your message360 Account SID |
| authToken |  ``` Required ```  | Your message360 Token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, WebRTCController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["accountSid"] = account_sid;
        input["authToken"] = auth_token;


		var result = WebRTCController.createCheckFunds(input);
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



#### <a name="create_token"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createToken") createToken

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


	app.controller("testController", function($scope, WebRTCController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["accountSid"] = account_sid;
        input["authToken"] = auth_token;
        input["username"] = "username";
        input["password"] = "password";


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

### <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

#### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SubAccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSubAccount") createSubAccount

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
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["firstName"] = "FirstName";
        input["lastName"] = "LastName";
        input["email"] = "Email";
        input["responseType"] = "ResponseType";


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



#### <a name="create_suspend_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSuspendSubAccount") createSuspendSubAccount

> Suspend or unsuspend


```javascript
function createSuspendSubAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| activate |  ``` Required ```  ``` DefaultValue ```  | 0 to suspend or 1 to activate |
| responseType |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["subAccountSID"] = "SubAccountSID";
        input["activate"] = Object.keys(ActivateStatus)[0];
        input["responseType"] = "ResponseType";


		var result = SubAccountController.createSuspendSubAccount(input);
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



#### <a name="create_delete_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createDeleteSubAccount") createDeleteSubAccount

> Delete sub account or merge numbers into parent


```javascript
function createDeleteSubAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  ``` DefaultValue ```  | 0 to delete or 1 to merge numbers to parent account. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["subAccountSID"] = "SubAccountSID";
        input["mergeNumber"] = Object.keys(MergeNumberStatus)[0];
        input["responseType"] = "ResponseType";


		var result = SubAccountController.createDeleteSubAccount(input);
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

### <a name="address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AddressController") AddressController

#### Get singleton instance

The singleton instance of the ``` AddressController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createAddress") createAddress

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
| description |  ``` Optional ```  | Description of addresses. |
| email |  ``` Optional ```  | Email Id of user. |
| phone |  ``` Optional ```  | Phone number of user. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["name"] = "Name";
        input["address"] = "Address";
        input["country"] = "Country";
        input["state"] = "State";
        input["city"] = "City";
        input["zip"] = "Zip";
        input["description"] = "Description";
        input["email"] = "email";
        input["phone"] = "Phone";
        input["responseType"] = "ResponseType";


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



#### <a name="create_delete_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createDeleteAddress") createDeleteAddress

> To delete Address to your address book


```javascript
function createDeleteAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be deleted. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["addressSID"] = "AddressSID";
        input["responseType"] = "ResponseType";


		var result = AddressController.createDeleteAddress(input);
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



#### <a name="create_verify_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createVerifyAddress") createVerifyAddress

> Validates an address given.


```javascript
function createVerifyAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be verified. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["addressSID"] = "AddressSID";
        input["responseType"] = "ResponseType";


		var result = AddressController.createVerifyAddress(input);
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



#### <a name="create_list_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createListAddress") createListAddress

> List All Address 


```javascript
function createListAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | Return requested # of items starting the value, default=0, must be an integer |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressSID |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pageSize"] = 156;
        input["addressSID"] = "AddressSID";
        input["dateCreated"] = "DateCreated";
        input["responseType"] = "ResponseType";


		var result = AddressController.createListAddress(input);
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



#### <a name="create_view_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createViewAddress") createViewAddress

> View Address Specific address Book by providing the address id


```javascript
function createViewAddress(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be retrieved. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["addressSID"] = "AddressSID";
        input["responseType"] = "ResponseType";


		var result = AddressController.createViewAddress(input);
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

### <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

#### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="update_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.updatePhoneNumber") updatePhoneNumber

> Update Phone Number Details


```javascript
function updatePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | TODO: Add a parameter description |
| friendlyName |  ``` Optional ```  | TODO: Add a parameter description |
| voiceUrl |  ``` Optional ```  | URL requested once the call connects |
| voiceMethod |  ``` Optional ```  | TODO: Add a parameter description |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| hangupCallback |  ``` Optional ```  | TODO: Add a parameter description |
| hangupCallbackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | TODO: Add a parameter description |
| smsFallbackUrl |  ``` Optional ```  | URL requested once the call connects |
| smsFallbackMethod |  ``` Optional ```  | URL requested if the sms URL is not available |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phoneNumber"] = "PhoneNumber";
        input["friendlyName"] = "FriendlyName";
        input["voiceUrl"] = "VoiceUrl";
        input["voiceMethod"] = Object.keys(HttpAction)[0];
        input["voiceFallbackUrl"] = "VoiceFallbackUrl";
        input["voiceFallbackMethod"] = Object.keys(HttpAction)[0];
        input["hangupCallback"] = "HangupCallback";
        input["hangupCallbackMethod"] = Object.keys(HttpAction)[0];
        input["heartbeatUrl"] = "HeartbeatUrl";
        input["heartbeatMethod"] = Object.keys(HttpAction)[0];
        input["smsUrl"] = "SmsUrl";
        input["smsMethod"] = Object.keys(HttpAction)[0];
        input["smsFallbackUrl"] = "SmsFallbackUrl";
        input["smsFallbackMethod"] = Object.keys(HttpAction)[0];
        input["responseType"] = "ResponseType";


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



#### <a name="create_buy_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBuyNumber") createBuyNumber

> Buy Phone Number 


```javascript
function createBuyNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be purchase |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phoneNumber"] = "PhoneNumber";
        input["responseType"] = "ResponseType";


		var result = PhoneNumberController.createBuyNumber(input);
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



#### <a name="create_release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createReleaseNumber") createReleaseNumber

> Release number from account


```javascript
function createReleaseNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be relase |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phoneNumber"] = "PhoneNumber";
        input["responseType"] = "ResponseType";


		var result = PhoneNumberController.createReleaseNumber(input);
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



#### <a name="create_view_number_details"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createViewNumberDetails") createViewNumberDetails

> Get Phone Number Details


```javascript
function createViewNumberDetails(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Get Phone number Detail |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["phoneNumber"] = "PhoneNumber";
        input["responseType"] = "ResponseType";


		var result = PhoneNumberController.createViewNumberDetails(input);
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



#### <a name="create_list_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createListNumber") createListNumber

> List Account's Phone number details


```javascript
function createListNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| numberType |  ``` Optional ```  | TODO: Add a parameter description |
| friendlyName |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pageSize"] = 156;
        input["numberType"] = Object.keys(NumberType)[0];
        input["friendlyName"] = "FriendlyName";
        input["responseType"] = "ResponseType";


		var result = PhoneNumberController.createListNumber(input);
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



#### <a name="create_available_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createAvailablePhoneNumber") createAvailablePhoneNumber

> Available Phone Number


```javascript
function createAvailablePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | Number type either SMS,Voice or all |
| areaCode |  ``` Required ```  | Phone Number Area Code |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Page Size |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["numberType"] = Object.keys(NumberType)[0];
        input["areaCode"] = "AreaCode";
        input["pageSize"] = 156;
        input["responseType"] = "ResponseType";


		var result = PhoneNumberController.createAvailablePhoneNumber(input);
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

### <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

#### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RecordingController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_list_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createListRecording") createListRecording

> List out Recordings


```javascript
function createListRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| dateCreated |  ``` Optional ```  | TODO: Add a parameter description |
| callSid |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pageSize"] = 156;
        input["dateCreated"] = "DateCreated";
        input["callSid"] = "CallSid";
        input["responseType"] = "ResponseType";


		var result = RecordingController.createListRecording(input);
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



#### <a name="create_delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createDeleteRecording") createDeleteRecording

> Delete Recording Record


```javascript
function createDeleteRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording Sid to be delete |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["recordingSid"] = "RecordingSid";
        input["responseType"] = "ResponseType";


		var result = RecordingController.createDeleteRecording(input);
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



#### <a name="create_view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createViewRecording") createViewRecording

> View a specific Recording


```javascript
function createViewRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Search Recording sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["recordingSid"] = "RecordingSid";
        input["responseType"] = "ResponseType";


		var result = RecordingController.createViewRecording(input);
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

### <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

#### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SMSController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListInboundSMS") createListInboundSMS

> List All Inbound SMS


```javascript
function createListInboundSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound SMS |
| to |  ``` Optional ```  | To Number to get Inbound SMS |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pagesize"] = "pagesize";
        input["from"] = "from";
        input["to"] = "to";
        input["responseType"] = "ResponseType";


		var result = SMSController.createListInboundSMS(input);
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



#### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListSMS") createListSMS

> List All SMS


```javascript
function createListSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pagesize"] = 156;
        input["from"] = "from";
        input["to"] = "to";
        input["datesent"] = "datesent";
        input["responseType"] = "ResponseType";


		var result = SMSController.createListSMS(input);
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



#### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSendSMS") createSendSMS

> Send an SMS from a message360 number


```javascript
function createSendSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromcountrycode |  ``` Required ```  ``` DefaultValue ```  | From Country Code |
| from |  ``` Required ```  | SMS enabled Message360 number to send this message from |
| tocountrycode |  ``` Required ```  ``` DefaultValue ```  | To country code |
| to |  ``` Required ```  | Number to send the SMS to |
| body |  ``` Required ```  | Text Message To Send |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["fromcountrycode"] = 156;
        input["from"] = "from";
        input["tocountrycode"] = 156;
        input["to"] = "to";
        input["body"] = "body";
        input["method"] = Object.keys(HttpAction)[0];
        input["messagestatuscallback"] = "messagestatuscallback";
        input["responseType"] = "ResponseType";


		var result = SMSController.createSendSMS(input);
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



#### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMS") createViewSMS

> View a Particular SMS


```javascript
function createViewSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["messagesid"] = "messagesid";
        input["responseType"] = "ResponseType";


		var result = SMSController.createViewSMS(input);
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

### <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

#### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TranscriptionController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_audio_url_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createAudioURLTranscription") createAudioURLTranscription

> Audio URL Transcriptions


```javascript
function createAudioURLTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audioUrl |  ``` Required ```  | Audio url |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["audioUrl"] = "AudioUrl";
        input["responseType"] = "ResponseType";


		var result = TranscriptionController.createAudioURLTranscription(input);
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



#### <a name="create_recording_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createRecordingTranscription") createRecordingTranscription

> Recording Transcriptions


```javascript
function createRecordingTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["recordingSid"] = "RecordingSid";
        input["responseType"] = "ResponseType";


		var result = TranscriptionController.createRecordingTranscription(input);
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



#### <a name="create_view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createViewTranscription") createViewTranscription

> View Specific Transcriptions


```javascript
function createViewTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionSid |  ``` Required ```  | Unique Transcription ID |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["transcriptionSid"] = "TranscriptionSid";
        input["responseType"] = "ResponseType";


		var result = TranscriptionController.createViewTranscription(input);
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



#### <a name="create_list_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createListTranscription") createListTranscription

> Get All transcriptions


```javascript
function createListTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | TODO: Add a parameter description |
| pageSize |  ``` Optional ```  | TODO: Add a parameter description |
| status |  ``` Optional ```  | TODO: Add a parameter description |
| dateTranscribed |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["page"] = 156;
        input["pageSize"] = 156;
        input["status"] = Object.keys(Status)[0];
        input["dateTranscribed"] = "DateTranscribed";
        input["responseType"] = "ResponseType";


		var result = TranscriptionController.createListTranscription(input);
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

### <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

#### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UsageController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.createListUsage") createListUsage

> Get all usage 


```javascript
function createListUsage(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productCode |  ``` Required ```  ``` DefaultValue ```  | Product Code |
| startDate |  ``` Required ```  ``` DefaultValue ```  | Start Usage Date |
| endDate |  ``` Required ```  ``` DefaultValue ```  | End Usage Date |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UsageController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["productCode"] = Object.keys(ProductCode)[0];
        input["startDate"] = "startDate";
        input["endDate"] = "endDate";
        input["responseType"] = "ResponseType";


		var result = UsageController.createListUsage(input);
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

### <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

#### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	});
```

#### <a name="create_view_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.createViewAccount") createViewAccount

> Display Account Description


```javascript
function createViewAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountController,AudioDirection,MergeNumberStatus,ActivateStatus,SendEmailAs,Status,NumberType,Direction,InterruptedCallStatus,AudioFormat,ProductCode,IfMachine,HttpAction){
	    var input = [];
        input["date"] = "Date";
        input["responseType"] = "ResponseType";


		var result = AccountController.createViewAccount(input);
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



