"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(obj) {
        this.imageUrl = 'http://placehold.it/500x300/e4d2ba';
        this.id = (obj && obj.id) || null;
        this.name = (obj && obj.name) || null;
        this.description = (obj && obj.description) || null;
        this.contractTypeId = (obj && obj.contractTypeId) || null;
        this.isActive = (obj && obj.isActive) || false;
        this.contractSignedOn = (obj && obj.contractSignedOn) || new Date();
        this.budget = (obj && obj.budget) || 0;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.model.js.map