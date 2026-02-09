import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  const MyImportantVariable = process.env.MY_IMPORTANT_VARIABLE;
  if (!MyImportantVariable) throw "Missing MY_IMPORTANT_VARIABLE";

  console.log("Logs of the variables");

  return {
    statusCode: 200,
    body: JSON.stringify({ MyImportantVariable }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export { handler };
