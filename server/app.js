require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let journal = require('./controllers/journalController');
let user = require('./controllers/userController');

// ***** NEW CODE START *****
// app.use('/test', function(req, res){
//     res.send('This is a message from the test endpoint on the server!');
// })

// app.use('/patrice',function(req, res){
//     res.send("My name is Patrice and I'm 47 years old");
// });

// Have an endpoint of journal/practice
// send a response from that endpoint (This is the practice route)
 
// *****ADD 2 LINES BELOW
sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());

/********************
 * Exposed route *
 ********************/
app.use('/user', user);

/*************************
 * Protected route *
 *************************/
app.use(require('./middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});