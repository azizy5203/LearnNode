function errorHandler(err, req, res, next) {
  res.status(err.status).json({ msg: err.message });
}
export default errorHandler;
