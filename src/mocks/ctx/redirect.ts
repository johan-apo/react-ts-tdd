import { compose, context } from "msw";

export function redirect(destination: any, statusCode: any) {
  return compose(
    context.status(statusCode),
    context.set("Location", destination)
  );
}
