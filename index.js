const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/api/derpet-trades', async (req, res) => {
  const apiUrl = 'https://api.fatfinger.fun/tokens/updates/trades/0x0c0A418ce732B801Dcd98107D07e26983cC2AC78';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Proxy running on port ' + port)); 