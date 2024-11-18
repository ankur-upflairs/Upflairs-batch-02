const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now()
      // const ext = file.originalname.split('.').pop()
      // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
      cb(null,Date.now() + file.originalname)
    }
  })

const upload = multer({ storage: storage })
module.exports = upload

// fileFilter: function(req, file, cb) {

//   // The function should call `cb` with a boolean
//   // to indicate if the file should be accepted
//   if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
//       cb(null, true)
//   }else{
//       cb(null, false)
//   }
//   // To reject this file pass `false`, like so:  
//   // To accept the file pass `true`, like so:  
//   // You can always pass an error if something goes wrong:
//   cb(new Error('I don\'t have a clue!'))  
// }
