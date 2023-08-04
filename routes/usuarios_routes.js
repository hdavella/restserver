

const { Router } = require('express');
const { ususariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios_controllers');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos');
const Role = require('../models/rol')

const router = Router();

router.get("/", ususariosGet );

router.post("/",
    [check("password", "El password debe tener mas de 6 caracteres").isLength({min:6}),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no tiene el formato requerido").isEmail(),
    //check("rol", "El rol no es valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    
    check("rol").custom(async (rol)=>{
        const rolExist = await Role.findOne({rol});
        if(!rolExist){
            throw new Error (`Error de rol, el rol: ${rol} no esta en la BD`);
        }
    }),
    validarCampos,
],usuariosPost);

router.put("/:id", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);



module.exports = router;