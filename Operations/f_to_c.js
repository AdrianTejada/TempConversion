const f_to_c = (req, res)=>{
  let f = req.params.temp
  res.status(200).json((f - 32) * 5/9)
}

module.exports = f_to_c