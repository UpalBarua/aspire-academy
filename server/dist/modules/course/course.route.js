"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var course_controller_1 = require("./course.controller");
var router = (0, express_1.Router)();
router.get("/", course_controller_1.getAllCourses);
router.get("/:id", course_controller_1.getCourseById);
router.delete("/:id", course_controller_1.removeCourseById);
router.post("/", course_controller_1.addNewCourse);
exports.default = router;
//# sourceMappingURL=course.route.js.map