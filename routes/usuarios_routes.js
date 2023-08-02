

const { Router } = require('express');
const { ususariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios_controllers');
const {check} = require('express-validator');

const router = Router();

router.get("/", ususariosGet );

router.post("/",
    [check("password", "El password debe tener mas de 6 caracteres").isLength({min:6}),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no tiene el formato requerido").isEmail(),
],usuariosPost);

router.put("/:id", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);



module.exports = router;