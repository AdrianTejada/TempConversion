const k_to_c = (req,res) => {
    let k = req.params.temp
    let c = (k - 273.15)
    res.status(200).json(c)
}

module.exports = k_to_c 