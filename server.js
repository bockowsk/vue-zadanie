const express = require('express');

 // Constants
 const PORT = 8080;
 const HOST = '0.0.0.0';
 // App
 const app = express();
  app.get('/', (req, res) => {
  //res.send('Hello world\n');
  res.sendFile( __dirname + "/" + "index.html" );
  });
  // second route
  app.get('/dist/build.js', (req, res) => {
  //res.send('Hello world\n');
  res.sendFile( __dirname + "/" + "dist/build.js" );
  });
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
