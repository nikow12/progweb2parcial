const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    null,
    null,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: 'mssql',

        dialectOptions: {
            authentication: {
                type: 'ntlm',
                options: {
                    domain: 'LABS',
                    userName: 'SCPC115',
                    password: process.env.WINDOWS_PASSWORD
                }
            },

            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        },

        logging: false
    }
);

module.exports = sequelize;