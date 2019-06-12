exports.handler = async function (event, context) {
  try {
    return {
      statusCode: 200,
      body: "OK"
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
};