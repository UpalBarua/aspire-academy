"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var router = (0, express_1.Router)();
router.post("/register", user_controller_1.registerUser);
router.post("/login", user_controller_1.loginUser);
router.patch("/enroll/:userId", user_controller_1.enrollCourse);
router.get("/:email", user_controller_1.getUserByEmail);
router.get("/", user_controller_1.getAllUsers);
exports.default = router;
//# sourceMappingURL=user.route.js.map