/**
 * Created by yurigrinshteyn on 11/6/16.
 */

var express = require('express');
var app = express();

//in app engine
//var datastore = require('@google-cloud/datastore')();

//locally
var datastore = require('@google-cloud/datastore')({
    projectId: 'autocompletegcp',
    keyFilename: './BookshelfDatastorePrivateKey.json'
});

//confirm that we have datastore and right project
console.log(datastore.projectId);

//retrieve record and output to console
var key = datastore.key(['products', 'computer']);

datastore.get(key, function(err, entity) {
    console.log(err || entity);
});

/* ---------- return response to page
// render response
 app.get('/', function(req, res){
 articleProvider.findAll( function(error,docs){
 datastore.get(key, function(err, entity) {
 // entity.data = The record.
 //console.log(entity.toString());

 res.render(entity.toString());
     console.log(entity.toString());
 // entity.key = The key.
 });

 });
 });

*/
//------ end return response



//create query
//var query = datastore.createQuery('products');
//filter
// replace with passed value when doing full version
//query.filter('computer');

//run query
/*
datastore.runQuery(query, function(err, entities, info) {
    if (err) {
        // Error handling omitted.
        return;
    }

    // Respond to the front end with the contacts and the cursoring token
    // from the query we just ran.
    var frontEndResponse = {
        products: entities
    };

    // Check if  more results may exist.
    if (info.moreResults !== datastore.NO_MORE_RESULTS) {
        frontEndResponse.nextPageCursor = info.endCursor;
    }

    res.render('contacts', frontEndResponse);
});
*/






