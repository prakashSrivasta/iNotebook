const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 5000 

//Default Routes

// app.get('/', (req, res) => 
//   res.send('Hello World!')
// )
// Use JSON parser middleware
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})