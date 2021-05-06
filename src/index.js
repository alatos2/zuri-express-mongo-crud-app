const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Debug = require('debug');
const chalk = require('chalk');
const routes = require('./routes/apis/index');

const app = express();
const debug = Debug('app:server');

dotenv.config();

const { LIVE_DATABASE, PASSWORD, PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(LIVE_DATABASE, {
    auth: {
        user: 'admin',
        password: PASSWORD
    }
}, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => debug(chalk.green('Db Connected!!!')))
.catch(err => debug(chalk.red(err)))

app.get('/', (req, res) => {
    res.end('Hello Buddy!');
});

app.use('/api/v1/', routes);

app.listen(PORT, () => debug(chalk.green(`Server running on port ${PORT}`)));
