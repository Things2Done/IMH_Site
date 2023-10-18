let express = require('express');
let app = express();

let project = {
    "data" : [
     {  name: "Sermon",
        class: "Critical Experience",
        term: "Fall",
        description: "A sermon from Jesus about using mushrooms and female priests to save the Church"
     },
     {  name: "Bike Around The World",
        class: "Connections Lab",
        term: "Fall",
        description: "My dream of biking around the world"
     },
     {  name: "Met",
        class: "Connections Lab",
        term: "Fall",
        description: "Layering the Metropolitian Museum of Art's Collection on top of itself"
     },
     {  name: "Pasta Russo",
        class: "Connections Lab",
        term: "Fall",
        description: "Drummer Joe Russo's recipes from pasta shop Russo's"
     },
    ]
}

app.use('/', express.static('public'));

app.use('project', (req, res) =>{
res.json(project);
})

app.listen(3456, () =>{
console.log("listneing")
})