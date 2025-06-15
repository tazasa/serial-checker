const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/download', (req, res) => {
    const file = path.join(__dirname, '../../public/downloads/sample-file.txt');
    res.download(file, 'sample-file.txt', (err) => {
        if (err) {
            res.status(500).send('Error downloading the file.');
        }
    });
});

module.exports = router;
