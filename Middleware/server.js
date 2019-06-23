const express = require('express');
const bodyParser  = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.end("working ...");
})

app.route('/api/items/done').get((req, res) => {
    res.send({
        done: [
            'Duster',
            'Book',
            'Pen',
            'Sticky notes',
            'Marker'
        ]
    })
});


app.route('/api/items/todo').get((req, res) => {
    res.send({
        todo: [
            'Pencil',
            'Bag',
            'Stappler',
            'Stappil pins'
        ]
    })
});

app.route('/api/authenticate').post((req, res) => {
    var user_name = req.body.name;
    var password = req.body.password;
    console.log(user_name+"-----"+password);
    if(user_name==="test" && password==="test"){
        res.end("yes");
    }
    else{
        res.end("No");
    }
});

app.listen(3001, () => {
    console.log("started");
});
