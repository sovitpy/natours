const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE_URI.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((conObj) => {
    console.log('Database Connected Successfully!');
  });

const port = process.env.PORT;
app.listen(port, () => console.log(`Server Listening at port ${port}...`));
