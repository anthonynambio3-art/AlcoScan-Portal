const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Start the MQTT listener
require('./mqttListener');

app.get('/', (req, res) => {
  res.send('✅ AlcoScan backend is running!');
});

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
