
const Role = require('../models/rol');
const Usuario = require('../models/usuario');

const isValid = async (rol = "")=>{
    const rolExist = await Role.findOne({rol});
    if(!rolExist){
        throw new Error (`Error de rol, el rol: ${rol} no esta en la BD`);
    }
};

const mailExist = async (email = "")=>{
    const mailExistInDb = await Usuario.findOne({email})
    if(mailExistInDb){
        throw new Error (`El mail: ${email} ya existe`);
    }}

const existMongoId = async ( id = "" )=>{
    const exist = await Usuario.findById(id);
    if(!exist){
        throw new Error (`El ID: ${id} no existe`);
    }

}

module.exports = {isValid, 
    mailExist,
    existMongoId,
};