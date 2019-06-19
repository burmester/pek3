import Database from './utils/database';

let database = null;

exports.handler = async function (event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    if (database == null) {
      database = new Database()
      await database.connect()
    }
    if (event.httpMethod === 'POST') {
      const body = await JSON.parse(event.body);
      const status = body.status;
      const token = event.queryStringParameters.token
      // SET STATUS
      console.log("POST - token:", token, "status:", status)
      await database.updateOne({ token: token, status: status });
      return {
        statusCode: 201,
        body: JSON.stringify({
          token: token,
          status: status
        })
      };
    } else if (event.httpMethod === 'DELETE') {
      const token = event.queryStringParameters.token
      // DELETE TOKEN
      console.log("DELETE - token:", token)
      await database.deleteOne(token);
      return {
        statusCode: 204
      };
    }
    else {
      const token = event.queryStringParameters.token
      // GET STATUS
      console.log("GET - token:", token)
      let connection = await database.findOne(token);
      if (connection) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            token: connection.token,
            status: connection.status
          })
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify({
            token: token,
            status: "NOT_FOUND"
          })
        };
      }

    }
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
};