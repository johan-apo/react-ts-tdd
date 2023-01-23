import { rest } from "msw";
import { redirect } from "../ctx/redirect";

export const greetingHandler = [
  rest.get("/greeting", (req, res, ctx) => {
    const month = req.url.searchParams.get("month");

    if (month === "December") return req.passthrough();

    return res(ctx.json({ greeting: `Hello World! It's ${month}` }));
  }),
  rest.get("/user", (req, res, ctx) => {
    return res(redirect("/v2/user", 301));
  }),
  rest.get("/v2/user", (req, res, ctx) => {
    return res(ctx.json({ message: "Redirected!" }));
  }),
];
