const c_to_k = (req,res) => {
    let c = req.params.temp
    
    let k = parseInt(c) +  273.15

    res.status(200).json(k)
}

module.exports = c_to_k