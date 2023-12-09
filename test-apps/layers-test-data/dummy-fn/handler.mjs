export async function execute(event, context) {
  try {
    // Access event data
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Return a response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success", data: { isHandled: true } }),
    };
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
}
