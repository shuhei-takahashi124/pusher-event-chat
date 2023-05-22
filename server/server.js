// pusher-event-chat/server/server.js
require("dotenv").config({
  path: "variable.env",
});
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const Pusher = require("pusher");
const mysql = require("mysql");
const sha512 = require("js-sha512").sha512;
var jsdom = require("jsdom");

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  forceTLS: true,
});
