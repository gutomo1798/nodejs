var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', function (req, res) {
    res.render('index', {
        h1: 'admin area'
    });
});

router.get('/add-page', function (req, res) {
   var title ="";
   var link="";
   var content="";

    res.render('admin/add_page', {
       title : title,
       link : link,
       content : content
    });
});

// router.post('/user', [
//     // username must be an email
//     check('username').isEmail(),
//     // password must be at least 5 chars long
//     check('password').isLength({ min: 5 })
//   ], (req, res) => {
//     console.log('berhasil');
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     console.log(errors);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
  
//     User.create({
//       username: req.body.username,
//       password: req.body.password
//     }).then(user => res.json(user));
//   });

router.post('/add-page', [
    check('title', 'Title harus di isi!!!').notEmpty(), //untuk memberi pesan eror
    check('content', 'Content harus di isi!!!').notEmpty()
  ], (req, res) => {
    var title = req.body.title;
    var link = req.body.link.replace(/\s+/g, '-').toLowerCase();
    if(link==""){
        link = req.body.title.replace(/\s+/g, '-').toLowerCase();
    }
    var content = req.body.content;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const erorrs = validationResult(req);
    console.log(erorrs.errors.length);
    if(erorrs.errors.length > 0){
        res.render('admin/add_page', {
            erorrs:erorrs,
            title:title,
            link:link,
            content:content
        });
    
    }else{
        console.log('Berhasil');
    }
  });

// router.post('/add-page', function(req, res){

// check('title', 'Title harus di isi!!!').notEmpty(); //untuk memberi pesan eror
// check('content', 'Content harus di isi!!!').notEmpty();

// var title = req.body.title;
// var link = req.body.link.replace(/\s+/g, '-').toLowerCase();
// if(link==""){
//     link = req.body.title.replace(/\s+/g, '-').toLowerCase();
// }
// var content = req.body.content;

// var errors = req.validationErorrs();

// if(erorrs){
//     res.render('admin/add_page', {
//         erorrs:erorrs,
//         title:title,
//         link:link,
//         content:content
//     });

// }else{
//     console.log('Berhasil');
// }
// });


module.exports = router; //mengeskpor agar route bisa terpakai