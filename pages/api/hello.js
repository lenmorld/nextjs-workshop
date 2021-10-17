// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
request: http://localhost:3000/api/hello

response:
{
  name: "John Doe"
}
*/
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
