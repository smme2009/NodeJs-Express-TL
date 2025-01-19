import ModelUsers from "@/database/model/users";

// 使用者
export default class Users {
    /**
     * 取得使用者(透過E-Mail)
     *
     * @param {string} email E-Mail(帳號)
     *
     * @returns {Promise<null | ModelUsers>} 使用者
     */
    public async getByEMail(email: string): Promise<null | ModelUsers> {
        const model: null | ModelUsers = await ModelUsers.findOne({
            where: {
                email: email,
            },
        });

        return model;
    }
}
