"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialRoutes = void 0;
var express_1 = __importDefault(require("express"));
var testimonial_controller_1 = require("./testimonial.controller");
var router = express_1.default.Router();
router.post("/create-testimonial", testimonial_controller_1.testimonialController.createTestimonial);
router.get("/", testimonial_controller_1.testimonialController.getTestimonial);
router.delete("/delete-testimonial/:id", testimonial_controller_1.testimonialController.deleteTestimonial);
exports.testimonialRoutes = router;
//# sourceMappingURL=testimonial.route.js.map