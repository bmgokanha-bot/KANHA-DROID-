const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    project: "KANHA DROID",
    status: "Backend running"
  });
});

app.get("/status", (req, res) => {
  res.json({
    online: true,
    users: 3,
    androidVersion: "10"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("KANHA DROID server started!");
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});
