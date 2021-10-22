/*
request: http://localhost:3000/api/contactus

body: {
    name
    email
    message
}

response:
{
  data: "Contact Us message received",
  body: { name, email, message }
}
*/

const SITE_OWNER_EMAIL = "lenmorld2@gmail.com";
const SITE_OWNER_PASSWORD = "NEXTjs1234!";

if (!SITE_OWNER_EMAIL || !SITE_OWNER_PASSWORD) {
    throw new Error("Sender email and password or receiver email missing!")
}

export default function handler(req, res) {
    console.log("body: ", req.body);

    res.status(200).json({ data: "Contact Us message received", body: req.body });
}
