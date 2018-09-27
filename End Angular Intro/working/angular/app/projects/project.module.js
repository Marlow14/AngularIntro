"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var project_list_component_1 = require("./project-list/project-list.component");
var project_card_component_1 = require("./project-card/project-card.component");
var project_form_component_1 = require("./project-form/project-form.component");
var project_service_1 = require("./shared/project.service");
var projects_routing_1 = require("./projects.routing");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            declarations: [project_list_component_1.ProjectListComponent,
                project_card_component_1.ProjectCardComponent,
                project_form_component_1.ProjectFormComponent,
            ],
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, projects_routing_1.projectsRoutingModule],
            providers: [project_service_1.ProjectService]
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map