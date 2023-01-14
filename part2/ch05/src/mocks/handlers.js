import { rest } from "msw";
import people from "./dummy.json";

export const handlers = [
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");

    // 정상적인 요청
    return res(ctx.json({ name: id === "1" ? "The One" : "The others" }));
    
    // 에러 요청
    // return res(ctx.status(400));
  }),
];
