/*
    this file is responsibe for db connection
    usage -> just import the file to your schema and it will connect to db
*/

const mongoose = require('mongoose');
module.exports = mongoose
.connect(
  'mongodb+srv://mohamed:xo4vHKBZVH4992nU@e-commerce.wp7b28j.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => {
  console.log('connected');
})
.catch(() => {
  console.log('failed');
});