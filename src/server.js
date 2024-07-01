import express from "express";
import cors from "cors";
// import errors from "./middleware/errors.js";
import auth from "./router/auth.js";
import logger from "./middleware/logger.js";
import transform from "./middleware/ResponseTransformer.js";
import users from "./router/users.js";
import tasks from "./router/tasks.js";
import connect from "./mongo/mongo.js";

// import { normalize } from "./utils/ResponseAdapter.js";

// import morgan from "morgan";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// const corsOptions = {
//   origin: 'http://example.com', // Allow only this origin
//   methods: 'GET,POST', // Allow only these methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
//   credentials: true, // Allow credentials
//   optionsSuccessStatus: 200 // Some legacy browsers choke on 204
// };

app.use(logger);
app.use(transform);
// app.use(normalize);
// app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.get("/", (req, res) =>
  res
    .status(200)
    .send(
      "routes are : /api/users/GetAll , /GetOne/id , /Add , /Delete/id , /Update"
    )
);

// app.use(errors);

connect()
  .then(() => {
    console.log("[MONGO] Connected");
  })
  .catch((err) => console.log(err));
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
