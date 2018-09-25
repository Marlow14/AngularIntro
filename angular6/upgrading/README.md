# Upgrading

This tutorial walks you through upgrading the `Phonecat` app written in AngularJS to Angular using the Angular CLI.

## Step 1: Generate New Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4 using the following steps.

```bash
ng new upgrading
cd upgrading
```

_Note that you will not need to do these steps for the tutorial as the project has already been created._
**Instead:**

1.  Open a command-prompt or terminal to the `upgrading` folder.

2.  Checkout the branch `step-1-new-angular-project`

```bash
git checkout step-1-new-angular-project -f
git clean -fd
```

3.  Create a new git branch of the project to work in and check it out.

```bash
git branch working
git checkout working
```

4.  Install the dependencies (JavaScript libraries).

```bash
npm install
```

5.  Serve the Angular CLI project to verify it is working

```bash
npm start -- -o
```

A browser should open and show the message:

```git
Welcome to app!
```

_Using the existing directory has the following advantages_

* The `angular-cli` does not need to be installed globally.
* This readme and the associated screenshots are available in the project.
* We can use git to `diff` our `working` branch code with the completed code for each step in the process.

To see the available branches.

```git
git branch
```

## Step 2: Create Angular and AngularJS folders

1.  In `src` folder create two folders `angular` and `angularjs`.

1.  Move everything inside `src` except the `angular` and `angularjs` folders created in the prior step into the `angular` folder.

1.  Copy these four files from `src\angular\app` back out into `src`.
    * favicon.ico
    * index.html
    * tsconfig.app.json
    * tsconfig.spec.json

<div style="page-break-after: always;"></div>

## Step 3: Copy AngularJS project

1.  Note that there is already a `bower_components` folder in `angular-phonecat\app`.

_If you download your own copy of angular-phonecat you would need to first run `npm install` which creates this folder._

2.  Copy the contents of `angular-phonecat\app` into `upgrading\src\angularjs`.
3.  Merge `upgrading\src\angularjs\index.html` into `upgrading\src\index.html` as shown below:

```diff
 <!doctype html>
 <html lang="en">
 <head>
   <meta charset="utf-8">
   <title>Upgrading</title>
   <base href="/">

   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="icon" type="image/x-icon" href="favicon.ico">

+  <link rel="stylesheet" href="angularjs/bower_components/bootstrap/dist/css/bootstrap.css" />
+  <link rel="stylesheet" href="angularjs/app.css" />
+  <link rel="stylesheet" href="angularjs/app.animations.css" />
+
+  <script src="angularjs/bower_components/jquery/dist/jquery.js"></script>
+  <script src="angularjs/bower_components/angular/angular.js"></script>
+  <script src="angularjs/bower_components/angular-animate/angular-animate.js"></script>
+  <script src="angularjs/bower_components/angular-resource/angular-resource.js"></script>
+  <script src="angularjs/bower_components/angular-route/angular-route.js"></script>
+  <script src="angularjs/app.module.js"></script>
+  <script src="angularjs/app.config.js"></script>
+  <script src="angularjs/app.animations.js"></script>
+  <script src="angularjs/core/core.module.js"></script>
+  <script src="angularjs/core/checkmark/checkmark.filter.js"></script>
+  <script src="angularjs/core/phone/phone.module.js"></script>
+  <script src="angularjs/core/phone/phone.service.js"></script>
+  <script src="angularjs/phone-list/phone-list.module.js"></script>
+  <script src="angularjs/phone-list/phone-list.component.js"></script>
+  <script src="angularjs/phone-detail/phone-detail.module.js"></script>
+  <script src="angularjs/phone-detail/phone-detail.component.js"></script>

 </head>
-<body>
+<body ng-app="phonecatApp">

+  <div class="view-container">
+    <div ng-view class="view-frame"></div>
+  </div>

   <app-root></app-root>
 </body>
 </html>
```

When finished with the merge delete `upgrading\src\angularjs\index.html`.

<div style="page-break-after: always;"></div>

4.  Modify `.angular-cli.json` to recognize the new directory structure.

```diff
 {
       "root": "src",
       "outDir": "dist",
-      "assets": [
-        "assets",
-        "favicon.ico"
-      ],
+      "assets": ["angularjs", "assets", "favicon.ico"],
       "index": "index.html",
-      "main": "main.ts",
-      "polyfills": "polyfills.ts",
-      "test": "test.ts",
+      "main": "angular/main.ts",
+      "polyfills": "angular/polyfills.ts",
+      "test": "angular/test.ts",
       "tsconfig": "tsconfig.app.json",
       "testTsconfig": "tsconfig.spec.json",
       "prefix": "app",
-      "styles": [
-        "styles.css"
-      ],
+      "styles": ["angular/styles.css"],
       "scripts": [],
       "environmentSource": "environments/environment.ts",
       "environments": {
-        "dev": "environments/environment.ts",
-        "prod": "environments/environment.prod.ts"
+        "dev": "angular/environments/environment.ts",
+        "prod": "angular/environments/environment.prod.ts"
       }
     }
   ],
```

5.  Append `angularjs/` to the paths in these files in the `src\angularjs` directory.

* `core\phone\phone.service.js`
  * change ~~`"phones/:phoneId.json",`~~ to `"angularjs/phones/:phoneId.json",`
* `phone-list\phone-list.component.js`
  * change ~~`templateUrl: "phone-list/phone-list.template.html",`~~ to `templateUrl: "angularjs/phone-list/phone-list.template.html",`
* `phone-list\phone-list.template.html`
  * change ~~`<img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />`~~ to `<img ng-src="angularjs/{{phone.imageUrl}}" alt="{{phone.name}}" />`
* `phone-detail\phone-detail.component.js`
  * change ~~`templateUrl: "phone-detail/phone-detail.template.html",`~~ to `templateUrl: "angularjs/phone-detail/phone-detail.template.html",`
* `phone-detail.template.html`

  * change ~~`{{img}}`~~ to `angularjs/{{img}}`
    _Note there are two instances of `{{img}}` in the template on line 2 and 12._

6.  If not already running, run the application

```shell
npm start -- -o
```

You should see both the Angular and AngularJS application rendered when the page loads as shown below.

* _Note: You will need to scroll down the page to see the Angular application_

![Figure 1][figure-1]

[figure-1]: readme-assets/together.png

_As those two applications are bootstrapped separately, they are not able to communicate with each other or to exchange services and components. To make this work, we have to bootstrap them together as a hybrid application. The next section show how to do this._

<div style="page-break-after: always;"></div>

## Step 4: Bootstrap AngularJS & Angular Hybrid Application

1.  To bootstrap one application with both AngularJS and Angular we can leverage `ngUpgrade` which is part of Angular:

Open another command-prompt or terminal to the `upgrading` directory and run this command.

```shell
npm install @angular/upgrade@5.2.0 --save
```

2.  In `index.html`

We don't want to bootstrap the Angular application on its own at this point, so we will comment out it's root component in `src\index.html`.

```html
<!-- <app-root></app-root> -->
```

3.  In `angular\app\app.module.ts` comment out the bootstrap of the `AppComponent`

```ts
// bootstrap: [AppComponent]
```

4.  To prevent bootstrapping the AngularJS application remove the `ng-app` directive.

* Remove: <body ~~ng-app="phonecatApp"~~>

5.  Add the `UpgradeModule` to the list of Angular module imports.

`angular\app\app.module.ts`

```diff
+ import { UpgradeModule } from "@angular/upgrade/static";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
+ UpgradeModule],
  providers: []
  // bootstrap: [AppComponent]
})
```

...and bootstrap the hybrid application in the `AppModule` class.

```ts
...
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ["phonecatApp"], { strictDi: true });
  }
}
```

6.  The Angular application needs to be restarted to recognize the `UpgradeModule` and bootstrap itself appropriately.
    Use Ctrl+C (Windows) or Cmd+C (Mac) to stop the web server.

7.  Run the application.

```shell
npm start -- -o
```

You should see just AngularJS application rendered when the page loads as shown below.

![Figure 2][figure-2]

[figure-2]: readme-assets/justangularjs.png

* _Note: Even though we only see the AngularJS application it is a hybrid application. To prove this, the next section shows how to use an Angular component within the shown AngularJS component_

<div style="page-break-after: always;"></div>

## Step 5: Downgrading An Angular Component

1.  Create file `src\angular\app\widget\widget.componentfini.ts`. Note that you will need to create the `widget` directory.

2.  Add this code to create an `Angular` component

```ts
import { Component } from "@angular/core";
@Component({
  selector: "app-widget",
  template: `
    <h3>Angular Widget</h3>
  `
})
export class WidgetComponent {}
```

3.  In `src\app\angular\app.module.ts`, downgrade the _Angular_ `WidgetComponent` to an _AngularJS_ component

```ts
import { UpgradeModule, downgradeComponent } from "@angular/upgrade/static";
import { WidgetComponent } from "./widget/widget.component";

declare var angular: any;
angular
  .module("phonecatApp")
  .directive("appWidget", downgradeComponent({ component: WidgetComponent }));
```

_Be sure to use camel-case the `appWidget` when registering the directive name above. This translates to the \_dasherized_ syntax: `<app-widget></app-widget` in the template.\_

...and add the `WidgetComponent` to the `AppModule` declarations and as an entry component.

```diff
@NgModule({
  declarations: [AppComponent,
+ WidgetComponent],
  imports: [BrowserModule, UpgradeModule],
+ entryComponents: [WidgetComponent],
  providers: []
  // bootstrap: [AppComponent]
})
export class AppModule {
  ...
```

_As you see in this sample, the downgraded component is registered as a `directive` within the AngularJS module. For this, we can leverage the global angular variable. In order to tell TypeScript about this preexisting variable, we have to use the `declare` keyword._

4.  After this, we can call the Angular Component within an AngularJS template. Place the widget below the select list for sorting phones.

`src/angularjs/phone-list/phone-list.template.html`

```html
...
</select>
</p>


 <p>
        <!-- Angular Component -->
        <app-widget></app-widget>
</p>
```

5.  Open the application in the browser and you should see the _Angular_ widget hosted inside the _AngularJS_ component as shown below.

![Angular Widget][widget]

[widget]: readme-assets/widget.png

<div style="page-break-after: always;"></div>

## Step 6: Upgrading an AngularJS Service

In order to use an existing AngularJS service within a new Angular Component, we have to upgrade it.

1.  We have to create an Angular service provider which uses a factory. This factory gets a reference to the AngularJS injector ($injector) and uses it to obtain the service in question. We do this in a new file `phone.service.ts`. Create the file at the path shown below and add the code to the new file.

`src\angular\app\phones\shared\phone.service.ts`

```ts
import { InjectionToken } from "@angular/core";

export const PHONE_SERVICE = new InjectionToken<any>("PHONE_SERVICE");

function createPhoneService(injector) {
  return injector.get("Phone");
}

export const phoneServiceProvider = {
  provide: PHONE_SERVICE,
  useFactory: createPhoneService,
  deps: ["$injector"]
};
```

_Normally, we could use the service's type as the dependency injection token defined by the provide property. But in this case we explicitly decided to not upgrade the existing AngularJS 1.x code to TypeScript and so we don't have any type for it. Because of this, this sample uses a constant based Token called `PHONE_SERVICE`. For such tokens Angular 4+ provides the type `InjectionToken`. In Angular 2 we would use `OpaqueToken` instead. The `InjectionToken` takes a type parameter which identifies the type of the service it is pointing to. As mentioned, we don't have a type for this service and so we are just going with `any`. Note: the `injector` is getting the phone from `src\angularjs\core\phone\phone.service.js`._

2.Register the service provider with the Angular module.

`src\angular\app\app.module.ts`

```ts
[...]
import { phoneServiceProvider } from "ng2/app/phone.service";

[...]

@NgModule({
  [...],
  providers: [
    phoneServiceProvider
  ]
})
export class AppModule {
  [...]
}
```

3.  Inject the upgraded `phoneService` into the Angular `WidgetComponent` and show a count of the phones.

`src\angular\app\widget\widget.component.ts`

```ts
import { Component, Inject, OnInit } from "@angular/core";
import { PHONE_SERVICE } from "../phones/shared/phone.service";
@Component({
  selector: "app-widget",
  template: `
    <h3>Angular Widget</h3>
    <p>
      {{phones.length}} phones found.
    </p>
  `
})
export class WidgetComponent implements OnInit {
  phones: any[] = [];

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) {}

  ngOnInit(): void {
    this.phones = this.phoneService.query();
  }
}
```

Run the application and you should see a count of phones in the Angular Widget as shown below.

![Upgrade Service][upgrade-service]

[upgrade-service]: readme-assets/upgrade-service.png

_We now have an AngularJS component with an Angular Component that is displaying data from an AngularJS service._

Instead of nesting AngularJS and Angular stuff, we also need the possibility to activate routes from both versions. We will explore this in the next couple sections.

<div style="page-break-after: always;"></div>

## Step 7: Routing to Angular Components (using the AngularJS Router)

Making the AngularJS Router activate Angular components is quite easy.

1.  Configure a route with a template that points to the component in question.

`src\angularjs\app.config.js`

```diff
angular.module("phonecatApp").config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>"
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>"
      })
+      .when("/widget", {
+        template: "<app-widget></app-widget>"
+      })
      .otherwise("/phones");
  }
]);
```

2.  Open the application and change the url from: http://localhost:4200/#!/phones to: http://localhost:4200/#!/widget
    and you should see just the widget rendered as shown below.

![widget-via-route][widget-via-route]

[widget-via-route]: readme-assets/widget-via-route.png

While this solution is very easy, it also comes with a drawback. We cannot leverage the new Angular Router for the newly written components. We will explore how we can use the Angular Router in the next sections.

<div style="page-break-after: always;"></div>

## Step 8: AngularJS Views inside the Root Angular Component

1.  In src\index.html and the Angular root component (`AppComponent`) and remove the `ng-view` directive.

```diff
<body>
-  <div class="view-container">
-    <div ng-view class="view-frame"></div>
-  </div>
+  <app-root></app-root>
</body>
```

2.  Open `src\app.component.html`

* delete everything in the file
* add the `ng-view` directive as shown below

```html
<div class="view-container">
 <div ng-view class="view-frame"></div>
</div>
```

3.  Bootstrap `AppComponent` in `AppModule`

```diff
@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [BrowserModule, UpgradeModule],
  entryComponents: [WidgetComponent],
  providers: [phoneServiceProvider],
+  bootstrap: [AppComponent]
})
export class AppModule {}
```

4.  Remove the following code from AppModule

* inject `upgradeModule`
* bootstrap application manually

```diff
export class AppModule {
-  constructor(private upgrade: UpgradeModule) {}
-  ngDoBootstrap() {
-    this.upgrade.bootstrap(document.body, ["phonecatApp"], { strictDi: true -});
-  }
}
```

5.  Add code to bootstrap the application in the `ngOnInit` lifecycle hook of the `AppComponent` to manually bootstrap the application.

```ts
export class AppComponent implements OnInit {
  constructor(private upgrade: UpgradeModule) {}

  ngOnInit(): void {
    this.upgrade.bootstrap(document.body, ["phonecatApp"]);
  }
}
```

_Be sure you are implementing the component lifecycle hook `ngOnInit` and NOT `ngDoBoostrap` as we did in the module._

6.  Reload the application and see the Angular application component contains the ng-view and is hosting the AngularJS application.

![App Root][app-root]

[app-root]: readme-assets/app-root-parent.png

<div style="page-break-after: always;"></div>

## Step 9: Sibling Routers

1.  Add the Angular directive `router-outlet`

`src/angular/app/app.component.html`

```diff
<div class="view-container">
     <div ng-view class="view-frame"></div>
+    <router-outlet></router-outlet>
 </div>
```

_You can ignore the error message 'router-outlet' is not a known element. It will be gone after we complete the next few steps._

2.  Configure the Angular Router.

`src\angular\app\app.module.ts`

```diff
+ import { WidgetComponent } from "./widget/widget.component";
+ import { RouterModule } from "@angular/router";

angular.module('phonecatApp')
   .directive(
     'ng2Demo',angular.module('phonecatApp')
   ],
   imports: [
     BrowserModule,
    UpgradeModule,
+    RouterModule.forRoot([
+      {
+        path: "widget",
+        component: WidgetComponent
+      }
+    ],
+    {
+      useHash: true
+    }
+    )
   ],
   entryComponents: [
     Ng2DemoComponent // Don't forget this!!!
   ],
   providers: [
    phoneServiceProvider
   ],
   bootstrap: [AppComponent]
 })
```

3.  Create a custom url handling strategy class to inform the router which routes should be handled by the AngularJS router and which should be handled by the Angular router.

`src\angular\app\app.module.ts`

```ts
...
import { RouterModule, UrlHandlingStrategy } from "@angular/router";

class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/widget") || url.toString() === "/";
  }
  extract(url) {
    return url;
  }
  merge(url, whole) {
    return url;
  }
}
```

4.  Provide the `CustomUrlHandlingStrategy`.

`src\angular\app\app.module.ts`

```diff
...
entryComponents: [
     Ng2DemoComponent // Don't forget this!!!
   ],
   providers: [
    phoneServiceProvider,
+    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
   ],
...
```

5.  Remove the hashPrefix ! from AngularJS router configuration as well as the route for the widget (since it is now configured in the Angular router) and have the default route redirect to an empty template.

`src\angularjs\app.config.js`

```ts
angular.module("phonecatApp").config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix("!");

    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>"
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>"
      })
      // .when("/widget", {
      //   template: "<app-widget></app-widget>"
      // })
      //.otherwise("/phones");
      .otherwise({ template: "" });
  }
]);
```

6.  Add a navigation menu to the `AppComponent` template at the top of the page that allows you to switch between AngularJS and Angular routes.

`src\angular\app\app.component.html`

```html
<a routerLink="widget">Widget</a> |
<a href="#/phones">Phones</a>
```

7.  The application should initially show just the navigation and route to either an AngularJS (Phones) or an Angular (Widget) component depending on which you choose.

![nav]
![nav-widget]
![nav-phones]

[nav]: readme-assets/navigation.png
[nav-widget]: readme-assets/nav-widget.png
[nav-phones]: readme-assets/nav-phones.png
