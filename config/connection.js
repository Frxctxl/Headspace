const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jaydenBen:pass@cluster0.mkgaa.mongodb.net/headspace_db?retryWrites=true&w=majority&appName=Cluster0")

module.exports = mongoose.connection;
