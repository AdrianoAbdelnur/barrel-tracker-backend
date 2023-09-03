
const verifyQrCode = async(req, res, next) => {
    let id = ""
    if(req.body.id) {
        id = req.body.id
    } else if (req.params.id) {
        id = req.params.id
    } 
     const code = id.substring(0, 4)
    if (code === "wein") {
        next()
    } else return res.status(400).json({message: "Unnknown QR code"})
}

module.exports = {
    verifyQrCode,
};