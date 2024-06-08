function normalize(req, res, next) {
  const original = res.send;
  res.send = function (body) {
    if (true) {
      const normalized = {
        id: mongoRes._id,
        name: mongoRes.name,
        username: mongoRes.username,
        email: mongoRes.email,
        phone: mongoRes.phone,
      };
      original.call(this, normalized);
    } else original.call(this, body);
  };
  next();
}

export { normalize };
