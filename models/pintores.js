const mongoose  = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    nombreR: {type: String,
    required: [true, 'requerimos el nombre real']
    },
    nombreA: {type: String,
        required: [true, 'requerimos el nombre artistico']
        },
    corriente: {
        type: String, 
        required: [true, 'requerimos el estilo']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema)

