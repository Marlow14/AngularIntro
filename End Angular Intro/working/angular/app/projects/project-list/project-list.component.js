"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_service_1 = require("../shared/project.service");
var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService
            .list()
            .subscribe(function (projectData) { return (_this.projects = projectData); }, function (error) { return (_this.errorMessage = error); });
    };
    ProjectListComponent.prototype.onEdit = function (project) {
        // project.originalProject = Object.assign({}, project);
        project.editing = true;
    };
    ProjectListComponent.prototype.onCancel = function (project) {
        // event.preventDefault();
        // this.projects[this.projects.indexOf(project)] = project.originalProject;
        project.editing = false;
        // this.closeDropdown();
    };
    ProjectListComponent.prototype.onSave = function (updatedProject) {
        var _this = this;
        updatedProject.editing = false;
        this.projectService.put(updatedProject).subscribe(function (p) {
            var index = _this.projects.findIndex(function (p) { return p.id == updatedProject.id; });
            _this.projects[index] = updatedProject;
        }, function (error) { return (_this.errorMessage = error); });
        // let index = this.projects.findIndex(p => p.id == updatedProject.id);
        // this.projects[index] = updatedProject;
    };
    ProjectListComponent.prototype.onDelete = function (project) {
        var _this = this;
        this.projectService.delete(project).subscribe(function () { return _this.projects = _this.projects.filter(function (p) { return p.id != project.id; }); }, function (error) { return _this.errorMessage = error; });
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'project-list',
            // template: `<h1>Projects <ng-content></ng-content></h1>
            // <pre> {{projects | json }} </pre>`
            templateUrl: "./project-list.component.html",
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map