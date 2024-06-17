const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers'); // if helpers required
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require ('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({   helpers: {
    eq: function (a, b) {
      return a === b;
    },
  }, });
// if helpers are created later { helpers } need to be an option in exphbs.create({helpers})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sesh = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
        // secure: process.env.NODE_ENV === "production", // don't really understand this yet... it's https
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sesh));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>  console.log(`Listening on http://localhost:${PORT}`));
});