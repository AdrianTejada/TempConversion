const c_to_k = (req,res) => {
    let c = req.params.temp
    
    let k = (c +  273.15)

    res.json(parseInt(k))
}

module.exports = c_to_k