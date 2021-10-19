import nodemailer from "nodemailer";

const SENDER_EMAIL = "";
const SENDER_PASSWORD = "";

if (!SENDER_EMAIL || !SENDER_PASSWORD) {
    throw new Error("Sender email and password constants missing!")
}

export async function sendEmail(receiverEmail, subject, message, successCallback) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD,
        },
    });

    const mailOptions = {
        from: SENDER_EMAIL,
        to: receiverEmail,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
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
//     "lenmorld@gmail.com",
//     "hey this is me",
//     "some message. hello world?!"
// );
