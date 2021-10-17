/*
request:
http://localhost:3000/api/restaurant?where=Montreal&what=pizza

response:
{
    query: {
        where: "Montreal",
        what: "pizza",
        thing: "restaurant",
    }
}
*/

export default function handler(req, res) {
    res.status(200).json({ query: req.query });
  }
  