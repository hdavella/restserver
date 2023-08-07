const { Router } = require('express');
const {check} = require('express-validator');
const login = require('../controllers/auth_controllers');
const { isValid, mailExist, existMongoId } = require('../helpers/dbvalidators');
const {validarCampos} = require('../middlewares/validar_campos');

const router = Router();

router.post("/login", [
    check("email", "El correo no tiene el formato requerido").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    //check("email").custom(mailExist),
    validarCampos
],login );

module.exports = router;