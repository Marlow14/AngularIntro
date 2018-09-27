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
var router_1 = require("@angular/router");
var project_model_1 = require("../shared/project.model");
var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent(router) {
        this.router = router;
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.actionDropdownIsOpen = false;
    }
    ProjectCardComponent.prototype.toggleActions = function () {
        this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
    };
    ProjectCardComponent.prototype.getDropdownCssClasses = function () {
        return {
            dropdown: true,
            open: this.actionDropdownIsOpen,
        };
    };
    ProjectCardComponent.prototype.onEditClick = function (project) {
        this.edit.emit(project);
    };
    ProjectCardComponent.prototype.onDelete = function (project, event) {
        event.preventDefault();
        this.delete.emit(project);
    };
    ProjectCardComponent.prototype.onSelect = function (project, event) {
        event.preventDefault();
        this.router.navigate(['/projects', project.id]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", project_model_1.Project)
    ], ProjectCardComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectCardComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectCardComponent.prototype, "delete", void 0);
    ProjectCardComponent = __decorate([
        core_1.Component({
            selector: 'project-card',
            templateUrl: './project-card.component.html',
            styleUrls: ['./project-card.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated,
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());
exports.ProjectCardComponent = ProjectCardComponent;
//# sourceMappingURL=project-card.component.js.map