// PARENT ROUTE : /store

const express = require('express');
const { base64encode, base64decode } = require('nodejs-base64');
const request = require('request');

const router = express.Router();

const printfulUrl = 'https://api.printful.com/';

// info about my store's products
router.get('/products', (req, res) => {
    const queryArr = [];
    let i=0;
    for (prop in req.query) {
        let queryPart='';
        if (i === 0) queryPart += '?';

        queryPart += `${prop}=${req.query[prop]}`;
        if (i < Object.keys(req.query).length - 1) queryPart += '&';

        queryArr.push(queryPart);
        i++;
    }

    const queryString = queryArr.join('');
    
    if (req.headers.authorization !== undefined) {
        request({
            url: printfulUrl + 'store/products' + queryString,
            headers: {
                Authorization: 'Basic ' + base64encode(req.headers.authorization)
            }
        },
        (err, response, body) => {
            if (err || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: response.statusCode });
            }

            res.json(JSON.parse(body));
        }
        )
    } else res.status(401).json({ message: 'Unauthorized' });
});

// info about a product in my store
router.get('/products/:id', (req, res) => {
    if (req.headers.authorization !== undefined) {
        request(
            {
                url: printfulUrl + 'store/products/' + req.params.id,
                headers: {
                    Authorization: 'Basic ' + base64encode(req.headers.authorization)
            }
        },
            (err, response, body) => {
                if (err || response.statusCode !== 200) {
                    return res.status(500).json({ type: 'error', message: response.statusCode });
                }

                res.json(JSON.parse(body));
            }
        )
    } else res.status(401).json({ message: 'Unauthorized' });
});

router.get('/variants/:id', (req, res) => {
    if (req.headers.authorization !== undefined) {
        request({
            url: printfulUrl + 'store/variants/' + req.params.id,
            headers: {
                Authorization: 'Basic ' + base64encode(req.headers.authorization)
            }
        },
        (err, response, body) => {
            if (err || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: response.statusCode });
            }

            res.json(JSON.parse(body));
        })
    } else res.status(401).json({ message: 'Unauthorized' });
});

module.exports = router;