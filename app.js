const cors = require('cors');
const express = require('express');
var bodyParser = require("body-parser");
const app = new express();

//Custom imports
const select = require('./dbfuncs/select');
const insert = require('./dbfuncs/insert');
const update = require('./dbfuncs/update');
const deleter = require('./dbfuncs/delete');
//


//Update done
app.get('/updatecard/:title/:column/:var',cors(), function(req, res) {

    const l_title = req.params.title;
    const l_var = req.params.var;
    const l_column = req.params.column;
    update.Update(l_title,l_column,l_var);

    res.redirect('/');
});


//Insert done
app.get('/createcard/:title/:img/:text',cors(), function(req, res) {
    
    const l_title = req.params.title;
    const l_img = req.params.img;
    const l_text = req.params.text;
    insert.Insert(l_title,l_img,l_text);

    res.redirect('/');
});

//Delete done
app.get('/deletecard/:title',cors(), function(req, res) {

    const l_title = req.params.title;
    deleter.Delete(l_title);

    res.redirect('/');
});


//Select
app.get('/allcards', async function(req, res) {
    var result = select.allCards();
    res.send(result);
});

app.get('/test', cors(), (req, res) => {
    res.send(select.Test());
});

app.get('/getdata/json', cors(), (req, res, next) => {
    res.json({c})
  });


app.listen(80, () => {
    console.log('App listening on port 80');
});
