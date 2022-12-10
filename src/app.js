const express = require('express');
const loginRouter = require('./routers/login.router');
const userRouter = require('./routers/user.router');
const jwtService = require('./services/jwtService');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.get('/user', jwtService.validateJwt, userRouter);
app.get('/user/:id', jwtService.validateJwt, userRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
