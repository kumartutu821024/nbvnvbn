import { getApiUrl } from '../../lib/apiConfig';

export default async function handler(req, res) {
  try {
    const apiUrl = await getApiUrl();
    if (!apiUrl) {
      return res.status(500).json({ error: 'API not configured' });
    }

    const targetUrl = `${apiUrl}/api/pw/allbatches`;
    console.log('📡 Proxying to allbatches:', targetUrl);

    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      // If allbatches fails, try fallback to batches
      const fallbackUrl = `${apiUrl}/api/pw/batches`;
      const fbResponse = await fetch(fallbackUrl);
      const fbData = await fbResponse.json();
      return res.status(fbResponse.status).json(fbData);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
