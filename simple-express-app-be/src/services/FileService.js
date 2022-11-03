import { models } from '../models/index.js';

export const getFiles = (_, res) => {
  models.FileModel.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving files.',
      });
    });
};

export const createFile = async (req, res) => {
  console.log(req.body);
  if (!req.body.fileName) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const file = {
    fileName: req.body.fileName,
    content: req.body.content,
  };

  models.FileModel.create(file)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the file.',
      });
    });
};
