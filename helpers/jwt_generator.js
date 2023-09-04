const jwt = require('jsonwebtoken');

const jwtGenerate = ( uid = "")=> {

    return new Promise ( (resolve, reject) =>{

        const jwtPayload = {uid};
        jwt.sign(jwtPayload, process.env.SECRETORPRIVATEKEY, 
            {expiresIn: '4h'}, (err, token) => {
                if(err){
                    console.log(err);
                    reject("No se pudo generar token");
                } else {
                    resolve(token);
                }
            }
            
        );

    });

};

module.exports = {
    jwtGenerate
}