import TypeResponse from "@/type/system/response";
import TypeUsers from "@/type/data/users";
import { Request, Response } from "express";
import SrcUsers from "@/service/users/users";
import ValUsers from "@/validation/users/users";

// 使用者
export default class Users {
    constructor(
        // 使用者Service
        private srcUsers: SrcUsers = new SrcUsers(),

        // 使用者Validation
        private valUsers: ValUsers = new ValUsers()
    ) {}

    /**
     * 登入
     *
     * @param {Request} request 框架Request
     * @param {Response} response 框架Response
     *
     * @returns {Promise<Response>}
     */
    public async login(
        request: Request,
        response: Response
    ): Promise<Response> {
        // 取得欄位
        const email: string = request.body.email;
        const password: string = request.body.password;

        // 驗證欄位
        const errorList: null | string[] = this.valUsers.checkLogin(
            email,
            password
        );

        if (errorList !== null) {
            const json: TypeResponse = {
                message: "欄位格式錯誤",
                data: errorList,
            };

            return response.status(400).json(json);
        }

        // 登入
        const data: null | TypeUsers = await this.srcUsers.login(
            email,
            password
        );

        if (data === null) {
            const json: TypeResponse = {
                message: "登入失敗，帳號或密碼錯誤",
            };

            return response.status(401).json(json);
        }

        // 取得JWT Token
        const jwtToken: string = this.srcUsers.getJwtToken(data);

        const json: TypeResponse = {
            message: "成功登入",
            data: {
                jwtToken: jwtToken,
            },
        };

        return response.status(200).json(json);
    }
}
