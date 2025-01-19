import { Router, Request, Response } from "express";
import CtrlUsers from "@/controller/users/users";

// 路由
const router: Router = Router();

// 帳號Controller
const ctrlAccount: CtrlUsers = new CtrlUsers();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: 登入
 *     tags: [使用者]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "joi@test.com"
 *               password:
 *                 type: string
 *                 example: "joipass777"
 *     responses:
 *       200:
 *         description: 成功登入
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "成功登入"
 *                 data:
 *                   type: object
 *                   properties:
 *                     jwtToken:
 *                       type: string
 *                       example: "xxx.xxx.xxx"
 *
 *       400:
 *         description: 欄位格式錯誤
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "欄位格式錯誤"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["E-Mail欄位必填", "密碼欄位必填"]
 *       401:
 *         description: 帳號或密碼錯誤
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "帳號或密碼錯誤"
 */
router.post("/api/login", (request: Request, response: Response) => {
    ctrlAccount.login(request, response);
});

export default router;
