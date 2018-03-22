# Getting started

Ytel API version 3

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `Ytel` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Ytel-Angular&projectName=Ytel)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Ytel-Angular)

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

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Ytel-Angular)

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
    <script src="scripts/Ytel/Module.js"></script>
    <script src="scripts/Ytel/Configuration.js"></script>
    <script src="scripts/Ytel/ModelFactory.js"></script>
    <script src="scripts/Ytel/ObjectMapper.js"></script>
    <script src="scripts/Ytel/APIHelper.js"></script>
    <script src="scripts/Ytel/Http/Client/HttpContext.js"></script>
    <script src="scripts/Ytel/Http/Client/HttpClient.js"></script>
    <script src="scripts/Ytel/Http/Request/HttpRequest.js"></script>
    <script src="scripts/Ytel/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/Ytel/Controllers/BaseController.js"></script>
    <script src="scripts/Ytel/Controllers/WebRTCController.js"></script>
    <script src="scripts/Ytel/Controllers/SharedShortCodeController.js"></script>
    <script src="scripts/Ytel/Controllers/ConferenceController.js"></script>
    <script src="scripts/Ytel/Controllers/PhoneNumberController.js"></script>
    <script src="scripts/Ytel/Controllers/TranscriptionController.js"></script>
    <script src="scripts/Ytel/Controllers/RecordingController.js"></script>
    <script src="scripts/Ytel/Controllers/EmailController.js"></script>
    <script src="scripts/Ytel/Controllers/SMSController.js"></script>
    <script src="scripts/Ytel/Controllers/CallController.js"></script>
    <script src="scripts/Ytel/Controllers/CarrierController.js"></script>
    <script src="scripts/Ytel/Controllers/AddressController.js"></script>
    <script src="scripts/Ytel/Controllers/SubAccountController.js"></script>
    <script src="scripts/Ytel/Controllers/AccountController.js"></script>
    <script src="scripts/Ytel/Controllers/UsageController.js"></script>
    <script src="scripts/Ytel/Controllers/ShortCodeController.js"></script>
    <script src="scripts/Ytel/Controllers/PostCardController.js"></script>
    <script src="scripts/Ytel/Controllers/LetterController.js"></script>
    <script src="scripts/Ytel/Controllers/AreaMailController.js"></script>


    <!-- Models -->
    <script src="scripts/Ytel/Models/BaseModel.js"></script>
    <script src="scripts/Ytel/Models/ErrorsModel.js"></script>
    <script src="scripts/Ytel/Models/MessageModel.js"></script>
    <script src="scripts/Ytel/Models/DirectionEnum.js"></script>
    <script src="scripts/Ytel/Models/NumberTypeEnum.js"></script>
    <script src="scripts/Ytel/Models/StatusEnum.js"></script>
    <script src="scripts/Ytel/Models/SendEmailAsEnum.js"></script>
    <script src="scripts/Ytel/Models/ActivateStatusEnum.js"></script>
    <script src="scripts/Ytel/Models/MergeNumberStatusEnum.js"></script>
    <script src="scripts/Ytel/Models/AudioDirectionEnum.js"></script>
    <script src="scripts/Ytel/Models/ProductCodeEnum.js"></script>
    <script src="scripts/Ytel/Models/HttpActionEnum.js"></script>
    <script src="scripts/Ytel/Models/IfMachineEnum.js"></script>
    <script src="scripts/Ytel/Models/TemplateDataModel.js"></script>
    <script src="scripts/Ytel/Models/InterruptedCallStatusEnum.js"></script>
    <script src="scripts/Ytel/Models/AudioFormatEnum.js"></script>
    <script src="scripts/Ytel/Models/ErrorModel.js"></script>

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
var app = angular.module('myApp', ['Ytel']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [Ytel]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



```js
var app = angular.module('myApp', [Ytel]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.basicAuthUserName = 'basicAuthUserName'; // The username to use with basic authentication
    Configuration.basicAuthPassword = 'basicAuthPassword'; // The password to use with basic authentication
    
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [WebRTCController](#web_rtc_controller)
* [SharedShortCodeController](#shared_short_code_controller)
* [ConferenceController](#conference_controller)
* [PhoneNumberController](#phone_number_controller)
* [TranscriptionController](#transcription_controller)
* [RecordingController](#recording_controller)
* [EmailController](#email_controller)
* [SMSController](#sms_controller)
* [CallController](#call_controller)
* [CarrierController](#carrier_controller)
* [AddressController](#address_controller)
* [SubAccountController](#sub_account_controller)
* [AccountController](#account_controller)
* [UsageController](#usage_controller)
* [ShortCodeController](#short_code_controller)
* [PostCardController](#post_card_controller)
* [LetterController](#letter_controller)
* [AreaMailController](#area_mail_controller)

## <a name="web_rtc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebRTCController") WebRTCController

### Get singleton instance

The singleton instance of the ``` WebRTCController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, WebRTCController){
	});
```

### <a name="create_token"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createToken") createToken

> Ytel webrtc


```javascript
function createToken(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your Ytel Account SID |
| authToken |  ``` Required ```  | Your Ytel Token |
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



### <a name="check_funds"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.checkFunds") checkFunds

> TODO: Add a method description


```javascript
function checkFunds(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your Ytel Account SID |
| authToken |  ``` Required ```  | Your Ytel Token |



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



[Back to List of Controllers](#list_of_controllers)

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
| templateId |  ``` Required ```  | The unique identifier for a template object |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['templateId'] = uniqid();
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
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| shortcode |  ``` Optional ```  | Only list messages sent from this Short Code |
| to |  ``` Optional ```  | Only list messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
        input['shortcode'] = 'Shortcode';
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
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |
| datecreated |  ``` Optional ```  | Only list messages sent with the specified date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
        input['from'] = 'from';
        input['shortcode'] = 'Shortcode';
        input['datecreated'] = 'Datecreated';


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

> Send an SMS from a Ytel ShortCode


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
        input['page'] = 149;
        input['pagesize'] = 149;
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

> Retrieve a list of keywords associated with your Ytel account.


```javascript
function listKeyword(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| keyword |  ``` Optional ```  | Only list keywords of keyword |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
        input['keyword'] = 'Keyword';
        input['shortcode'] = 149;


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
| shortcode |  ``` Required ```  | List of valid Shortcode to your Ytel account |
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

> Retrieve a list of shortcode assignment associated with your Ytel account.


```javascript
function listAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SharedShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
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
| shortcode |  ``` Required ```  | List of valid shortcode to your Ytel account |
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

> Retrieve information about a participant by its ParticipantSid.


```javascript
function viewParticipant(input)
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



### <a name="view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.viewConference") viewConference

> Retrieve information about a conference by its ConferenceSid.


```javascript
function viewConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier of each conference resource |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
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



### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantNumber |  ``` Required ```  | The phone number of the participant to be added. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantNumber'] = 'ParticipantNumber';
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



### <a name="create_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConference") createConference

> Here you can experiment with initiating a conference call through Ytel and view the request response generated when doing so.


```javascript
function createConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid 10-digit number (E.164 format) that will be initiating the conference call. |
| to |  ``` Required ```  | A valid 10-digit number (E.164 format) that is to receive the conference call. |
| url |  ``` Required ```  | URL requested once the conference connects |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the conference is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallbackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| record |  ``` Optional ```  | Specifies if the conference should be recorded. |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion. |
| recordCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once conference connects. |
| scheduleTime |  ``` Optional ```  | Schedule conference in future. Schedule time must be greater than current time |
| timeout |  ``` Optional ```  | The number of seconds the call stays on the line while waiting for an answer. The max time limit is 999 and the default limit is 60 seconds but lower times can be set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['fallbackUrl'] = 'FallbackUrl';
        input['fallbackMethod'] = Object.keys(HttpActionEnum)[0];
        input['record'] = true;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['scheduleTime'] = 'ScheduleTime';
        input['timeout'] = 149;


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

> Retrieve a list of participants for an in-progress conference.


```javascript
function listParticipant(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response format, xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
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

> Retrieve a list of conference objects.


```javascript
function listConference(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| dateCreated |  ``` Optional ```  | Conference created date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ConferenceController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
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

## <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PhoneNumberController){
	});
```

### <a name="available_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.availablePhoneNumber") availablePhoneNumber

> Retrieve a list of available phone numbers that can be purchased and used for your Ytel account.


```javascript
function availablePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numbertype |  ``` Required ```  | Number type either SMS,Voice or all |
| areacode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['numbertype'] = Object.keys(NumberTypeEnum)[0];
        input['areacode'] = 'areacode';
        input['responseType'] = 'ResponseType';
        input['pagesize'] = 149;


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



### <a name="mass_release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.massReleaseNumber") massReleaseNumber

> Remove a purchased Ytel number from your account.


```javascript
function massReleaseNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel comma separated numbers (E.164 format). |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.massReleaseNumber(input);
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

> Retrieve the details for a phone number by its number.


```javascript
function viewNumberDetails(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel 10-digit phone number (E.164 format). |
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

> Remove a purchased Ytel number from your account.


```javascript
function releaseNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
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

> Purchase a phone number to be used with your Ytel account


```javascript
function buyNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
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

> Update properties for a Ytel number that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function updatePhoneNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel number (E.164 format). |
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
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



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



### <a name="transfer_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.transferNumber") transferNumber

> Transfer phone number that has been purchased for from one account to another account.


```javascript
function transferNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
| fromaccountsid |  ``` Required ```  | A specific Accountsid from where Number is getting transfer. |
| toaccountsid |  ``` Required ```  | A specific Accountsid to which Number is getting transfer. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phonenumber'] = 'phonenumber';
        input['fromaccountsid'] = 'fromaccountsid';
        input['toaccountsid'] = 'toaccountsid';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.transferNumber(input);
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

> Retrieve a list of purchased phones numbers associated with your Ytel account.


```javascript
function listNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| numberType |  ``` Optional ```  | The capability supported by the number.Number type either SMS,Voice or all |
| friendlyName |  ``` Optional ```  | A human-readable label added to the number object. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pageSize'] = 149;
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



### <a name="mass_update_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.massUpdateNumber") massUpdateNumber

> Update properties for a Ytel numbers that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function massUpdateNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid comma(,) separated Ytel numbers. (E.164 format). |
| voiceUrl |  ``` Required ```  | The URL returning InboundXML incoming calls should execute when connected. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| friendlyName |  ``` Optional ```  | A human-readable value for labeling the number. |
| voiceMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceUrl once incoming call connects. |
| voiceFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML on a call or at initial request of the voice url |
| voiceFallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceFallbackUrl once incoming call connects. |
| hangupCallback |  ``` Optional ```  | URL that can be requested to receive notification when and how incoming call has ended. |
| hangupCallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HangupCallback URL. |
| heartbeatUrl |  ``` Optional ```  | URL that can be used to monitor the phone number. |
| heartbeatMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HeartbeatUrl. |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received. |
| smsMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the SmsUrl. |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



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


		var result = PhoneNumberController.massUpdateNumber(input);
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



### <a name="get_did_score_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.getDIDScoreNumber") getDIDScoreNumber

> Get DID Score Number


```javascript
function getDIDScoreNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | Specifies the multiple phone numbers for check updated spamscore . |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['phonenumber'] = 'Phonenumber';
        input['responseType'] = 'ResponseType';


		var result = PhoneNumberController.getDIDScoreNumber(input);
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



### <a name="bulk_buy_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.bulkBuyNumber") bulkBuyNumber

> Purchase a selected number of DID's from specific area codes to be used with your Ytel account.


```javascript
function bulkBuyNumber(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | The capability the number supports. |
| areaCode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| quantity |  ``` Required ```  | A positive integer that tells how many number you want to buy at a time. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| leftover |  ``` Optional ```  | If desired quantity is unavailable purchase what is available . |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PhoneNumberController){
        var input = [];
        input['numberType'] = Object.keys(NumberTypeEnum)[0];
        input['areaCode'] = 'AreaCode';
        input['quantity'] = 'Quantity';
        input['responseType'] = 'ResponseType';
        input['leftover'] = 'Leftover';


		var result = PhoneNumberController.bulkBuyNumber(input);
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

### <a name="view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.viewTranscription") viewTranscription

> Retrieve information about a transaction by its TranscriptionSid.


```javascript
function viewTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionsid |  ``` Required ```  | The unique identifier for a transcription object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['transcriptionsid'] = 'transcriptionsid';
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

> Transcribe a message360 recording by its RecordingSid.


```javascript
function recordingTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | The unique identifier for a recording object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['recordingSid'] = 'recordingSid';
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

> Transcribe an audio recording from a file.


```javascript
function audioURLTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audiourl |  ``` Required ```  | URL pointing to the location of the audio file that is to be transcribed. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['audiourl'] = 'audiourl';
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



### <a name="list_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.listTranscription") listTranscription

> Retrieve a list of transcription objects for your Ytel account.


```javascript
function listTranscription(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| status |  ``` Optional ```  | The state of the transcription. |
| dateTranscribed |  ``` Optional ```  | The date the transcription took place. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TranscriptionController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
        input['status'] = Object.keys(StatusEnum)[0];
        input['dateTranscribed'] = 'dateTranscribed';


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



[Back to List of Controllers](#list_of_controllers)

## <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RecordingController){
	});
```

### <a name="view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.viewRecording") viewRecording

> Retrieve the recording of a call by its RecordingSid. This resource will return information regarding the call such as start time, end time, duration, and so forth.


```javascript
function viewRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for the recording. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['recordingsid'] = 'recordingsid';
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

> Remove a recording from your Ytel account.


```javascript
function deleteRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for a recording. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['recordingsid'] = 'recordingsid';
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

> Retrieve a list of recording objects.


```javascript
function listRecording(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| datecreated |  ``` Optional ```  | Filter results by creation date |
| callsid |  ``` Optional ```  | The unique identifier for a call. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RecordingController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 149;
        input['pagesize'] = 149;
        input['datecreated'] = 'Datecreated';
        input['callsid'] = 'callsid';


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

> Remove an email from the spam email list.


```javascript
function deleteSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| email |  ``` Required ```  | A valid email address that is to be remove from the spam list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['email'] = 'Email';


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

> Remove an email from blocked emails list.


```javascript
function deleteBlock(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the blocked list. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'Email';
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
| email |  ``` Required ```  | A valid email address that is to be added to the unsubscribe list |
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

> Create and submit an email message to one or more email addresses.


```javascript
function sendEmail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| type |  ``` Required ```  ``` DefaultValue ```  | Specifies the type of email to be sent |
| subject |  ``` Required ```  | The subject of the mail. Must be a valid string. |
| message |  ``` Required ```  | The email message that is to be sent in the text. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| from |  ``` Optional ```  | A valid address that will send the email. |
| cc |  ``` Optional ```  | Carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| bcc |  ``` Optional ```  | Blind carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| attachment |  ``` Optional ```  | A file that is attached to the email. Must be less than 7 MB in size. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['to'] = 'To';
        input['type'] = Object.keys(SendEmailAsEnum)[0];
        input['subject'] = 'Subject';
        input['message'] = 'Message';
        input['responseType'] = 'ResponseType';
        input['from'] = 'From';
        input['cc'] = 'Cc';
        input['bcc'] = 'Bcc';
        input['attachment'] = 'Attachment';


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

> Remove an email address from the list of unsubscribed emails.


```javascript
function deleteUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the unsubscribe list. |
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

> Retrieve a list of email addresses from the unsubscribe list.


```javascript
function listUnsubscribes(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The starting point of the list of unsubscribed emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';


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

> Retrieve a list of invalid email addresses.


```javascript
function listInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The starting point of the list of invalid emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';


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

> Remove an email address from the bounced list.


```javascript
function deleteBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| email |  ``` Required ```  | The email address to be remove from the bounced email list. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['email'] = 'Email';


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

> Retrieve a list of emails that have bounced.


```javascript
function listBounces(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The starting point of the list of bounced emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';


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

> Retrieve a list of emails that are on the spam list.


```javascript
function listSpam(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The starting point of the list of spam emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';


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

> Retrieve a list of emails that have been blocked.


```javascript
function listBlocks(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The starting point of the list of blocked emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';


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

> Remove an email from the invalid email list.


```javascript
function deleteInvalid(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the invalid email list. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EmailController){
        var input = [];
        input['email'] = 'Email';
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

> Send an SMS from a Ytel number


```javascript
function sendSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | The 10-digit SMS-enabled Ytel number (E.164 format) in which the message is sent. |
| to |  ``` Required ```  | The 10-digit phone number (E.164 format) that will receive the message. |
| body |  ``` Required ```  | The body message that is to be sent in the text. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| smartsms |  ``` Optional ```  ``` DefaultValue ```  | Check's 'to' number can receive sms or not using Carrier API, if wireless = true then text sms is sent, else wireless = false then call is recieved to end user with audible message. |
| deliveryStatus |  ``` Optional ```  ``` DefaultValue ```  | Delivery reports are a method to tell your system if the message has arrived on the destination phone. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['body'] = 'Body';
        input['responseType'] = 'ResponseType';
        input['method'] = Object.keys(HttpActionEnum)[0];
        input['messageStatusCallback'] = 'MessageStatusCallback';
        input['smartsms'] = true;
        input['deliveryStatus'] = true;


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

> Retrieve a single SMS message object by its SmsSid.


```javascript
function viewSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['messageSid'] = 'MessageSid';
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

> Retrieve a list of Outbound SMS message objects.


```javascript
function listSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pageSize'] = 241;
        input['from'] = 'From';
        input['to'] = 'To';
        input['dateSent'] = 'DateSent';


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

> Retrieve a list of Inbound SMS message objects.


```javascript
function listInboundSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Filter sms message objects by this date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pageSize'] = 241;
        input['from'] = 'From';
        input['to'] = 'To';
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



### <a name="view_detail_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.viewDetailSMS") viewDetailSMS

> Retrieve a single SMS message object with details by its SmsSid.


```javascript
function viewDetailSMS(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SMSController){
        var input = [];
        input['messageSid'] = 'MessageSid';
        input['responseType'] = 'ResponseType';


		var result = SMSController.viewDetailSMS(input);
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

> You can experiment with initiating a call through Ytel and view the request response generated when doing so and get the response in json


```javascript
function makeCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Ytel should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Ytel should handle the receiving numbers voicemail machine |
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
        input['timeout'] = 241;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = true;
        input['record'] = true;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['transcribe'] = true;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';
        input['ifMachine'] = Object.keys(IfMachineEnum)[0];
        input['ifMachineUrl'] = 'IfMachineUrl';
        input['ifMachineMethod'] = Object.keys(HttpActionEnum)[0];
        input['feedback'] = true;
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
        input['length'] = 241;
        input['direction'] = Object.keys(DirectionEnum)[0];
        input['mix'] = true;


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

> Start or stop recording of an in-progress voice call.


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
        input['record'] = true;
        input['responseType'] = 'ResponseType';
        input['direction'] = Object.keys(DirectionEnum)[0];
        input['timeLimit'] = 241;
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

> Add audio voice effects to the an in-progress voice call.


```javascript
function voiceEffect(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the in-progress voice call. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| audioDirection |  ``` Optional ```  | The direction the audio effect should be placed on. If IN, the effects will occur on the incoming audio stream. If OUT, the effects will occur on the outgoing audio stream. |
| pitchSemiTones |  ``` Optional ```  | Set the pitch in semitone (half-step) intervals. Value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | Set the pitch in octave intervals.. Value between -1 and 1 |
| pitch |  ``` Optional ```  | Set the pitch (lowness/highness) of the audio. The higher the value, the higher the pitch. Value greater than 0 |
| rate |  ``` Optional ```  | Set the rate for audio. The lower the value, the lower the rate. value greater than 0 |
| tempo |  ``` Optional ```  | Set the tempo (speed) of the audio. A higher value denotes a faster tempo. Value greater than 0 |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['callSid'] = 'CallSid';
        input['responseType'] = 'ResponseType';
        input['audioDirection'] = Object.keys(AudioDirectionEnum)[0];
        input['pitchSemiTones'] = 241.457011092667;
        input['pitchOctaves'] = 241.457011092667;
        input['pitch'] = 241.457011092667;
        input['rate'] = 241.457011092667;
        input['tempo'] = 241.457011092667;


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
| callSid |  ``` Required ```  | The unique identifier for voice call that is in progress. |
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



### <a name="list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.listCalls") listCalls

> A list of calls associated with your Ytel account


```javascript
function listCalls(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Filter calls that were sent to this 10-digit number (E.164 format). |
| from |  ``` Optional ```  | Filter calls that were sent from this 10-digit number (E.164 format). |
| dateCreated |  ``` Optional ```  | Return calls that are from a specified date. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pageSize'] = 241;
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

> Initiate an outbound Ringless Voicemail through Ytel.


```javascript
function sendRinglessVM(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| rVMCallerId |  ``` Required ```  | A required secondary Caller ID for RVM to work. |
| to |  ``` Required ```  | A valid number (E.164 format) that will receive the phone call. |
| voiceMailURL |  ``` Required ```  | The URL requested once the RVM connects. A set of default parameters will be sent here. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statsCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |



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

> Retrieve a single voice call’s information by its CallSid.


```javascript
function viewCall(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | The unique identifier for the voice call. |
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



### <a name="view_call_detail"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.viewCallDetail") viewCallDetail

> Retrieve a single voice call’s information by its CallSid.


```javascript
function viewCallDetail(callSid, responseType)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the voice call. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CallController){
        var callSid = 'callSid';
        var responseType = 'ResponseType';


		var result = CallController.viewCallDetail(callSid, responseType);
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
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information. |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) we should wait while the call is ringing before canceling the call |
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
        input['timeout'] = 241;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = 'HideCallerId';
        input['record'] = true;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpActionEnum)[0];
        input['transcribe'] = true;
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



[Back to List of Controllers](#list_of_controllers)

## <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CarrierController){
	});
```

### <a name="carrier_lookup_list"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.carrierLookupList") carrierLookupList

> Retrieve a list of carrier lookup objects.


```javascript
function carrierLookupList(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pageSize'] = 241;


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
| phoneNumber |  ``` Required ```  | A valid 10-digit number (E.164 format). |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarrierController){
        var input = [];
        input['phoneNumber'] = 'PhoneNumber';
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
| addressid |  ``` Required ```  | The identifier of the address to be retrieved. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressid'] = 'addressid';
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
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressid |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pagesize'] = 241;
        input['addressid'] = 'addressid';
        input['dateCreated'] = 'dateCreated';


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
| addressid |  ``` Required ```  | The identifier of the address to be verified. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressid'] = 'addressid';
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
| addressid |  ``` Required ```  | The identifier of the address to be deleted. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AddressController){
        var input = [];
        input['addressid'] = 'addressid';
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
| friendlyName |  ``` Required ```  | Descriptive name of the sub account |
| password |  ``` Required ```  | The password of the sub account.  Please make sure to make as password that is at least 8 characters long, contain a symbol, uppercase and a number. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SubAccountController){
        var input = [];
        input['firstName'] = 'FirstName';
        input['lastName'] = 'LastName';
        input['email'] = 'Email';
        input['friendlyName'] = 'FriendlyName';
        input['password'] = 'Password';
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

> Retrieve information regarding your Ytel account by a specific date. The response object will contain data such as account status, balance, and account usage totals.


```javascript
function viewAccount(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | Filter account information based on date. |
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

## <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UsageController){
	});
```

### <a name="list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.listUsage") listUsage

> Retrieve usage metrics regarding your Ytel account. The results includes inbound/outbound voice calls and inbound/outbound SMS messages as well as carrier lookup requests.


```javascript
function listUsage(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| productCode |  ``` Optional ```  ``` DefaultValue ```  | Filter usage results by product type. |
| startDate |  ``` Optional ```  ``` DefaultValue ```  | Filter usage objects by start date. |
| endDate |  ``` Optional ```  ``` DefaultValue ```  | Filter usage objects by end date. |
| includeSubAccounts |  ``` Optional ```  | Will include all subaccount usage data |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UsageController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['productCode'] = Object.keys(ProductCodeEnum)[0];
        input['startDate'] = 'startDate';
        input['endDate'] = 'endDate';
        input['includeSubAccounts'] = 'IncludeSubAccounts';


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
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent.GET or POST |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['shortcode'] = 241;
        input['to'] = 241.457011092667;
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
        input['dateSent'] = 'DateSent';
        input['page'] = 241;
        input['pageSize'] = 241;


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

> Retrive a list of inbound Sms Short Code messages associated with your Ytel account.


```javascript
function listInboundShortcode(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Only list SMS messages sent from this number |
| shortcode |  ``` Optional ```  | Only list SMS messages sent to Shortcode |
| datecreated |  ``` Optional ```  | Only list SMS messages sent in the specified date MAKE REQUEST |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pagesize'] = 241;
        input['from'] = 'From';
        input['shortcode'] = 'Shortcode';
        input['datecreated'] = 'Datecreated';


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



### <a name="view_dedicated_shortcode_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.viewDedicatedShortcodeAssignment") viewDedicatedShortcodeAssignment

> Retrieve a single Short Code object by its shortcode assignment.


```javascript
function viewDedicatedShortcodeAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Dedicated Short Code to your Ytel account |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['shortcode'] = 'Shortcode';
        input['responseType'] = 'ResponseType';


		var result = ShortCodeController.viewDedicatedShortcodeAssignment(input);
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



### <a name="update_dedicated_short_code_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.updateDedicatedShortCodeAssignment") updateDedicatedShortCodeAssignment

> Update a dedicated shortcode.


```javascript
function updateDedicatedShortCodeAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid dedicated shortcode to your Ytel account. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| friendlyName |  ``` Optional ```  | User generated name of the dedicated shortcode. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['shortcode'] = 'Shortcode';
        input['responseType'] = 'ResponseType';
        input['friendlyName'] = 'FriendlyName';
        input['callbackMethod'] = 'CallbackMethod';
        input['callbackUrl'] = 'CallbackUrl';
        input['fallbackMethod'] = 'FallbackMethod';
        input['fallbackUrl'] = 'FallbackUrl';


		var result = ShortCodeController.updateDedicatedShortCodeAssignment(input);
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



### <a name="list_short_code_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.listShortCodeAssignment") listShortCodeAssignment

> Retrieve a list of Short Code assignment associated with your Ytel account.


```javascript
function listShortCodeAssignment(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |
| shortcode |  ``` Optional ```  | Only list Short Code Assignment sent from this Short Code |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ShortCodeController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['shortcode'] = 'Shortcode';
        input['page'] = 'page';
        input['pagesize'] = 'pagesize';


		var result = ShortCodeController.listShortCodeAssignment(input);
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

## <a name="post_card_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PostCardController") PostCardController

### Get singleton instance

The singleton instance of the ``` PostCardController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PostCardController){
	});
```

### <a name="view_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.viewPostcard") viewPostcard

> Retrieve a postcard object by its PostcardId.


```javascript
function viewPostcard(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier for a postcard object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var input = [];
        input['postcardid'] = 'postcardid';
        input['responseType'] = 'ResponseType';


		var result = PostCardController.viewPostcard(input);
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



### <a name="create_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.createPostcard") createPostcard

> Create, print, and mail a postcard to an address. The postcard front must be supplied as a PDF, image, or an HTML string. The back can be a PDF, image, HTML string, or it can be automatically generated by supplying a custom message.


```javascript
function createPostcard(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing postcard by attaching its PostcardId. |
| front |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the front of the postcard.  This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| back |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the back of the postcard, supplied as a URL, local file, or HTML string.  This allows you to customize your back design, but we will still insert the recipient address for you. |
| message |  ``` Required ```  | The message for the back of the postcard with a maximum of 350 characters. |
| setting |  ``` Required ```  | Code for the dimensions of the media to be printed. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| description |  ``` Optional ```  | A description for the postcard. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['attachbyid'] = 'attachbyid';
        input['front'] = 'front';
        input['back'] = 'back';
        input['message'] = 'message';
        input['setting'] = 'setting';
        input['responseType'] = 'ResponseType';
        input['description'] = 'description';
        input['htmldata'] = 'htmldata';


		var result = PostCardController.createPostcard(input);
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



### <a name="list_postcards"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.listPostcards") listPostcards

> Retrieve a list of postcard objects. The postcards objects are sorted by creation date, with the most recently created postcards appearing first.


```javascript
function listPostcards(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| postcardid |  ``` Optional ```  | The unique identifier for a postcard object. |
| dateCreated |  ``` Optional ```  | The date the postcard was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pagesize'] = 241;
        input['postcardid'] = 'postcardid';
        input['dateCreated'] = 'dateCreated';


		var result = PostCardController.listPostcards(input);
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



### <a name="delete_postcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.deletePostcard") deletePostcard

> Remove a postcard object.


```javascript
function deletePostcard(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier of a postcard object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PostCardController){
        var input = [];
        input['postcardid'] = 'postcardid';
        input['responseType'] = 'ResponseType';


		var result = PostCardController.deletePostcard(input);
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

## <a name="letter_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LetterController") LetterController

### Get singleton instance

The singleton instance of the ``` LetterController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, LetterController){
	});
```

### <a name="view_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.viewLetter") viewLetter

> Retrieve a letter object by its LetterSid.


```javascript
function viewLetter(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var input = [];
        input['lettersid'] = 'lettersid';
        input['responseType'] = 'ResponseType';


		var result = LetterController.viewLetter(input);
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



### <a name="create_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetter") createLetter

> Create, print, and mail a letter to an address. The letter file must be supplied as a PDF or an HTML string.


```javascript
function createLetter(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing letter by attaching its LetterId. |
| file |  ``` Required ```  | File can be a 8.5"x11" PDF uploaded file or URL that links to a file. |
| color |  ``` Required ```  | Specify if letter should be printed in color. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| description |  ``` Optional ```  | A description for the letter. |
| extraservice |  ``` Optional ```  | Add an extra service to your letter. Options are "certified" or "registered". Certified provides tracking and delivery confirmation for domestic destinations and is an additional $5.00. Registered provides tracking and confirmation for international addresses and is an additional $16.50. |
| doublesided |  ``` Optional ```  | Specify if letter should be printed on both sides. |
| template |  ``` Optional ```  | Boolean that defaults to true. When set to false, this specifies that your letter does not follow the m360 address template. In this case, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['attachbyid'] = 'attachbyid';
        input['file'] = 'file';
        input['color'] = 'color';
        input['responseType'] = 'ResponseType';
        input['description'] = 'description';
        input['extraservice'] = 'extraservice';
        input['doublesided'] = 'doublesided';
        input['template'] = 'template';
        input['htmldata'] = 'htmldata';


		var result = LetterController.createLetter(input);
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



### <a name="list_letters"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.listLetters") listLetters

> Retrieve a list of letter objects. The letter objects are sorted by creation date, with the most recently created letters appearing first.


```javascript
function listLetters(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| lettersid |  ``` Optional ```  | The unique identifier for a letter object. |
| dateCreated |  ``` Optional ```  | The date the letter was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pagesize'] = 241;
        input['lettersid'] = 'lettersid';
        input['dateCreated'] = 'dateCreated';


		var result = LetterController.listLetters(input);
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



### <a name="delete_letter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.deleteLetter") deleteLetter

> Remove a letter object by its LetterId.


```javascript
function deleteLetter(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LetterController){
        var input = [];
        input['lettersid'] = 'lettersid';
        input['responseType'] = 'ResponseType';


		var result = LetterController.deleteLetter(input);
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

## <a name="area_mail_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AreaMailController") AreaMailController

### Get singleton instance

The singleton instance of the ``` AreaMailController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AreaMailController){
	});
```

### <a name="create_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreaMail") createAreaMail

> Create a new AreaMail object.


```javascript
function createAreaMail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routes |  ``` Required ```  | List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route.List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route. A carrier route is in the form of 92610-C043 where the carrier route is composed of 5 numbers for zipcode, 1 letter for carrier route type, and 3 numbers for carrier route code. Delivery can be sent to mutliple routes by separating them with a commas. Valid Values: 92656, 92610-C043 |
| attachbyid |  ``` Required ```  | Set an existing areamail by attaching its AreamailId. |
| front |  ``` Required ```  | The front of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. Back required |
| back |  ``` Required ```  | The back of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| description |  ``` Optional ```  | A string value to use as a description for this AreaMail item. |
| targettype |  ``` Optional ```  | The delivery location type. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var input = [];
        input['routes'] = 'routes';
        input['attachbyid'] = 'attachbyid';
        input['front'] = 'front';
        input['back'] = 'back';
        input['responseType'] = 'ResponseType';
        input['description'] = 'description';
        input['targettype'] = 'targettype';
        input['htmldata'] = 'htmldata';


		var result = AreaMailController.createAreaMail(input);
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



### <a name="view_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.viewAreaMail") viewAreaMail

> Retrieve an AreaMail object by its AreaMailId.


```javascript
function viewAreaMail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var input = [];
        input['areamailid'] = 'areamailid';
        input['responseType'] = 'ResponseType';


		var result = AreaMailController.viewAreaMail(input);
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



### <a name="list_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.listAreaMail") listAreaMail

> Retrieve a list of AreaMail objects.


```javascript
function listAreaMail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| areamailsid |  ``` Optional ```  | The unique identifier for an AreaMail object. |
| dateCreated |  ``` Optional ```  | The date the AreaMail was created. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var input = [];
        input['responseType'] = 'ResponseType';
        input['page'] = 241;
        input['pagesize'] = 241;
        input['areamailsid'] = 'areamailsid';
        input['dateCreated'] = 'dateCreated';


		var result = AreaMailController.listAreaMail(input);
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



### <a name="delete_area_mail"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.deleteAreaMail") deleteAreaMail

> Remove an AreaMail object by its AreaMailId.


```javascript
function deleteAreaMail(input)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AreaMailController){
        var input = [];
        input['areamailid'] = 'areamailid';
        input['responseType'] = 'ResponseType';


		var result = AreaMailController.deleteAreaMail(input);
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



