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
// import { Observable, of} from 'rxjs';
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }),
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsUrl = 'http://localhost:3000/projects/';
    }
    ProjectService.prototype.list = function () {
        return this.http.get(this.projectsUrl).pipe(operators_1.catchError(function (error) {
            console.error(error);
            return rxjs_1.throwError('An error occurred loading the projects.');
        }));
    };
    ProjectService.prototype.put = function (project) {
        var url = this.projectsUrl + project.id;
        return this.http.put(url, project, httpOptions).pipe(operators_1.catchError(function (error) {
            return rxjs_1.throwError('An error occured updating the project.');
        }));
    };
    ProjectService.prototype.delete = function (project) {
        var url = this.projectsUrl + project.id;
        return this.http.delete(url, httpOptions).pipe(operators_1.catchError(function (error) {
            console.error(error);
            return rxjs_1.throwError('An error occured deleting the project.');
        }));
    };
    ProjectService.prototype.find = function (id) {
        var url = this.projectsUrl + id;
        return this.http.get(url);
    };
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map