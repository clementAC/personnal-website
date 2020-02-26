import AWS from "aws-sdk";

const SES = new AWS.SES({ region: "eu-west-1" });

export async function contact(event) {
  const body = JSON.parse(event.body);
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
              <p>Prénom: ${body.firstname}</p>
              <p>Nom: ${body.lastname}</p>
              <p>email: ${body.email}</p>
              <p>message: ${body.message}</p>`
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Contact depuis clementaceituno.dev"
        }
      },
      Source: "contact@clementaceituno.dev"
    };

    await SES.sendEmail(sesParams).promise();
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
