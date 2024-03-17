const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');

app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
}); 