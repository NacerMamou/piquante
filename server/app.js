const express = require('express');
const path = require('path');
const cors = require('cors');

const saucesRouter = require('./routes/sauces.router');
const userRouter = require('./routes/user.router');



const app = express();

app.use(cors({
  origin: '*',
}));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

app.use(express.static(path.join(__dirname, '..', 'client', 'dist', 'hot-takes')));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'hot-takes', 'index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/sauces', saucesRouter);

/*
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRouter);
app.use('/api/auth', userRouter);
*/

module.exports = app;