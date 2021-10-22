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

const SITE_OWNER_EMAIL = 'lenmorld2+noreply@gmail.com'

export default function handler(req, res) {
    console.log("Received ContactUs message. Sending to site owner and copy to visitor", req.body);

    const { name, email, message } = JSON.parse(req.body);

    // send to site owner
    sendEmail(
        SITE_OWNER_EMAIL,
        `Contact Us message from ${name} ${email}`,
        message,
        // successCallback 1
        (serverResponse1) => {
            console.log(`Message sent to site owner: ${serverResponse1}`)
        }
    );

    // send copy to visitor
    sendEmail(
        email,
        `Copy of Contact Us message to ${SITE_OWNER_EMAIL}`,
        message,
        // successCallback 2
        (serverResponse2) => {
            console.log(`Message sent to site visitor: ${serverResponse2}`)
        }
    );

    // send response to UI
    res
    .status(200)
    .json({ data: "Contact Us message sent to site owner and copy to site visitor" });
}
