const express = require("express");
const axios = require("axios");
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Root route - renders the search form
app.get("/", (req, res) => {
  res.render("index");
});

// Fetch content from the given URL
app.get("/browse", async (req, res) => {
  const { url } = req.query;

  try {
    // Fetch the content of the URL
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.send(`Error fetching the page: ${error.message}`);
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
