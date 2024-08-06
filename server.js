const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // change this to your MySQL password
  database: 'my_database' // change this to your database name
});