

const { Schema, model} = require('mongoose');

const RolSchema = Schema({

    rol:{
        type: String,
        required: [true, "Debe contener un rol válido"]
    }
});

module.exports =  model( 'rol', RolSchema );