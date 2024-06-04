function errorHandler(err, req, res, next) {
  const errResponse = err.message
    .replace("ValidationError: ", "")
    .split(", ")
    .reduce((acc, pair) => {
      const [key, value] = pair.split(": ");
      acc[key.trim()] = value.trim();
      return acc;
    }, {});
  res.status(err.status).json(errResponse);
}
export default errorHandler;
