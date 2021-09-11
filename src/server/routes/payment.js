const router = require('express').Router();
const axios = require('axios');
const { parse, stringify, toJSON, fromJSON } = require('flatted');


router.post('/complete_registration', async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/register/complete_registration`
        const body = req.body;
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        const data = JSON.stringify(body);

        const response = await axios.post(url, data, {
            headers: headers
        });

        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
        else {
            return res.status(500).json('error');
        }
    } catch (error) {
        return res.status(500).json('error');
    }
});


router.post('/registration_failed', async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/register/registration_failed`
        const body = req.body;
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        const data = JSON.stringify(body);

        const response = await axios.post(url, data, {
            headers: headers
        });

        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
        else {
            return res.status(500).json('error');
        }
    } catch (error) {
        return res.status(500).json('error');
    }
});

router.post('/generate_order', async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/register/generate_order`
        const body = req.body;
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        const data = JSON.stringify(body);

        const response = await axios.post(url, data, {
            headers: headers
        });
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
        else {
            return res.status(response.status).json('error');
        }
    } catch (error) {
        return res.status(500).json('error');
    }
});



module.exports = router;
