const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const upload = require('../multer');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/profile/:id', upload.single('file'), function(req, res) {
  User.findById(req.params.id).then(user => {
    console.log(req.file);
    user.profilePic = req.file.filename;
    return user.save();
  })
  .then(() => res.status(200).json({message:"PROFILE PIC SAVED"}))
  .catch(e => res.status(500).json({message:"Error on profile pic upload"}));

});


module.exports = router;
