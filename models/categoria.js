
const { Schema, model, SchemaType} = require('mongoose');
const usuario = require('./usuario');

const CategoriaSchema = Schema({

    name:{
        type: String,
        required: [true, "Debe contener un nombre"],
        unique: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports =  model( 'Categoria', CategoriaSchema );