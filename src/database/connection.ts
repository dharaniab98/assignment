import { Sequelize } from 'sequelize';
import config from './../config/config';

export const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully..');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
