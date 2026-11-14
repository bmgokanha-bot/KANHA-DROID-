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
});Initial backend setup for KANHA DROID
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
