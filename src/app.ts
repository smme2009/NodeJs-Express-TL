import Express from "express";
import Env from "dotenv";

// 初始化env
Env.config();

const app = Express();
const port = 3000;

app.listen(port);

console.log(`已開始監聽${port}Port`);
