import { sendEmail } from '../../lib/email'

/*
request: http://localhost:3000/api/contactus

body: {
    name
    email
    message
}

response:
{
  data: "Contact Us message received. Email sent ",
  body: { name, email, message }
}
*/

export default function handler(req, res) {
    console.log("Received ContactUs payload", req.body);

    const { name, email, message } = JSON.parse(req.body);

    console.log({
        name,
        email,
        message
    })

    sendEmail(
        email,
        `Contact Us message from ${name} ${email}`,
        message,
        // successCallback
        (serverResponse) => {
            res
            .status(200)
            .json({ data: "Contact Us message received. " + serverResponse, body: req.body });
        }
    );
}
