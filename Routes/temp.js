const express = require('express');
const router = express.Router();
const { c_to_f, f_to_c, c_to_k, k_to_c} = require('../Operations/index.js')

router.get('/c_to_f/:temp', c_to_f)

router.get('/f_to_c/:temp',f_to_c)

router.get('/c_to_k/:temp', c_to_k)

router.get('/k_to_c/:temp', k_to_c)

router.get('/',(req,res)=>{
    res.send('home directory')
})


module.exports = router;