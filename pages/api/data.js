export default function handler(req, res) {
    if (req.method === 'POST') {
      const { data } = req.body;
      console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKK", data);
      // You can process the data here as needed
      res.status(200).json({ message: 'Data received successfully', data });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }