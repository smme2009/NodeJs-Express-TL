import Express from "express";
import Env from "dotenv";
import BodyParser from "body-parser";

// 初始化env
Env.config();

const app = Express();
const port = 3000;

// 接收Body參數設定
app.use(
    BodyParser.urlencoded({
        extended: true,
    })
);

app.listen(port);

console.log(`已開始監聽${port}Port`);
