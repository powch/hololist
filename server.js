  
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { twitterUri } = require('./constants');
const testData = require('./constants/testData');
const talentController = require('./controller/talentController');
const routes = require('./routes');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

//Connect db and start server
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB CONNECTED');

  setInterval(() => {
    fetch(twitterUri, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`}
    })
    .then(res => res.json())
    .then(talents => {
      const parsedData = talents.map(user => ({
        name: user.name,
        screenName: user.screen_name,
        url: user.url,
        status: {
          createdAt: user.status.created_at,
          id: user.status.id,
          text: user.status.text
        },
        profileImgUrl: user.profile_image_url
      }));

      talentController.create(parsedData);
    });
  }, 600000);
});

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
