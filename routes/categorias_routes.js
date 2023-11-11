const { Router } = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos');
const { categoriaCrearPost } = require('../controllers/categorias_controllers');
const { validarJwt } = require('../middlewares/validar_jwt');

const router = Router();

router.get("/", (req, res) => {
    res.json("GET - Categorias");
} );

router.get("/:id", (req, res) => {
    res.json("GET - Categorias por ID");
} );

router.post("/", [ 
    validarJwt,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
 ], categoriCreate
 );

 router.put("/:id", (req, res) => {
    res.json("PUT - por ID con jwt");
} );

router.delete("/:id", (req, res) => {
    res.json("DELETE - Categoria por ID con jwt y role");
} );

module.exports = router;