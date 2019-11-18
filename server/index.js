const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

const contact = require('./routes/API/contact');
app.use('/API/contact', contact);

const PORT = process.env.PORT || 5000;


//listen on port
app.listen(PORT, () => console.log(`server is starting ${PORT}`));
