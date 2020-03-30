const express=require('express');
const multer = require('multer');
const path = require('path');
const router=express.Router();
const {getdata,postdata}=require('../controller/main');

const DIR = './uploads';
 
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

router.get('/', getdata);
router.post('/api/v1/upload',upload.single('profile'),postdata);

module.exports=router;