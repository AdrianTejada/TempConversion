const express = require('express');
const router = express.Router();
const { c_to_f, f_to_c, c_to_k, k_to_c} = require('../Operations/index.js')

const welcomeMessage = (req, res) => {
  res.send("Welcome to our temperature conversion")
}

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

const addTemp1  = (req, res) => {
  // let temp = f_to_c.filter(item => item.temp == req.params.temp)
  let temp = c_to_f(req.params.temp)
  res.json(temp)
}

const addTemp2  = (req, res) => {
  // let temp = f_to_c.filter(item => item.temp == req.params.temp)
  let temp = f_to_c(req.params.temp)
  res.json(temp)
}

const addTemp3  = (req, res) => {
  // let temp = f_to_c.filter(item => item.temp == req.params.temp)
  let temp = c_to_k(req.params.temp)
  res.json(temp)
}

const addTemp4  = (req, res) => {
  // let temp = f_to_c.filter(item => item.temp == req.params.temp)
  let temp = k_to_c(req.params.temp)
  res.json(temp)
}

router.get('/', welcomeMessage)


router.get('/c_to_f/', defaultMessage1)
router.get('/f_to_c/', defaultMessage2)
router.get('/c_to_k/', defaultMessage3)
router.get('/k_to_c/', defaultMessage4)

router.get('/c_to_f/:temp', addTemp1)
router.get('/f_to_c/:temp', addTemp2)
router.get('/c_to_k/:temp', addTemp3)
router.get('/k_to_c/:temp', addTemp4)




module.exports = router;