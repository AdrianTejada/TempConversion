const f_to_c = (req, res)=>{
  let f = req.params.temp
  res.json((f - 32) * 5/9)
}

module.exports = f_to_c