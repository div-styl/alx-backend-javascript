const express = rquire('express');

const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', rounter);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port);

export default app;