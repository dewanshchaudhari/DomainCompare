const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const GODADDY_URL = `https://api.ote-godaddy.com/v1/domains/available`;
const domainName = 'dewansh.tech';
const checkType = 'FAST';
const forTransfer = false;
router.get('/', (req, res) => {
    fetch(`${GODADDY_URL}?domain=${domainName}&checkType=${checkType}&forTransfer=${forTransfer}`, {
        method: 'get',
        Authorization: 'sso-key 3mM44UbBZMPJ8G_3bP7QbowZ3SCHdMhHpd4qc:AWP34Brg2K9gqaJ3LkiZbb',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then((result) => console.log(result));
    res.json({
        message: `(●'◡'●)`,
    });
});


module.exports = router;






//3mM44UbBZMPJ8G_3bP7QbowZ3SCHdMhHpd4qc
//AWP34Brg2K9gqaJ3LkiZbb
