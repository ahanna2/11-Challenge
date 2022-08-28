const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
// receiving string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`serving APIs currently on port ${PORT}. Hello!`);
  });
