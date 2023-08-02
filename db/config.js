const mongoose = require("mongoose");

const dbConn = async () =>{

        try{

            await mongoose.connect( process.env.MONGODB_CNN/* , {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindandModify: false} */

                );
        console.log('Conn ok');

        }catch(error){
            console.log(error);
            throw new Error('Error al inicializar la db: ' + error);
        }

}

module.exports= {
    dbConn
}