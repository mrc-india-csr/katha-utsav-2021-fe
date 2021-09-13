const router = require('express').Router();
const axios = require('axios');
var FormData = require('form-data');


router.post('/upload', async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/story/upload_story`;

        const headers = {
            "content-type": "multipart/form-data",
            "Accept": "application/json",
        }
        const file = req.story; 
        const meta = req.body; 
        const response = await axios.post(url,  req.body,{
            headers: headers
        });
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
        else{

            return res.status(500).json('Post req to Upload Endpoint failed');
        }
    } catch (error) {
        return res.status(500).json('Post req to Upload Endpoint failed');
    }
});

module.exports = router;

