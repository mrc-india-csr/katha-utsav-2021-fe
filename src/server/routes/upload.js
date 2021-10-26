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

router.get('/download_result', (req, res) => {
    res.status(200).send(`https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com/${process.env.S3_FOLDER}result/results.xlsx`);
});

module.exports = router;
