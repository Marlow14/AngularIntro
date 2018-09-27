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
var project_model_1 = require("../shared/project.model");
var custom_validators_1 = require("../shared/custom.validators");
var forms_1 = require("@angular/forms");
var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cancel = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.validationMessages = {
            name: {
                required: 'Name is required.',
                minlength: 'Name must be at least 3 characters.',
                forbiddenName: "Nothing is impossible"
            },
            description: {
                required: 'Description is required.',
            },
        };
    }
    ProjectFormComponent.prototype.hasAnyError = function (control) {
        return control.invalid && control.dirty && control.touched;
    };
    ProjectFormComponent.prototype.getValidationMessages = function (controlName) {
        var _this = this;
        var formControl = this.projectForm.get(controlName);
        if (!formControl.errors) {
            return [];
        }
        return Object.keys(formControl.errors).map(function (key) {
            return _this.validationMessages[controlName][key];
        });
    };
    ProjectFormComponent.prototype.ngOnInit = function () {
        this.projectForm = this.formBuilder.group({
            name: new forms_1.FormControl(this.project.name, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                custom_validators_1.CustomValidators.forbiddenName("impossible"),
            ]),
            description: new forms_1.FormControl(this.project.description),
            isActive: new forms_1.FormControl(this.project.isActive),
        });
    };
    ProjectFormComponent.prototype.onCancel = function (project, event) {
        event.preventDefault();
        this.cancel.emit(this.project);
    };
    ProjectFormComponent.prototype.onSubmit = function () {
        if (this.projectForm.invalid) {
            return;
        }
        var updatedProject = Object.assign({}, this.project, this.projectForm.value);
        this.save.emit(updatedProject);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", project_model_1.Project)
    ], ProjectFormComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectFormComponent.prototype, "save", void 0);
    ProjectFormComponent = __decorate([
        core_1.Component({
            selector: 'project-form',
            templateUrl: './project-form.component.html',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());
exports.ProjectFormComponent = ProjectFormComponent;
//# sourceMappingURL=project-form.component.js.map