const express = require("express");
const PORT = process.env.PORT || 5000
express()
  .get('/', (req, res) => res.send('Hii there'))
  .listen(PORT, () => console.log(`Listening on a ${PORT}`));