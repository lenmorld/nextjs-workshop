/*
request: http://localhost:3000/api/contactus

body: {
    name
    email
    message
}

response:
{
  message: "Contact Us message received",
  body: { name, email, message }
}
*/

export default function handler(req, res) {
    console.log("body: ", req.body);

    const { name, email, message } = req.body;

    res.status(200).json({ name: name, email: email, message: message });
}
