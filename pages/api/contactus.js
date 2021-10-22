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

export default function handler(req, res) {
    console.log("Received ContactUs payload", req.body);

    res.status(200).json({ data: "Contact Us message received", body: req.body });
}
