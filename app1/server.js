const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/app1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App1 running on port ${PORT}`);
});

