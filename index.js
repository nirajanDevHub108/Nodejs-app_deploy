import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT ?? 8081;

// Serve static files from public folder
app.use(express.static(path.join(process.cwd(), "public")));

// API route
app.get("/api", (req, res) => {
  return res.json({ msg: "Hello from Render deployment!" });
});

// Default route to serve HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
