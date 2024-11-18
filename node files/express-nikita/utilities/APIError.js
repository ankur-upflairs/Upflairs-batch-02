
module.exports=function (cb){
    return async function (req, res) {
        try {
            await cb(req, res)
        } catch (error) {
            res.status(500).render('error.ejs', { error: 'Something went wrong' })
        }        
    }
}

// class APIError extends Error {
//     constructor(message, status) {
//         super(message)
//         this.status = status
//     }
// }

