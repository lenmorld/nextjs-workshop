/*
request: http://localhost:3000/api/helloname?name=lenny

response:
{
  message: "Hello lenny",
  query: {
    name: "lenny"
  },
}
*/

export default function handler(req, res) {
    const name = req.query.name

    console.log("query: ", req.query)

    res.status(200).json({ message: `Hello ${name}`, query: req.query })
  }
