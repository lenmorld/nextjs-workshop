import nodemailer from "nodemailer";

const SENDER_EMAIL = "lenmorld2@gmail.com";
const SENDER_PASSWORD = "NEXTjs1234!";
const RECEIVER_EMAIL = "lenmorld+maintainer@gmail.com"

if (!SENDER_EMAIL || !SENDER_PASSWORD || !RECEIVER_EMAIL) {
    throw new Error("Sender email and password or receiver email missing!")
}

export async function sendEmail(visitorEmail, subject, message) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD,
        },
    });

    // send to you, the owner of site
    const mailOptionsSiteOwner = {
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptionsSiteOwner, (error, info) => {
        if (error) {
            const errorResponse = "Sending failed: " + error
            console.log(errorResponse);
            throw new Error(errorResponse)
        } else {
            const successResponse = "Email sent: " + info.response
            console.log(successResponse);
        }
    });

    // send a copy to visitor
    const mailOptionsSiteVisitor = {
        from: SENDER_EMAIL,
        to: visitorEmail,
        subject: "Copy of message sent to site",
        text: message,
    };
    transporter.sendMail(mailOptionsSiteVisitor, (error, info) => {
        if (error) {
            const errorResponse = "Sending failed: " + error
            console.log(errorResponse);
            throw new Error(errorResponse)
        } else {
            const successResponse = "Email sent: " + info.response
            console.log(successResponse);
            // call successCallback and pass response from mailer
            successCallback(successResponse)
        }
    });
}


// TEST
// sendEmail(
//     "lenmorld+visitor@gmail.com",
//     "Contact Us message from visitor Visitorguy lenmorld+visitor@gmail.com",
//     "some message. hello world?!"
// );
