import express from 'express';
import { createFile, getFiles } from '../services/FileService.js';

const router = express.Router();

router.get('/', getFiles);
router.post('/create', createFile);

export { router };
