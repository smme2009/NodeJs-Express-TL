import { Router, Request, Response } from "express";
import CtrlUsers from "@/controller/users/users";

// 路由
const router: Router = Router();

// 帳號Controller
const ctrlAccount: CtrlUsers = new CtrlUsers();

// 登入
router.post("/login", (request: Request, response: Response) => {
    ctrlAccount.login(request, response);
});

export default router;
