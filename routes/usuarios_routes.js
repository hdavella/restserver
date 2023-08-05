

const { Router } = require('express');
const { ususariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios_controllers');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos');
const { isValid, mailExist, existMongoId } = require('../helpers/dbvalidators');


const router = Router();

router.get("/", ususariosGet );

router.post("/",     //check("rol", "El rol no es valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    [check("password", "El password debe tener mas de 6 caracteres").isLength({min:6}),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no tiene el formato requerido").isEmail(),
    check("email").custom(mailExist),
    check("rol").custom(isValid),
    validarCampos,
],usuariosPost);

router.put("/:id", [
    check("id", "No es un MongoID válido").isMongoId(),
    check("id").custom(existMongoId),
    check("rol").custom(isValid),
    validarCampos
],usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);



module.exports = router;