const Sequelize = require('sequelize');
const UserModel = require('./models/user');

/**
 * Create MySQL connection
 */
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mssql'
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
};
