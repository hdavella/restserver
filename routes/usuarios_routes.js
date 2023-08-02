

const { Router } = require('express');
const { ususariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios_controllers');

const router = Router();

router.get("/", ususariosGet );

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);



module.exports = router;