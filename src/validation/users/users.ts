import Joi from "joi";

// 使用者
// Joi類型定義包已經停止更新，故相關變數都先不給類型
export default class Users {
    /**
     * 驗證登入參數
     *
     * @param {string} email E-Mail(帳號)
     * @param {string} password 密碼
     *
     * @returns {null | string[]} 錯誤訊息列表
     */
    public checkLogin(email: string, password: string): null | string[] {
        // 設定規則和訊息
        const validation = Joi.object({
            email: Joi.string().email().required().messages({
                "any.required": "E-Mail欄位必填",
                "string.empty": "E-Mail欄位必填",
                "string.email": "E-Mail欄位需為E-Mail格式",
            }),
            password: Joi.string().min(8).max(20).required().messages({
                "any.required": "密碼欄位必填",
                "string.empty": "密碼欄位必填",
                "string.min": "密碼欄位至少需8個字",
                "string.max": "密碼欄位做多為20個字",
            }),
        });

        // 驗證
        const result = validation.validate(
            {
                email: email,
                password: password,
            },
            { abortEarly: false } // 遇到錯誤欄位不終止，進行完整驗證
        );

        if (result.error === undefined) {
            return null;
        }

        // 整理錯誤訊息
        const errorList: string[] = result.error.details.map(
            (item) => item.message
        );

        return errorList;
    }
}
