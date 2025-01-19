import { Router } from "express";
import Path from "path";
import Swagger from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

// 路由
const router: Router = Router();

// 基本設定
const json: object = Swagger({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TL測試API文件",
            version: "0.0.0",
        },
    },
    apis: [Path.join(__dirname, "users/login.ts")],
});

router.use("/swagger", SwaggerUI.serve, SwaggerUI.setup(json));

export default router;
