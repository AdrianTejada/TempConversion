const express = require('express');
const app = express();
const temprouter = require('./Routes/temp');

app.use(express.json())


app.use(temprouter)

app.listen(3000, () => console.log('serving running on 3000'))

