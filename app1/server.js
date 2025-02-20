const express = require('express'); // This should be declared only once

const app = express();
const PORT = process.env.PORT || 4000; // Change to 4001 for app2

app.get('/app1', (req, res) => {
  res.send('App1 is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

