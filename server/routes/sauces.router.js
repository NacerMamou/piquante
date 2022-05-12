const express = require('express');
const { authenticate } = require('../middleware/auth');
const saucesRouter = express.Router();
//const Thing = require('../models/thing.model');
const multer = require('../middleware/multer-config');

const { getAllSauces,
        getOneSauce, 
        createSauce,
        updateSauce,
        updateSauceLikeStatus,
        deleteSauce, } = require('../controllers/sauces.controller');

saucesRouter.get('/', authenticate, getAllSauces);

saucesRouter.get('/:id', authenticate, getOneSauce);

saucesRouter.post('/', authenticate, multer, createSauce);

saucesRouter.put('/:id', authenticate, multer, updateSauce);

saucesRouter.post('/:id/like', authenticate, updateSauceLikeStatus);

saucesRouter.delete('/:id', authenticate, deleteSauce);
/*
const { createThing, 
  getAllThings, 
  getOneThing,
  updtateThing,
  deleteThing } = require('../controllers/stuff.controller');

stuffRouter.post('/', authenticate, multer, createThing);

stuffRouter.get('/', authenticate, getAllThings);

stuffRouter.get('/:id', authenticate, getOneThing);

stuffRouter.put('/:id', authenticate, updtateThing);

stuffRouter.delete('/:id', authenticate, deleteThing);
*/

module.exports = saucesRouter;