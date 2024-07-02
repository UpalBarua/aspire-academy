"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var error_handler_1 = __importDefault(require("./middlewares/error-handler"));
var alumni_route_1 = require("./modules/alumni/alumni.route");
// routes
var user_route_1 = __importDefault(require("./modules/user/user.route"));
var course_route_1 = __importDefault(require("./modules/course/course.route"));
var latestEvent_route_1 = require("./modules/latestEvent/latestEvent.route");
var blog_route_1 = require("./modules/blog/blog.route");
var helpDesk_route_1 = require("./modules/helpDesk/helpDesk.route");
var management_route_1 = require("./modules/management/management.route");
var testimonial_route_1 = require("./modules/testimonial/testimonial.route");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// routes
app.use("/api/users", user_route_1.default);
app.use("/api/courses", course_route_1.default);
app.use("/api/alumni", alumni_route_1.alumniRoutes);
app.use("/api/management", management_route_1.managementRoutes);
app.use("/api/latest-event", latestEvent_route_1.latestEventRoutes);
app.use("/api/blog", blog_route_1.blogRoutes);
app.use("/api/help-desk", helpDesk_route_1.helpDeskRoute);
app.use("/api/testimonial", testimonial_route_1.testimonialRoutes);
app.all("*", function (_req, res) {
    res.status(404).json({
        success: false,
        message: "There is no such route",
    });
});
app.use(error_handler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map