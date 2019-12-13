var mongoose = require('mongoose'); //memanggil data base

var PageSchema = mongoose.Schema({ //untuk data yg akan ada dalam tabel
     title : {
         type: String,
         required: true
     },
     link: {
         type: String
     },
     content: {
         type: String,
         required: true
     },
     sorting: {
         type: Number
     }
}); 

var Page = module.exports = mongoose.model('Pages', PageSchema); //untuk mengirim data