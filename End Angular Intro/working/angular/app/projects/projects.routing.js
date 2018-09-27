"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var project_list_component_1 = require("./project-list/project-list.component");
var project_detail_component_1 = require("./project-detail/project-detail.component");
var projectRoutes = [
    {
        path: 'projects',
        component: project_list_component_1.ProjectListComponent,
    },
    {
        path: 'projects/:id', component: project_detail_component_1.ProjectDetailComponent
    }
];
exports.projectsRoutingModule = router_1.RouterModule.forChild(projectRoutes);
//# sourceMappingURL=projects.routing.js.map