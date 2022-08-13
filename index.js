const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/dog', function (req, res) {
    res.send('dog wha wha')
});
  
app.get('/cat', function (req, res) {
    res.json({'sound':'cat'})
});


app.get('/sound/:name', function (req, res) {
    const {name} = req.params;
    let res_json = {};
    res_json.name = name;
    
    res.json(res_json);
});

app.get('/json', function (req, res) {
    const json_data = {
        'lbl aaa' : 'value bbb',
        'lbl bbb' : 'value ccc'
    };
    res.json(json_data);
});



app.listen(PORT,()=>{
    console.log("listenning port 3000");
});