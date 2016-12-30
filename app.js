'use strict';
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).sendfile('index.html');
});

app.get('/autocomplete', (req, res) => {
  console.log(req.query);

  //establish DS connection
  var datastore = require('@google-cloud/datastore')({
    projectId: 'autocompletegcp',
    keyFilename: './autocomplete-key.json'
  });

  //build query
  var query = datastore.createQuery('products')
        .filter('lowerCaseName', '>', req.query.term.toLowerCase())
        .filter('lowerCaseName', '<', req.query.term.toLowerCase() + 'zz');

  //run query
  var myArray=[]; //to store results

  datastore.runQuery(query)
        .then((results)=>{
        //success
        const products = results[0];
        console.log('Products: ' + products);
        products.forEach((product) => myArray.push(product.name));
          res.status(200).send(myArray);
    }) //run query end

});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');

});
