"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpDeskRoute = void 0;
var express_1 = __importDefault(require("express"));
var helpDesk_controller_1 = require("./helpDesk.controller");
var router = express_1.default.Router();
router.post("/create-help-desk", helpDesk_controller_1.helpDeskController.createHelpDesk);
router.get("/", helpDesk_controller_1.helpDeskController.getHelpDesk);
router.delete("/delete-help-desk/:id", helpDesk_controller_1.helpDeskController.deleteHelpDesk);
exports.helpDeskRoute = router;
//# sourceMappingURL=helpDesk.route.js.map