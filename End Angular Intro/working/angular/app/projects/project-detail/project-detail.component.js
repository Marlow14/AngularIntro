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
var router_1 = require("@angular/router");
var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectDetailComponent.prototype.getProject = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.subscription = _this.projectService.find(id).subscribe(function (p) { return _this.project = p; }, function (e) { return _this.errorMessage = e; });
            }
        });
        // let id = 1;
        // this.subscription = this.projectService
        //   .find(id)
        //   .subscribe(p => (this.project = p), e => (this.errorMessage = e));
    };
    ProjectDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.paramsSubscription.unsubscribe();
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            templateUrl: './project-detail.component.html',
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService,
            router_1.ActivatedRoute])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map