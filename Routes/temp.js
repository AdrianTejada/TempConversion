const express = require('express');
const router = express.Router();
const { c_to_f, f_to_c, c_to_k, k_to_c} = require('../Operations/index.js')

const defaultMessage1 = (req, res) => {
  res.send("Here you can convert from Celsius to Fahrenheit")
}

const defaultMessage2 = (req, res) => {
  res.send("Here you can convert from Fahrenheit to Celsius")
}

const defaultMessage3 = (req, res) => {
  res.send("Here you can convert from Celsius to Kelvin")
}

const defaultMessage4 = (req, res) => {
  res.send("Here you can convert from Kelvin to Celsius")
}

router.get('/c_to_f/', defaultMessage1)
router.get('/f_to_c/', defaultMessage2)
router.get('/c_to_k/', defaultMessage3)
router.get('/k_to_c/', defaultMessage4)

router.get('/c_to_f/:temp', c_to_f)

router.get('/f_to_c/:temp',f_to_c)

router.get('/c_to_k/:temp', c_to_k)

router.get('/k_to_c/:temp', k_to_c)


router.get('/',(req,res)=>{
  res.send('Different types of temperature conversion')
})


module.exports = router;