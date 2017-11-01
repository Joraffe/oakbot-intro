'use strict'

const dotenv = require('dotenv');

// Load env variables
dotenv.config()

const config = {
	appSecret: process.env.APP_SECRET,
  pageAccessToken: process.env.PAGE_ACCESS_TOKEN,
  validationToken: process.env.VALIDATION_TOKEN 
}

module.exports = config
