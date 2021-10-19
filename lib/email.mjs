import nodemailer from "nodemailer";

const SENDER_EMAIL = "";
const SENDER_PASSWORD = "";

if (!SENDER_EMAIL || !SENDER_PASSWORD) {
    throw new Error("Sender email and password constants missing!")
}

export async function sendEmail(receiverEmail, subject, message) {
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
            const message = "Sending failed: " + error
            console.log(message);
            throw new Error(message)
        } else {
            const message = "Email sent: " + info.response
            console.log(message);
        }
    });
}


// TEST
sendEmail(
    "lenmorld@gmail.com",
    "hey this is me",
    "some message. hello world?!"
);
