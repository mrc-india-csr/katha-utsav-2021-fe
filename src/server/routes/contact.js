const router = require('express').Router();
const axios = require('axios');


router.post('/', async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/submit_query`
        const body = req.body;
        const response = await axios.post(url, body);
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
        else{
            return res.status(500).json('Post Request to Contact Endpoint failed');
        }
    } catch (error) {
        return res.status(500).json('Post Request to Contact Endpoint failed');
    }
});

router.get('/', async function (req, res) {
    try {
        return res.status(200).json('Post Request to Contact Endpoint success');

    } catch (error) {
        return res.status(500).json('Post Request to Contact Endpoint failed');
    }
});

module.exports = router;
