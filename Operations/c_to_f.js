const c_to_f = (req,res)=>{
    let c = req.params.temp
    let f = (1.8 * parseInt(c)) + 32
    res.status(200).json(f + ' Fahrenheit')
}

module.exports =  c_to_f