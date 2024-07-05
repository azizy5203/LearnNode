export default function transformResponse(req, res, next) {
  const originalSend = res.send;

  res.send = function (data) {
    const parsedData = JSON.parse(data);
    if (!req.url.startsWith("/api/auth")) {
      if (parsedData._id) {
        const transformedData = transform(parsedData);
        originalSend.call(this, JSON.stringify(transformedData));
      } else {
        const transformedData = parsedData?.map((item) => transform(item));
        originalSend.call(this, JSON.stringify(transformedData));
      }
    }
  };
  next();
}

function transform(data) {
  const id = data._id;
  delete data._id;
  return { id, ...data };
}
