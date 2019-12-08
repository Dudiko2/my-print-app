const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');

const app = express();

const printfulUrl = 'https://api.printful.com/';

// CORS
app.use(cors());

// every store-related route:
app.use('/api/store', require('./routes/store'));

// info about a variant
app.get('/api/products/variant/:id', (req, res) => {
    request(
        { url: printfulUrl + 'products/variant/' + req.params.id },
        (err, response, body) => {
            if (err || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            res.json(JSON.parse(body));
        }
    )
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));