import colors from "colors";
const errColors = {
  GET: "blue",
  POST: "green",
  PUT: "yellow",
  DELETE: "red",
};
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`[errColors[req.method]]);
  next();
}
export default logger;
