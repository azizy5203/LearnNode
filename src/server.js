import express from "express";
import errors from "./middleware/errors.js";
import logger from "./middleware/logger.js";
import users from "./router/users.js";
import cors from "cors";
import connect from "./mongo/mongo.js";

// import { normalize } from "./utils/ResponseAdapter.js";

// import morgan from "morgan";

const port = process.env.PORT;

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
// app.use(normalize);
// app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);

app.use((req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use(errors);

connect()
  .then(() => {
    app.listen(port, async () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
