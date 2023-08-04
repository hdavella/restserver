const { validationResult } = require('express-validator');

const validarCampos= (req, res, next)=>{

    const errorsFromRoutes = validationResult(req);
    if (!errorsFromRoutes.isEmpty()){
        return res.status(400).json(errorsFromRoutes);
    }

    next();
}

module.exports= {
    validarCampos
}