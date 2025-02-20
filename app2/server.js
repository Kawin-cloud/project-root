const express = require('express');
const app = express();
const PORT = 4001;

app.get('/app2', (req, res) => {
    res.send('Welcome to App2');
});

app.listen(PORT, () => {
    console.log(`App2 is running on port ${PORT}`);
});

