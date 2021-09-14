const router = require('express').Router();
const axios = require('axios');
const FormData = require('form-data');
const multer  = require('multer')();
const fs = require('fs');


router.post('/upload',multer.single('story'), async function (req, res) {
    try {
        const url = `${process.env.KATHA_API}/katha_utsav/v1/story/upload_story`;
        const fileRecievedFromClient = req.file;
        let form = new FormData();
        form.append('story', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
        axios.post(url, form, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`
            }
        }).then((responseFromServer2) => {
            res.send(responseFromServer2.data)
        }).catch((err) => {
            res.send("ERROR")
        })
    } catch (error) {
        return res.status(500).json('Post req to Upload Endpoint failed');
    }
});

module.exports = router;

