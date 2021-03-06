"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
// import { ProjectListComponent} from './projects/project-list/project-list.component';
// import { ProjectCardComponent } from './projects/project-card/project-card.component';
// import { ProjectFormComponent} from './projects/project-form/project-form.component';
// import { ProjectService } from './projects/shared/project.service';
var home_component_1 = require("./home/home.component");
var app_routing_1 = require("./app.routing");
var projects_module_1 = require("./projects/projects.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                // ProjectListComponent,
                // ProjectCardComponent,
                // ProjectFormComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                // ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_1.appRoutingModule,
                projects_module_1.ProjectsModule,
            ],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map