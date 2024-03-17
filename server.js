const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;







app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
  }); 