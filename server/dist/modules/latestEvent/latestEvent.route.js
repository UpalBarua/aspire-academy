"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestEventRoutes = void 0;
var express_1 = __importDefault(require("express"));
var latestEvent_controller_1 = require("./latestEvent.controller");
var router = express_1.default.Router();
router.post("/create-latest-event", latestEvent_controller_1.latestEventController.createLatestEvent);
router.get("/", latestEvent_controller_1.latestEventController.getLatestEvent);
router.delete("/delete-latest-event/:id", latestEvent_controller_1.latestEventController.deleteLatestEvent);
exports.latestEventRoutes = router;
//# sourceMappingURL=latestEvent.route.js.map