const express = require('express');

const app = express();
const PORT = 3000;

// allows JSON body data
app.use(express.json());

// receive POST requests
app.post('/log', (req, res) => {
    console.log('Received data:', req.body);

    // you can save to file/database here

    res.json({
        success: true,
        received: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});