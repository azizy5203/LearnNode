import express from "express";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
  const user = req.body;
  //   console.log(user);
  //   console.log("[Name]: ", name);
  res.status(201).json(user);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
