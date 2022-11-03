import { Sequelize } from 'sequelize';
import { getFileModel } from './fileModel.js';

const sequelize = new Sequelize('small-express-app', 'postgres', '123', {
  dialect: 'postgres',
});

const models = {
  FileModel: getFileModel(sequelize, Sequelize),
};

export { sequelize, models };
