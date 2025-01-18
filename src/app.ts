import Express from "express";
import Env from "dotenv";
import BodyParser from "body-parser";
import Database from "@/database/database";
import RtUsersLogin from "@/router/users/login";

// 初始化env
Env.config();

// 初始化Database實例
Database.getInstance();

const app = Express();
const port = 3000;

// 接收Body參數設定
app.use(
    BodyParser.urlencoded({
        extended: true,
    })
);

app.use(RtUsersLogin);
app.listen(port);

console.log(`已開始監聽${port}Port`);
