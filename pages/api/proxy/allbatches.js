export default async function handler(req, res) {
  try {
    // As requested, loading batches from the provided GitHub JSON
    const githubUrl = 'https://raw.githubusercontent.com/krtutu521-blip/fire/refs/heads/main/allbatches.json';

    console.log('📡 Fetching batches from GitHub:', githubUrl);

    const response = await fetch(githubUrl, {
      method: 'GET',
      headers: { 'Cache-Control': 'no-cache' }
    });

    if (!response.ok) {
      throw new Error(`GitHub responded with status ${response.status}`);
    }

    const data = await response.json();

    // Check if the data is nested or direct array
    const finalData = data.data || data;

    res.status(200).json(finalData);
  } catch (error) {
    console.error('❌ GitHub fetch error:', error);
    res.status(500).json({ error: 'Failed to load batches from source' });
  }
}
