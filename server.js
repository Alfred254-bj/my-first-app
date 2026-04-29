const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CV Builder API is live 🚀");
});

// Render safe port (IMPORTANT)
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
});
