const config = require('../util/config');

const firebase = require('firebase');
firebase.initializeApp(config)

const { validateSignupData } = require('../util/validators')

