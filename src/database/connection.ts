import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('keym', 'root', 'dharani@1234', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully..');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
