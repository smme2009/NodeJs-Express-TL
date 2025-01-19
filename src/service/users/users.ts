import TypeUsers from "@/type/data/users";
import ModelUsers from "@/database/model/users";
import RepoUsers from "@/respository/user/user";
import Bcrypt from "bcrypt";
import ToolJwt from "@/tool/jwt";

// 使用者
export default class Users {
    constructor(
        // 使用者Respository
        private repoUsers: RepoUsers = new RepoUsers()
    ) {}

    /**
     * 登入
     *
     * @param {string} email E-Mail(帳號)
     * @param {string} password 密碼
     *
     * @returns {Promise<null | TypeUsers>} 是否成功
     */
    public async login(
        email: string,
        password: string
    ): Promise<null | TypeUsers> {
        // 取得使用者
        const model: null | ModelUsers = await this.repoUsers.getByEMail(email);

        if (model === null) {
            return null;
        }

        // 檢查密碼
        const isPass: boolean = Bcrypt.compareSync(password, model.password);

        if (isPass === false) {
            return null;
        }

        return this.setData(model);
    }

    /**
     * 取得JWT Token
     *
     * @param {TypeUsers} data 資料
     *
     * @returns {string} JWT Token
     */
    public getJwtToken(data: TypeUsers): string {
        const jwtToken: string = ToolJwt.encode({
            usersId: data.userId,
        });

        return jwtToken;
    }

    /**
     * 設定資料
     *
     * @param {ModelUsers} model 使用者Model
     *
     * @returns {TypeUsers} 資料
     */
    private setData(model: ModelUsers): TypeUsers {
        const data: TypeUsers = {
            userId: model.usersId,
            email: model.email,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
        };

        return data;
    }
}
