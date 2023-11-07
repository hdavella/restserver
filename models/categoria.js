
const { Schema, model, SchemaType} = require('mongoose');
const usuario = require('./usuario');

const CategoriaSchema = Schema({

    categoria:{
        type: String,
        required: [true, "Debe contener una categoria válida"]
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        require: true
    }
});

module.exports =  model( 'Categoria', CategoriaSchema );