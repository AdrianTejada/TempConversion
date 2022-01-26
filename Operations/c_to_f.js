const c_to_f = (req,res)=>{
    let c = req.params.temp
    let f = (1.8 * c ) + 35
    res.status(200).json(f)
}

module.exports =  c_to_f