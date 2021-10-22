import nodemailer from "nodemailer";

const SENDER_EMAIL = "lenmorld2@gmail.com";
const SENDER_PASSWORD = "NEXTjs1234!";

if (!SENDER_EMAIL || !SENDER_PASSWORD) {
    throw new Error("Sender email and password email missing!")
}

export async function sendEmail(receiverEmail, subject, message) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD,
        },
    });

    const mailOptionsSiteOwner = {
        from: SENDER_EMAIL,
        to: receiverEmail,
        subject: subject,
        text: message,
    };
    
    transporter.sendMail(mailOptionsSiteOwner, (error, info) => {
        if (error) {
            const errorResponse = "Sending failed: " + error
            console.log(errorResponse);
            throw new Error(errorResponse)
        } else {
            const successResponse2 = `Email sent from ${SENDER_EMAIL} to: ${receiverEmail}` + info.response
            console.log(successResponse2);
        }
    });
}


// TEST
sendEmail(
    "lenmorld@gmail.com",
    "Contact Us message from visitor Visitorguy lenmorld+visitor@gmail.com",
    "I like your site"
);
