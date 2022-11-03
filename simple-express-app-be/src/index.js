import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { sequelize } from './models/index.js';
import { router } from './router/index.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
});
