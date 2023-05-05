require("dotenv").config();

module.export=  {
    
    envVariables:{
            db_connection: process.env.DATABASE_URL,
            port: process.env.PORT, 
            k: "s"
 }
};

