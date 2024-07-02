"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
var express_1 = __importDefault(require("express"));
var blog_controller_1 = require("./blog.controller");
var router = express_1.default.Router();
router.post("/create-blog", blog_controller_1.blogController.createBlog);
router.get("/", blog_controller_1.blogController.getBlog);
router.get("/:blogId", blog_controller_1.blogController.getSingleBlog);
router.delete("/delete-blog/:id", blog_controller_1.blogController.deleteBlog);
exports.blogRoutes = router;
//# sourceMappingURL=blog.route.js.map