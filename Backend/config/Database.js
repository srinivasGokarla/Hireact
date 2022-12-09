import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','pass',{
    host: "localhost",
    dialect: "mysql",
    user : "root",
    password : "Srinivas@217",
   
});
db.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

export default db;