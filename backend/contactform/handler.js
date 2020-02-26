import AWS from "aws-sdk";
import querystring from "querystring";

const SES = new AWS.SES({ region: "eu-west-1" });

export async function contact(event) {
  const params = querystring.parse(event.body);
  console.log(params["firstname"]);
  try {
    const sesParams = {
      Destination: {
        ToAddresses: ["clementaceituno@gmail.com"]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<!DOCTYPE html>
            <p>Prénom: ${params["firstname"]}</p>
            <p>Nom: ${params["lastname"]}</p>
            <p>email: ${params["email"]}</p>
            <p>message: ${params["message"]}</p>`
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Contact depuis clementaceituno.dev"
        }
      },
      Source: "contact@clementaceituno.dev"
    };

    const response = await SES.sendEmail(sesParams).promise();
    console.log(response);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
      },
      body: JSON.stringify({
        message: "Message sent"
      })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
      },
      body: JSON.stringify({
        message: "Internal Error"
      })
    };
  }
}
