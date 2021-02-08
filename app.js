const express = require('express');

const path = require('path');


const app = express();



var os = require('os');



var networkInterfaces = os.networkInterfaces();



//hello world

// Serve the static files from the React app

app.use(express.static(path.join(__dirname, 'react-app/build')));




const port = process.env.PORT || 80;

app.listen(port);

console.log('App is listening on port ' + port);