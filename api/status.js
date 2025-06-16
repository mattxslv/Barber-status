let status = { state: 'unknown', updated: new Date().toISOString() };

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(status);
  }

  if (req.method === 'POST') {
    const { state } = req.query;
    if (state === 'in' || state === 'out') {
      status = {
        state,
        updated: new Date().toISOString(),
      };
      return res.status(200).json({ success: true, status });
    } else {
      return res.status(400).json({ error: 'Invalid state value' });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
