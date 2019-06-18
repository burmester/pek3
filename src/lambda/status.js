exports.handler = async function (event, context) {
  try {
    if (event.httpMethod === 'POST') {
      const body = await JSON.parse(event.body);
      const status = body.status;
      const token = event.queryStringParameters.token
      console.log("POST - token:", token, "status:", status)
      // SET STATUS
      return {
        statusCode: 201,
        body: JSON.stringify({
          status: status,
          token: token
        })
      };
    } else if ( event.httpMethod === 'DELETE') {
      const token = event.queryStringParameters.token
      console.log("DELETE - token:", token)
      // DELETE TOKEN
      return {
        statusCode: 200
      };
    }
    else {
      const token = event.queryStringParameters.token
      console.log("GET - token:", token)
      return {
        statusCode: 200,
        body: JSON.stringify({
          token: token,
          status: "OK"
        })
      };
    }
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
};