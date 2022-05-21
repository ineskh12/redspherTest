const mongoose = require('mongoose');

const CalculatriceSchema = mongoose.Schema({
    firstinput: Number,
    secondinput:Number,
   operation: String,
    resultat: {type: Number,default: 0 },


}, {
    timestamps: true
});

module.exports = mongoose.model('Calculatrice', CalculatriceSchema);