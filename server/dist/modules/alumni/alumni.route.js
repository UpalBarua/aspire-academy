"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumniRoutes = void 0;
var express_1 = __importDefault(require("express"));
var alumni_controller_1 = require("./alumni.controller");
var router = express_1.default.Router();
router.post("/create-alumni", alumni_controller_1.alumniController.createAlumni);
router.get("/", alumni_controller_1.alumniController.getAlumni);
router.delete("/delete-alumni/:id", alumni_controller_1.alumniController.deleteAlumni);
exports.alumniRoutes = router;
//# sourceMappingURL=alumni.route.js.map