"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementRoutes = void 0;
var express_1 = __importDefault(require("express"));
var management_controller_1 = require("./management.controller");
var router = express_1.default.Router();
router.post("/create-management", management_controller_1.managementController.createManagement);
router.get("/", management_controller_1.managementController.getManagement);
router.delete("/delete-management/:id", management_controller_1.managementController.deleteManagement);
exports.managementRoutes = router;
//# sourceMappingURL=management.route.js.map