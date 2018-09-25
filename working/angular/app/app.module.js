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
var app_component_1 = require("./app.component");
var project_list_component_1 = require("./projects/project-list/project-list.component");
var project_card_component_1 = require("./projects/project-card/project-card.component");
var project_form_component_1 = require("./projects/project-form/project-form.component");
var project_service_1 = require("./projects/shared/project.service");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                project_list_component_1.ProjectListComponent,
                project_card_component_1.ProjectCardComponent,
                project_form_component_1.ProjectFormComponent,
            ],
            imports: [platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [project_service_1.ProjectService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map